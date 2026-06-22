// ============================================================
// 結（ゆい）競合分析ツール — Google Apps Script
// Gemini APIで競合記事を取得・分析し、Driveに要約を保存する
// セットアップ手順 → Driveの「結シリーズ_管理資料/競合分析GAS_セットアップ手順」参照
// ============================================================

// --- 設定 ---
var OUTPUT_FOLDER_ID = '1yb7X4_KqfvkPLzABY_j3lNyeTbUhP-ZX'; // 結シリーズ_管理資料
var GEMINI_MODEL = 'gemini-2.5-flash'; // 高速・低コスト。精度重視なら 'gemini-2.5-pro'

// ============================================================
// メイン関数1：記事1「親の介護が始まった家族へ」の競合分析
// ============================================================
function analyzeArticle1() {
  var theme = '親の介護が始まった家族へ — 感情の入口記事';
  var perspective = '現役ケアマネ13年（主任介護支援専門員）の実践知で書く記事。企業メディアにはない"現場のリアル"が強み。';

  var urls = [
    'https://goodlifesenior.com/wp/news/12847',
    'https://www.ycota.jp/point/52677',
    'https://mcs-ainoie.com/column/column-32130/',
    'https://www.heartpage.jp/contents/magazine/01-00114',
    'https://caresul-kaigo.jp/column/articles/36/',
    'https://comimi.jp/archives/column/family',
    'https://www.kaigo-soudan21.jp/column/detail/228/column0088',
    'https://medical.francebed.co.jp/special/column/56_care_uneasiness.php',
    'https://note.com/koko_care/n/n872e4701df81',
    'https://note.com/kaonagaojisan/n/n241d3f15945b',
    'https://note.com/jinchi7130/n/n1aab49bec465',
    'https://note.com/famous_hyena5922/n/n5a73461d03e8',
    'https://note.com/aohina4312/n/n49a4fb3f4e57',
    'https://note.com/umita_0426/n/nf470bba750bd',
    'https://note.com/hot_coyote5546/n/n979e056b8c6c'
  ];

  runAnalysis(theme, perspective, urls);
}

// ============================================================
// メイン関数2：任意テーマで分析（使い回し用）
// ============================================================
function analyzeCustom() {
  var theme = '（ここにテーマを書く）';
  var perspective = '（ここに自分の強み・立場を書く）';
  var urls = [
    // '（ここにURLを追加）',
  ];

  if (urls.length === 0) {
    Logger.log('URLが空です。urls配列にURLを追加してください。');
    return;
  }
  runAnalysis(theme, perspective, urls);
}

// ============================================================
// コア処理
// ============================================================
function runAnalysis(theme, perspective, urls) {
  var apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!apiKey) {
    throw new Error('GEMINI_API_KEYが未設定です。プロジェクトの設定 → スクリプトプロパティから設定してください。');
  }

  Logger.log('=== 競合分析開始 ===');
  Logger.log('テーマ: ' + theme);
  Logger.log('対象URL数: ' + urls.length);

  var articles = fetchArticles(urls);
  var successCount = articles.filter(function(a) { return !a.failed; }).length;
  Logger.log('取得成功: ' + successCount + '/' + urls.length);

  var prompt = buildAnalysisPrompt(theme, perspective, articles);
  Logger.log('Gemini API呼び出し中...');
  var analysis = callGemini(apiKey, prompt);
  Logger.log('分析完了');

  var timestamp = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd_HHmm');
  var fileName = '競合分析_' + theme.substring(0, 20) + '_' + timestamp;
  saveToFolder(OUTPUT_FOLDER_ID, fileName, analysis);
  Logger.log('保存完了: ' + fileName);
  Logger.log('=== 完了 ===');
}

// ============================================================
// 記事取得
// ============================================================
function fetchArticles(urls) {
  var articles = [];
  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    try {
      Utilities.sleep(1000);
      var response = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        followRedirects: true,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; research-bot)' }
      });

      var code = response.getResponseCode();
      if (code !== 200) {
        articles.push({ url: url, text: '', failed: true, reason: 'HTTP ' + code });
        Logger.log('  ✗ [' + code + '] ' + url);
        continue;
      }

      var html = response.getContentText();
      var text = stripHtml(html);
      text = text.substring(0, 5000);
      articles.push({ url: url, text: text, failed: false });
      Logger.log('  ✓ ' + url.substring(0, 60) + '... (' + text.length + '文字)');

    } catch (e) {
      articles.push({ url: url, text: '', failed: true, reason: e.message });
      Logger.log('  ✗ [エラー] ' + url + ' : ' + e.message);
    }
  }
  return articles;
}

