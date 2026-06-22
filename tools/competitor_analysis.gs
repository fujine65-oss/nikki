// ============================================================
// 結（ゆい）競合分析ツール v2 — Google Apps Script
// Gemini 2.5 Pro ×2パス分析で精度最大化
// セットアップ手順 → Driveの「結シリーズ_管理資料/競合分析GAS_セットアップ手順」参照
// ============================================================

// --- 設定 ---
var OUTPUT_FOLDER_ID = '1yb7X4_KqfvkPLzABY_j3lNyeTbUhP-ZX';
var GEMINI_MODEL = 'gemini-2.5-pro';
var CHARS_PER_ARTICLE = 20000;
var MAX_OUTPUT_TOKENS = 65536;

// ============================================================
// メイン関数1：記事1「親の介護が始まった家族へ」の競合分析
// ============================================================
function analyzeArticle1() {
  var config = {
    theme: '親の介護が始まった家族へ — 感情の入口記事',
    perspective: PERSPECTIVE,
    urls: [
      { url: 'https://goodlifesenior.com/wp/news/12847',                           label: '企業・グッドライフシニア' },
      { url: 'https://www.ycota.jp/point/52677',                                   label: '企業・ヤマシタ' },
      { url: 'https://mcs-ainoie.com/column/column-32130/',                        label: '企業・愛の家' },
      { url: 'https://www.heartpage.jp/contents/magazine/01-00114',                 label: '企業・ハートページ' },
      { url: 'https://caresul-kaigo.jp/column/articles/36/',                        label: '企業・ケアスル介護' },
      { url: 'https://comimi.jp/archives/column/family',                            label: '企業・介護のコミミ' },
      { url: 'https://www.kaigo-soudan21.jp/column/detail/228/column0088',          label: '企業・介護なんでも相談室' },
      { url: 'https://medical.francebed.co.jp/special/column/56_care_uneasiness.php', label: '企業・フランスベッド' },
      { url: 'https://note.com/koko_care/n/n872e4701df81',                         label: 'note・ここケア日和' },
      { url: 'https://note.com/kaonagaojisan/n/n241d3f15945b',                     label: 'note・がんちょー' },
      { url: 'https://note.com/jinchi7130/n/n1aab49bec465',                        label: 'note・仁智の社長' },
      { url: 'https://note.com/famous_hyena5922/n/n5a73461d03e8',                  label: 'note・ふくむす' },
      { url: 'https://note.com/aohina4312/n/n49a4fb3f4e57',                        label: 'note・ゆーたろ' },
      { url: 'https://note.com/umita_0426/n/nf470bba750bd',                        label: 'note・海田ナゴ' },
      { url: 'https://note.com/hot_coyote5546/n/n979e056b8c6c',                    label: 'note・産業ケアマネ宮城' }
    ]
  };

  runFullAnalysis(config);
}

// ============================================================
// 記事2：介護保険の申請から認定まで
// ============================================================
function analyzeArticle2() {
  var config = {
    theme: '介護保険って、どう申請するの？ — 制度のハブ記事',
    perspective: PERSPECTIVE,
    urls: [
      { url: 'https://www.sunnylife-group.co.jp/contents/long-term-care-insurance-application', label: '企業・サニーライフ' },
      { url: 'https://kaigo.homes.co.jp/manual/insurance/how_to_get/', label: '企業・LIFULL介護' },
      { url: 'https://kaigo.alsok.co.jp/care_story/archives/46', label: '企業・ALSOK介護' },
      { url: 'https://www.kaigo-soudan21.jp/column/detail/29/column0002', label: '企業・介護なんでも相談室' },
      { url: 'https://www.sykz.co.jp/media/to-be-certified-as-requiring-long-term-care/', label: '企業・そよ風' },
      { url: 'https://www.irs.jp/media/knowledge/%E8%A6%81%E4%BB%8B%E8%AD%B7%E8%AA%8D%E5%AE%9A%E3%82%92%E5%8F%97%E3%81%91%E3%82%8B%E3%81%AB%E3%81%AF.html', label: '企業・イリーゼ' },
      { url: 'https://www.kaigokensaku.mhlw.go.jp/commentary/flow.html', label: '公式・厚労省' },
      { url: 'https://park.sompo-japan.co.jp/mylife/kaigo-san/article/sj-003/', label: '企業・SOMPO' },
      { url: 'https://note.com/aohina4312/n/ncc97d2978f09', label: 'note・ゆーたろ' },
      { url: 'https://note.com/swim_kaigo123/n/n5ad19794e80d', label: 'note・ケンコーチ' },
      { url: 'https://note.com/manato_care/n/nf2f76e10b446', label: 'note・まなと' },
      { url: 'https://note.com/20250828/n/n5539d4f8a261', label: 'note・やすらぎみちこ' },
      { url: 'https://note.com/kaikoukai/n/nfa70b455c4dd', label: 'note・偕行会グループ' },
      { url: 'https://note.com/carenews/n/n22b2da0a8b20', label: 'note・くま先生' }
    ]
  };
  runFullAnalysis(config);
}

// ============================================================
// 記事3：高齢者の熱中症と在宅の暑さ対策
// ============================================================
function analyzeArticle3() {
  var config = {
    theme: '親が、この夏を無事に越せるように — 高齢者の熱中症・在宅暑さ対策',
    perspective: PERSPECTIVE,
    urls: [
      { url: 'https://www.secom.co.jp/kaigo/basic/20180529.html', label: '企業・セコム' },
      { url: 'https://www.mhlw.go.jp/seisakunitsuite/bunya/kenkou_iryou/kenkou/nettyuu/nettyuu_taisaku/prevent.html', label: '公式・厚労省' },
      { url: 'https://www.azumien.jp/contents/industry/00062.html', label: '企業・あずみ苑' },
      { url: 'https://joylife.alsok.co.jp/knowhow/archives/49', label: '企業・ALSOKジョイライフ' },
      { url: 'https://healthscienceshop.nestle.jp/blogs/isocal/knowledge-heatstroke-001-index', label: '企業・ネスレ' },
      { url: 'https://www.pref.chiba.lg.jp/ontai/necchusho/koreisha.html', label: '公式・千葉県' },
      { url: 'https://home-health.chihiro-fukushi.jp/%E3%80%90%E9%AB%98%E9%BD%A2%E8%80%85%E5%90%91%E3%81%91%E3%80%91%E5%91%BD%E3%82%92%E5%AE%88%E3%82%8B%E7%86%B1%E4%B8%AD%E7%97%87%E5%AF%BE%E7%AD%96%EF%BC%81%E5%8E%9F%E5%9B%A0%E3%83%BB%E7%97%87%E7%8A%B6/', label: '企業・ちひろ福祉' }
    ]
  };
  runFullAnalysis(config);
}

// ============================================================
// 記事4：介護のお金
// ============================================================
function analyzeArticle4() {
  var config = {
    theme: '介護のお金 — いくらかかる？負担を軽くする制度',
    perspective: PERSPECTIVE,
    urls: [
      { url: 'https://anshinkaigo.asahi-life.co.jp/activity/kaigo/column14/', label: '企業・朝日生命' },
      { url: 'https://www.my-kaigo.com/pub/individual/money/kokyo-seido/', label: '企業・MY介護の広場' },
      { url: 'https://www.moneypro.jp/columns/others/3200/', label: '企業・マネプロ' },
      { url: 'https://www.bk.mufg.jp/column/events/secondlife/b0032.html', label: '企業・三菱UFJ' },
      { url: 'https://kaigo.benesse-style-care.co.jp/article/knowledge/beginner/support', label: '企業・ベネッセ' },
      { url: 'https://kaigo.homes.co.jp/manual/voice/kentou/seido/', label: '企業・LIFULL介護' },
      { url: 'https://www.hokenmarket.net/carna/worry/post327.html', label: '企業・イオン保険' },
      { url: 'https://note.com/hori_0023/n/n095bb9aa5d98', label: 'note・堀内たかる' },
      { url: 'https://note.com/gontamodoki/n/neb75620edcee', label: 'note・Kontam' },
      { url: 'https://note.com/yukamatsushima/n/n1aa5bd0b310a', label: 'note・YukaMatsushima' },
      { url: 'https://note.com/kurumirai08/n/na38b636030bf', label: 'note・AI活用相談所' }
    ]
  };
  runFullAnalysis(config);
}