// ============================================================
// HTMLからテキスト抽出（簡易版）
// ============================================================
function stripHtml(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  html = html.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  html = html.replace(/<header[\s\S]*?<\/header>/gi, '');
  var text = html.replace(/<[^>]+>/g, ' ');
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

// ============================================================
// 分析プロンプト生成
// ============================================================
function buildAnalysisPrompt(theme, perspective, articles) {
  var parts = [];
  parts.push('あなたはコンテンツマーケティングの専門家です。');
  parts.push('以下の競合記事を分析し、指定された観点で要約・提案してください。');
  parts.push('');
  parts.push('## テーマ');
  parts.push(theme);
  parts.push('');
  parts.push('## 筆者の立場（差別化の軸）');
  parts.push(perspective);
  parts.push('');
  parts.push('## 競合記事（' + articles.length + '本）');

  for (var i = 0; i < articles.length; i++) {
    var a = articles[i];
    parts.push('');
    parts.push('--- 記事' + (i + 1) + ' ---');
    parts.push('URL: ' + a.url);
    if (a.failed) {
      parts.push('（取得失敗: ' + a.reason + '）');
    } else {
      parts.push(a.text);
    }
  }

  parts.push('');
  parts.push('## 分析してほしいこと（5項目）');
  parts.push('');
  parts.push('### 1. 競合の共通パターン');
  parts.push('これらの記事に共通する構成パターンを整理してください。見出しの流れ、最初に何を語っているか、読者にどう寄り添っているか、最後にどう着地しているか。');
  parts.push('');
  parts.push('### 2. 差別化ポイント');
  parts.push('筆者の立場（上記）から書ける独自の内容は何か？企業メディアやnote上の記事がカバーできていない"穴"を指摘してください。');
  parts.push('');
  parts.push('### 3. SEO・タイトル分析');
  parts.push('競合記事のタイトルを分析（キーワード、文字数、感情表現、疑問形かどうか）。そのうえで差別化できるタイトル案を3つ提案してください。条件：現役ケアマネが書いている安心感が伝わること。');
  parts.push('');
  parts.push('### 4. note上の競合比較');
  parts.push('note上の記事について、内容の深さ・具体性・トーンを比較してください。差をつけるポイントは何か。');
  parts.push('');
  parts.push('### 5. 公開タイミングの示唆');
  parts.push('介護関連の記事が読まれやすい時期やタイミングのヒントがあれば教えてください（年末年始、GW、敬老の日など季節性）。');
  parts.push('');
  parts.push('## 出力形式');
  parts.push('Markdown形式で、見出しをつけて読みやすく整理してください。');
  parts.push('最後に「公開戦略の提案（3行まとめ）」を入れてください。');

  return parts.join('\n');
}

// ============================================================
// Gemini API呼び出し
// ============================================================
function callGemini(apiKey, prompt) {
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/'
          + GEMINI_MODEL + ':generateContent?key=' + apiKey;

  var payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      maxOutputTokens: 8192,
      temperature: 0.3
    }
  };

  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();

  if (code !== 200) {
    var errorText = response.getContentText();
    throw new Error('Gemini API エラー (' + code + '): ' + errorText.substring(0, 500));
  }

  var json = JSON.parse(response.getContentText());
  if (json.candidates && json.candidates.length > 0 &&
      json.candidates[0].content && json.candidates[0].content.parts) {
    return json.candidates[0].content.parts[0].text;
  }

  throw new Error('Gemini APIから有効な応答がありませんでした');
}

// ============================================================
// Google Driveに保存
// ============================================================
function saveToFolder(folderId, fileName, content) {
  var folder = DriveApp.getFolderById(folderId);
  var header = '# ' + fileName + '\n';
  header += '# 生成日時: ' + Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm') + '\n';
  header += '# ツール: 結_競合分析GAS (Gemini ' + GEMINI_MODEL + ')\n';
  header += '# ※ この分析はAIが生成したものです。数値や事実は要確認。\n\n';

  folder.createFile(fileName + '.md', header + content, MimeType.PLAIN_TEXT);
}