// ============================================================
// 記事5：年末年始の帰省で親の異変に気づいたら
// ============================================================
function analyzeArticle5() {
  var config = {
    theme: '年末年始の帰省で、親の異変に気づいたら — 気づきの入口（冬）',
    perspective: PERSPECTIVE,
    urls: [
      { url: 'https://president.jp/articles/-/53324?page=1', label: '企業・PRESIDENT' },
      { url: 'https://happy-clover-k.jp/news/4406/', label: '企業・Happyクローバー' },
      { url: 'https://kaigo.homes.co.jp/manual/homecare/choosinghouse/enkyori_kaigo/', label: '企業・LIFULL介護' },
      { url: 'https://my-nurse.jp/blogs/column/enkyorikaigo/202212-3491/', label: '企業・わたしの看護師さん' },
      { url: 'https://keishin-net.jp/2025/12/27/year-end-new-year-social-care/', label: '企業・KEISHIN' },
      { url: 'https://www.caremanagement.jp/bbs/thread/15712', label: 'CMO・ケアマネ掲示板' },
      { url: 'https://care.kaigor.com/home_care/kisei_hindo/', label: '企業・いえケア' }
    ]
  };
  runFullAnalysis(config);
}

// ============================================================
// 記事6：ケアマネの選び方と付き合い方
// ============================================================
function analyzeArticle6() {
  var config = {
    theme: 'ケアマネジャーの選び方・付き合い方 — 関係づくり',
    perspective: PERSPECTIVE,
    urls: [
      { url: 'https://kaigo.homes.co.jp/manual/homecare/basic/caremanager/', label: '企業・LIFULL介護' },
      { url: 'https://e-nursingcare.com/guide/homecare/good-caremanager/', label: '企業・日刊介護新聞' },
      { url: 'https://www.sykz.co.jp/media/caremanager-selection/', label: '企業・そよ風' },
      { url: 'https://joylife.alsok.co.jp/knowhow/archives/78', label: '企業・ALSOKジョイライフ' },
      { url: 'https://www.irs.jp/media/knowledge/%E3%82%B1%E3%82%A2%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A3%E3%83%BC%E3%81%AE%E9%81%B8%E3%81%B3%E6%96%B9.html', label: '企業・イリーゼ' },
      { url: 'https://www.alsok.co.jp/person/recommend/2157/', label: '企業・ALSOK' },
      { url: 'https://www.sompo-egaoclub.com/articles/topic/1291', label: '企業・SOMPO' },
      { url: 'https://www.ycota.jp/point/28838', label: '企業・ヤマシタ' },
      { url: 'https://note.com/witty_roses5347/n/na26c540b5493', label: 'note・柳沢しおん' },
      { url: 'https://note.com/hokkaidomsw/n/nb32e9eed96e3', label: 'note・北海道MSW' },
      { url: 'https://note.com/yasashisa_biyori/n/n959dd0e766d6', label: 'note・もりたまゆみ' },
      { url: 'https://note.com/hot_coyote5546/n/n979e056b8c6c', label: 'note・産業ケアマネ宮城' },
      { url: 'https://note.com/tsumugukai/n/ndbd10606661e', label: 'note・ケアマネを紡ぐ会' }
    ]
  };
  runFullAnalysis(config);
}

// ============================================================
// 記事7-10：ユマニチュード・ミニシリーズ（共通分析）
// ============================================================
function analyzeArticle7to10_Humanitude() {
  var config = {
    theme: 'ユマニチュード・ミニシリーズ（4本）— 認知症ケアの入口から5つのステップまで',
    perspective: [
      PERSPECTIVE,
      '記事7=導入・入口、記事8=見る・話す、記事9=触れる・立つ、記事10=5つのステップ。',
      '鉄則：①商標表記（考案者・出所を明記）②効果断定NG（"やわらぐことがある"止め）③自己流誘導回避（マインドOK、手技は専門職へ橋渡し）'
    ].join('\n'),
    urls: [
      { url: 'https://jhuma.org/humanitude/', label: '公式・日本ユマニチュード学会' },
      { url: 'https://jhuma.org/%E5%AE%B6%E6%97%8F%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%A6%E3%83%9E%E3%83%8B%E3%83%81%E3%83%A5%E3%83%BC%E3%83%89-%E3%81%9D%E3%81%AE%E4%BA%BA%E3%82%89%E3%81%97%E3%81%95%E3%82%92/', label: '公式・学会（家族向け）' },
      { url: 'https://kaigo.homes.co.jp/manual/dementia/care/humanitude/', label: '企業・LIFULL介護' },
      { url: 'https://www.medical-jpn.jp/hub/ja-jp/blog/humanitude.html', label: '企業・メディカルジャパン' },
      { url: 'https://kaigo.alsok.co.jp/care_story/archives/59', label: '企業・ALSOK介護' },
      { url: 'https://www.azumien.jp/contents/method/00035.html', label: '企業・あずみ苑' },
      { url: 'https://www.ekaigotenshoku.com/ekaigowith/2020/03/26/humanitude_care/', label: '企業・ekaigo' },
      { url: 'https://www.mcsg.co.jp/kentatsu/dementia/12111', label: '企業・健達ねっと' },
      { url: 'https://wellnesslab-report.jp/pj/gamma-tech/column/care-dementia-humanitude.html', label: '企業・ウェルネスラボ' },
      { url: 'https://note.com/mako_mako278/n/nd3e9ad35b7ec', label: 'note・介護のお医者さん' },
      { url: 'https://note.com/mirimiri111_/n/n5fb71fbfc62f', label: 'note・amiami' },
      { url: 'https://note.com/seniorkaigo/n/n72e2a3cd9a05', label: 'note・シニアnet介護' },
      { url: 'https://note.com/kotokotokawasaki/n/n4798364d6d2e', label: 'note・かわさき実践講座' },
      { url: 'https://note.com/ktate79/n/nf01fb8d3575c', label: 'note・ktate' }
    ]
  };
  runFullAnalysis(config);
}

// ============================================================
// 全記事一括分析（※実行時間が長い。個別実行を推奨）
// ============================================================
function analyzeAll() {
  Logger.log('========== 全記事一括分析 開始 ==========');
  analyzeArticle1();
  analyzeArticle2();
  analyzeArticle3();
  analyzeArticle4();
  analyzeArticle5();
  analyzeArticle6();
  analyzeArticle7to10_Humanitude();
  Logger.log('========== 全記事一括分析 完了 ==========');
}

// ============================================================
// 共通の筆者プロフィール（全記事で共有）
// ============================================================
var PERSPECTIVE = [
  '筆者：現役ケアマネ13年・主任介護支援専門員。',
  '強み：企業メディアにはない"現場のリアル"。',
  '「初日に何が起きるか」「家族が見落とすこと」「ケアマネが本当に思っていること」を具体的に語れる。',
  '署名：結の音（AI下書き＋現役主任ケアマネが確認・加筆）。',
  '媒体：noteで公開。介護家族と新人ケアマネの両方に届ける。'
].join('\n');

// ============================================================
// メイン関数（任意テーマ）：analyzeCustom
// ============================================================
function analyzeCustom() {
  var config = {
    theme: '（ここにテーマを書く）',
    perspective: '（ここに自分の強み・立場を書く）',
    urls: [
      // { url: 'https://...', label: '出典名' },
    ]
  };

  if (config.urls.length === 0) {
    Logger.log('URLが空です。urls配列にURLを追加してください。');
    return;
  }
  runFullAnalysis(config);
}

// ============================================================
// コア処理：2パス分析
// ============================================================
function runFullAnalysis(config) {
  var apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!apiKey) {
    throw new Error('GEMINI_API_KEYが未設定です。プロジェクトの設定 → スクリプトプロパティから設定してください。');
  }

  Logger.log('=== 競合分析開始（2パス・精度最大） ===');
  Logger.log('モデル: ' + GEMINI_MODEL);
  Logger.log('テーマ: ' + config.theme);
  Logger.log('対象URL数: ' + config.urls.length);

  // --- Step 1: 全記事取得 ---
  var articles = fetchArticles(config.urls);
  var successCount = articles.filter(function(a) { return !a.failed; }).length;
  Logger.log('取得成功: ' + successCount + '/' + config.urls.length);

  if (successCount === 0) {
    throw new Error('1本も取得できませんでした。ネットワークを確認してください。');
  }

  // --- Step 2: パス1 — 個別記事の深掘り分析 ---
  Logger.log('');
  Logger.log('--- パス1: 個別記事の深掘り分析 ---');
  var articleAnalyses = [];
  for (var i = 0; i < articles.length; i++) {
    var a = articles[i];
    if (a.failed) {
      articleAnalyses.push({ label: a.label, analysis: '（取得失敗: ' + a.reason + '）' });
      continue;
    }
    Logger.log('  パス1 [' + (i + 1) + '/' + articles.length + '] ' + a.label + '...');
    var individualPrompt = buildPass1Prompt(config, a);
    var result = callGemini(apiKey, individualPrompt);
    articleAnalyses.push({ label: a.label, url: a.url, analysis: result });
    Utilities.sleep(2000);
  }
  Logger.log('パス1完了');

  // --- Step 3: パス2 — 横断分析・戦略合成 ---
  Logger.log('');
  Logger.log('--- パス2: 横断分析・戦略合成 ---');
  var synthesisPrompt = buildPass2Prompt(config, articleAnalyses);
  var finalAnalysis = callGemini(apiKey, synthesisPrompt);
  Logger.log('パス2完了');

  // --- Step 4: 全結果を結合してDriveに保存 ---
  var fullReport = buildFinalReport(config, articleAnalyses, finalAnalysis);
  var timestamp = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd_HHmm');
  var fileName = '競合分析_' + config.theme.substring(0, 20) + '_' + timestamp;
  saveToFolder(OUTPUT_FOLDER_ID, fileName, fullReport);
  Logger.log('');
  Logger.log('保存完了: ' + fileName);
  Logger.log('=== 全工程完了 ===');
}

// ============================================================
// 記事取得（大容量版）
// ============================================================
function fetchArticles(urlConfigs) {
  var articles = [];
  for (var i = 0; i < urlConfigs.length; i++) {
    var uc = urlConfigs[i];
    try {
      Utilities.sleep(1500);
      var response = UrlFetchApp.fetch(uc.url, {
        muteHttpExceptions: true,
        followRedirects: true,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'ja,en;q=0.9'
        }
      });

      var code = response.getResponseCode();
      if (code !== 200) {
        articles.push({ url: uc.url, label: uc.label, text: '', failed: true, reason: 'HTTP ' + code });
        Logger.log('  ✗ [' + code + '] ' + uc.label);
        continue;
      }

      var html = response.getContentText();
      var text = extractArticleText(html);
      text = text.substring(0, CHARS_PER_ARTICLE);
      articles.push({ url: uc.url, label: uc.label, text: text, failed: false, charCount: text.length });
      Logger.log('  ✓ ' + uc.label + ' (' + text.length + '文字)');

    } catch (e) {
      articles.push({ url: uc.url, label: uc.label, text: '', failed: true, reason: e.message });
      Logger.log('  ✗ ' + uc.label + ' : ' + e.message);
    }
  }
  return articles;
}

// ============================================================
// HTMLからテキスト抽出（強化版）
// ============================================================
function extractArticleText(html) {
  // メタ情報を抽出
  var title = '';
  var titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) title = titleMatch[1].replace(/<[^>]+>/g, '').trim();

  var description = '';
  var descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i);
  if (descMatch) description = descMatch[1].trim();

  // 不要な要素を除去
  var cleaned = html;
  cleaned = cleaned.replace(/<script[\s\S]*?<\/script>/gi, '');
  cleaned = cleaned.replace(/<style[\s\S]*?<\/style>/gi, '');
  cleaned = cleaned.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  cleaned = cleaned.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  cleaned = cleaned.replace(/<header[\s\S]*?<\/header>/gi, '');
  cleaned = cleaned.replace(/<aside[\s\S]*?<\/aside>/gi, '');
  cleaned = cleaned.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
  cleaned = cleaned.replace(/<form[\s\S]*?<\/form>/gi, '');
  cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, '');

  // 見出し構造を保持
  cleaned = cleaned.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n## $1\n');
  cleaned = cleaned.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n### $1\n');
  cleaned = cleaned.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n#### $1\n');
  cleaned = cleaned.replace(/<h[456][^>]*>([\s\S]*?)<\/h[456]>/gi, '\n\n##### $1\n');

  // リスト構造を保持
  cleaned = cleaned.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1');

  // 段落区切りを保持
  cleaned = cleaned.replace(/<\/p>/gi, '\n\n');
  cleaned = cleaned.replace(/<br\s*\/?>/gi, '\n');

  // 残りのタグを除去
  var text = cleaned.replace(/<[^>]+>/g, ' ');

  // エンティティをデコード
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#039;/g, "'");
  text = text.replace(/&hellip;/g, '…');
  text = text.replace(/&mdash;/g, '—');
  text = text.replace(/&ndash;/g, '–');
  text = text.replace(/&#\d+;/g, '');

  // 連続空白を圧縮（改行は保持）
  text = text.replace(/[^\S\n]+/g, ' ');
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();

  // メタ情報をプリペンド
  var meta = '';
  if (title) meta += 'タイトル: ' + title + '\n';
  if (description) meta += '概要: ' + description + '\n';
  if (meta) meta += '---\n';

  return meta + text;
}

// ============================================================
// パス1：個別記事の深掘り分析プロンプト
// ============================================================
function buildPass1Prompt(config, article) {
  return [
    'あなたはコンテンツマーケティング・SEOの専門家です。',
    '以下の記事を深く分析してください。',
    '',
    '## 分析対象',
    '- 出典: ' + article.label,
    '- URL: ' + article.url,
    '',
    '## 記事本文',
    article.text,
    '',
    '## テーマ文脈',
    config.theme,
    '',
    '## 以下の観点で分析してください',
    '',
    '### A. 記事の構造分析',
    '- 見出し構成（H1→H2→H3の流れ）を箇条書きで再現',
    '- 導入部（冒頭300文字程度）で読者にどう語りかけているか',
    '- 結論・着地の仕方（読者に何を促しているか）',
    '- 全体の文字数の印象（短め/標準/長め）',
    '',
    '### B. 読者への寄り添い方',
    '- 感情面への言及があるか（不安・怒り・悲しみ・安堵）',
    '- 具体的なエピソード・事例が含まれるか',
    '- 読者の行動を後押しする表現があるか',
    '- 「あなたは一人ではない」系のメッセージがあるか',
    '',
    '### C. 情報の専門性・正確性',
    '- 制度情報の扱い方（正確か、出典があるか、更新日が記載されているか）',
    '- 専門用語の扱い（説明あり/なし、噛み砕き度合い）',
    '- 「現場の経験」に基づく記述があるか、それとも制度解説のみか',
    '- YMYL（医療・健康・お金）の注意点を守っているか',
    '',
    '### D. SEO・マーケティング観点',
    '- タイトルのキーワード・文字数・感情訴求',
    '- メタディスクリプションの有無と質',
    '- 内部リンク・外部リンクの導線',
    '- CTA（行動喚起）の有無と種類',
    '- 筆者のプロフィール・権威性の提示方法',
    '',
    '### E. 弱点・穴',
    '- この記事に欠けている情報や視点',
    '- 現役ケアマネ13年の立場から見て「これは現場と違う」と感じる点',
    '- 読者がこの記事を読んだ後にまだ残る疑問・不安',
    '',
    '## 出力形式',
    'A〜Eの見出しごとに箇条書きで簡潔にまとめてください。',
    '最後に「この記事の強み（1行）」「この記事の弱み（1行）」を添えてください。'
  ].join('\n');
}

// ============================================================
// パス2：横断分析・戦略合成プロンプト
// ============================================================
function buildPass2Prompt(config, articleAnalyses) {
  var parts = [
    'あなたはコンテンツマーケティング戦略の専門家であり、SEOコンサルタントです。',
    '',
    '以下は、あるテーマの競合記事を個別に深掘り分析した結果です。',
    'これらを横断的に分析し、差別化戦略と公開戦略を立案してください。',
    '',
    '## テーマ',
    config.theme,
    '',
    '## 筆者の立場（差別化の軸）',
    config.perspective,
    '',
    '## 個別記事の分析結果（' + articleAnalyses.length + '本）',
    ''
  ];

  for (var i = 0; i < articleAnalyses.length; i++) {
    var aa = articleAnalyses[i];
    parts.push('=== [' + (i + 1) + '] ' + aa.label + ' ===');
    if (aa.url) parts.push('URL: ' + aa.url);
    parts.push(aa.analysis);
    parts.push('');
  }

  parts.push('');
  parts.push('## 横断分析してほしいこと（8項目・すべて詳細に）');
  parts.push('');
  parts.push('### 1. 競合記事の共通パターンマップ');
  parts.push('全記事に共通する構成・トーン・着地の型を抽出してください。');
  parts.push('「テンプレート化された部分」と「記事ごとに差が出る部分」を明確に分けてください。');
  parts.push('');
  parts.push('### 2. 情報の網羅性マトリクス');
  parts.push('以下のトピックについて、各記事がカバーしているかを表形式で整理してください：');
  parts.push('- 感情の受け止め / 制度の入口（地域包括・要介護認定） / お金 / 家族の役割分担');
  parts.push('- ケアマネの存在と役割 / 在宅vs施設 / 仕事との両立 / メンタルヘルス');
  parts.push('- 具体的な体験談 / 現場の実践知');
  parts.push('');
  parts.push('### 3. 差別化ポイントの深掘り');
  parts.push('「現役ケアマネ13年」の立場でしか書けない独自価値を、具体的に5つ以上挙げてください。');
  parts.push('それぞれについて、競合のどの記事のどの弱点を突けるかを紐づけてください。');
  parts.push('');
  parts.push('### 4. SEO・タイトル戦略');
  parts.push('4a. 競合タイトルの分析表（タイトル / 文字数 / 主要KW / 感情訴求 / 疑問形か）');
  parts.push('4b. 検索意図の分類（情報収集型 / 問題解決型 / 比較検討型）');
  parts.push('4c. 差別化タイトル案を5つ提案。それぞれに：');
  parts.push('    - タイトル文（32文字以内）');
  parts.push('    - 狙うキーワード');
  parts.push('    - なぜこのタイトルが競合より刺さるかの理由');
  parts.push('');
  parts.push('### 5. note上の競合ポジショニングマップ');
  parts.push('note上の記事を以下の2軸で位置づけてください：');
  parts.push('- 横軸：制度解説寄り ↔ 感情・体験寄り');
  parts.push('- 縦軸：一般論 ↔ 具体的・実践的');
  parts.push('「結の音」が狙うべきポジションを明示してください。');
  parts.push('');
  parts.push('### 6. 読者ペルソナと感情ジャーニー');
  parts.push('想定読者のペルソナ（年齢・状況・検索時の感情）を2パターン描写し、');
  parts.push('それぞれの「検索 → 記事到達 → 読了 → 次の行動」の感情ジャーニーを描いてください。');
  parts.push('その各段階で記事がどう機能すべきかを提案してください。');
  parts.push('');
  parts.push('### 7. 公開タイミングと配信戦略');
  parts.push('- 介護記事の季節性分析（いつ検索が増えるか）');
  parts.push('- noteのアルゴリズム上、スキ・コメントを集めやすい曜日・時間帯の仮説');
  parts.push('- 初投稿から3ヶ月間のnote運用ロードマップ提案');
  parts.push('- ハッシュタグ戦略（noteで使うべきタグ5〜10個）');
  parts.push('');
  parts.push('### 8. 記事構成のたたき台');
  parts.push('競合分析を踏まえ、「親の介護が始まった家族へ」の最適な記事構成案を作成してください：');
  parts.push('- 見出し構成（H1→H2→H3の流れ）');
  parts.push('- 各セクションで書くべき内容（2〜3行の要約）');
  parts.push('- 競合との差別化ポイントをどこに埋め込むか');
  parts.push('- 冒頭のリード文案（100文字程度）');
  parts.push('- 結びの文案（読者に次の行動を促す）');
  parts.push('');
  parts.push('## 出力形式');
  parts.push('Markdown形式。各項目に見出しをつけ、表や箇条書きを使って読みやすく。');
  parts.push('最後に以下を添えてください：');
  parts.push('');
  parts.push('### 公開戦略サマリー（Claude Codeに渡す用・簡潔版）');
  parts.push('Claude Codeでの記事制作・公開作業に必要な情報だけを抽出した要約（500文字以内）。');
  parts.push('含める：推奨タイトル1つ、推奨構成、公開タイミング、ハッシュタグ、最重要の差別化ポイント。');

  return parts.join('\n');
}

// ============================================================
// 最終レポート結合
// ============================================================
function buildFinalReport(config, articleAnalyses, finalAnalysis) {
  var timestamp = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm');
  var parts = [
    '# 競合分析レポート：' + config.theme,
    '',
    '- 生成日時: ' + timestamp,
    '- モデル: Gemini ' + GEMINI_MODEL + '（2パス分析）',
    '- 分析記事数: ' + config.urls.length,
    '- ※ この分析はAIが生成したものです。数値や事実は要確認。',
    '',
    '---',
    '',
    '# Part 1: 横断分析・戦略提案',
    '',
    finalAnalysis,
    '',
    '---',
    '',
    '# Part 2: 個別記事の深掘り分析',
    ''
  ];

  for (var i = 0; i < articleAnalyses.length; i++) {
    var aa = articleAnalyses[i];
    parts.push('## [' + (i + 1) + '] ' + aa.label);
    if (aa.url) parts.push('URL: ' + aa.url);
    parts.push('');
    parts.push(aa.analysis);
    parts.push('');
    parts.push('---');
    parts.push('');
  }

  return parts.join('\n');
}

// ============================================================
// Gemini API呼び出し（大容量版）
// ============================================================
function callGemini(apiKey, prompt) {
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/'
          + GEMINI_MODEL + ':generateContent?key=' + apiKey;

  var payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.2,
      topP: 0.95
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

  if (code === 429) {
    Logger.log('  レート制限。30秒待機して再試行...');
    Utilities.sleep(30000);
    response = UrlFetchApp.fetch(url, options);
    code = response.getResponseCode();
  }

  if (code !== 200) {
    var errorText = response.getContentText();
    throw new Error('Gemini API エラー (' + code + '): ' + errorText.substring(0, 500));
  }

  var json = JSON.parse(response.getContentText());
  if (json.candidates && json.candidates.length > 0 &&
      json.candidates[0].content && json.candidates[0].content.parts) {
    return json.candidates[0].content.parts[0].text;
  }

  if (json.candidates && json.candidates[0] && json.candidates[0].finishReason === 'SAFETY') {
    return '（安全フィルターにより出力がブロックされました）';
  }

  throw new Error('Gemini APIから有効な応答がありませんでした: ' + JSON.stringify(json).substring(0, 500));
}

// ============================================================
// Google Driveに保存
// ============================================================
function saveToFolder(folderId, fileName, content) {
  var folder = DriveApp.getFolderById(folderId);
  folder.createFile(fileName + '.md', content, MimeType.PLAIN_TEXT);
}
