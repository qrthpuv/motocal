var React = require('react');

var multiLangData = {
    "motocal": {
        "en": "motocal / Granblue Fantasy ATK Calculator",
        "ja": "元カレ計算機(グラブル攻撃力計算機)",
    },
    "なし": {
        "en": "No job",
        "ja": "なし",
    },
    "無し": {
        "en": "none",
        "ja": "無し",
    },
    "火": {
        "en": "Fire",
        "ja": "火",
    },
    "風": {
        "en": "Wind",
        "ja": "風",
    },
    "土": {
        "en": "Earth",
        "ja": "土",
    },
    "水": {
        "en": "Water",
        "ja": "水",
    },
    "光": {
        "en": "Light",
        "ja": "光",
    },
    "闇": {
        "en": "Dark",
        "ja": "闇",
    },
    "通常バフ": {
        "en": "Normal Buff",
        "ja": "通常バフ",
    },
    "属性バフ": {
        "en": "Element Buff",
        "ja": "属性バフ",
    },
    "その他バフ": {
        "en": "Other Buff",
        "ja": "その他バフ",
    },
    "HPバフ": {
        "en": "HP Buff",
        "ja": "HPバフ",
    },
    "DAバフ": {
        "en": "Double Attack Buff",
        "ja": "DAバフ",
    },
    "TAバフ": {
        "en": "Triple Attack Buff",
        "ja": "TAバフ",
    },
    "追加ダメージバフ": {
        "en": "Additional Damage Buff",
        "ja": "追加ダメージバフ",
    },
    "残HP割合": {
        "en": "Remain HP Ratio",
        "ja": "残HP割合",
    },
    "残HP割合説明(ジータのみ)": {
        "en": "Remain HP Ratio of the Player. Use \"Remain HP Ratio\" form in Buff for Party if you want to set the remain HP ratio of all member.",
        "ja": "ジータさんの残りHP割合です。パーティ全体の残りHP割合を一括で指定したい場合は、\"パーティ全体への効果\"側で\”残HP割合\"を指定して下さい。",
    },
    "奥義ゲージ上昇率アップ": {
        "en": "Ougi Gage Buff",
        "ja": "奥義ゲージ上昇量アップ",
    },
    "奥義ゲージ上昇率アップ詳細": {
        "en": "Used on the expected turn damage calculation.",
        "ja": "奥義ゲージ上昇量に影響します。予想ターン毎ダメージの算出に使用されます。",
    },
    "プロフィールタイトル": {
        "en": "Player Infomation",
        "ja": "ジータさん情報 (*: 推奨入力項目)",
    },
    "ランク": {
        "en": "Rank",
        "ja": "ランク",
    },
    "ランク説明": {
        "en": "Base ATK and HP are based on this value.",
        "ja": "基礎攻撃力、基礎HPなどはランクに従って自動で計算されます",
    },
    "ジョブ": {
        "en": "Job",
        "ja": "ジョブ",
    },
    "ジョブ説明": {
        "en": "Job bonuses and Favorite arm bonuses are automatically inclueded in calculation. Select \"none\" if you want no bonuses and favorite arms.",
        "ja": "ジョブごとのボーナス等は自動で反映されます。得意武器補正などを反映したくない場合\"なし\"を選択して下さい。",
    },
    "ゼニス攻撃力": {
        "en": "Zenith Park ATK",
        "ja": "ゼニス攻撃力",
    },
    "ゼニスHP": {
        "en": "Zenith Park HP",
        "ja": "ゼニスHP",
    },
    "マスボATK": {
        "en": "Master Bonus ATK",
        "ja": "マスターボーナスATK",
    },
    "マスボATK説明": {
        "en": "The value of Job Master bonus \"ATK+○○%\"",
        "ja": "ジョブマスターボーナスの\"攻撃力+○○％\"の値です\n(各ジョブごとのボーナスとは別です)",
    },
    "マスボHP": {
        "en": "Master Bonus HP",
        "ja": "マスターボーナスHP",
    },
    "マスボHP説明": {
        "en": "The value of Job Master bonus \"HP+○○%\"",
        "ja": "ジョブマスターボーナスの\"HP+○○％\"の値です\n(各ジョブごとのボーナスとは別です)",
    },
    "ジータさん属性": {
        "en": "Player's Element",
        "ja": "ジータさん属性",
    },
    "敵の属性": {
        "en": "Enemy's Element",
        "ja": "敵の属性",
    },
    "敵の属性説明": {
        "en": "Element Correlation is automatically judged.",
        "ja": "有利/非有利/不利は、敵の属性に従って自動で判定されます。",
    },
    "武器ゼニス1": {
        "en": "Arm Zenith Park I",
        "ja": "武器ゼニスI",
    },
    "武器ゼニス2": {
        "en": "Arm Zenith Park II",
        "ja": "武器ゼニスII",
    },
    "武器ゼニス説明": {
        "en": "",
        "ja": "得意武器IIのゼニス（★4以上）は、Iをすべてマスター済みという前提で各6%, 8%, 10%として計算します。",
    },
    "攻撃ボーナス": {
        "en": "Attack Bonus",
        "ja": "攻撃ボーナス",
    },
    "パーティバフタイトル": {
        "en": "Buff for Party",
        "ja": "パーティ全体へのバフ等 (%表記)",
    },
    "パーティバフ説明": {
        "en": "Input buffs for a party.",
        "ja": "パーティメンバ全体にかかるバフ等の情報を入力してください",
    },
    "ジータさんのみ": {
        "en": "(Player only)",
        "ja": "(ジータさんのみ)",
    },
    "ジータさん": {
        "en": "Player",
        "ja": "ジータさん",
    },
    "銃": {
        "en": "Gun",
        "ja": "銃",
    },
    "刀": {
        "en": "Katana",
        "ja": "刀",
    },
    "斧": {
        "en": "Axe",
        "ja": "斧",
    },
    "弓": {
        "en": "Bow",
        "ja": "弓",
    },
    "剣": {
        "en": "Sword",
        "ja": "剣",
    },
    "短剣": {
        "en": "Dagger",
        "ja": "短剣",
    },
    "格闘": {
        "en": "Fist",
        "ja": "格闘",
    },
    "槍": {
        "en": "Spear",
        "ja": "槍",
    },
    "楽器": {
        "en": "Harp",
        "ja": "楽器",
    },
    "杖": {
        "en": "Staff",
        "ja": "杖",
    },
    "得意": {
        "en": "Favorite",
        "ja": "得意",
    },
    "ベルセルク": {
        "en": "Berserk",
        "ja": "ベルセルク",
    },
    "セージ": {
        "en": "Sage",
        "ja": "セージ",
    },
    "スパルタ": {
        "en": "Sparta",
        "ja": "スパルタ",
    },
    "ウォーロック": {
        "en": "Warlock",
        "ja": "ウォーロック",
    },
    "カオスルーダー": {
        "en": "Chaos ruler",
        "ja": "カオスルーダー",
    },
    "義賊": {
        "en": "Gizoku",
        "ja": "義賊",
    },
    "レスラー": {
        "en": "Wrestler",
        "ja": "レスラー",
    },
    "ハウンドドッグ": {
        "en": "Hound dog",
        "ja": "ハウンドドッグ",
    },
    "アルケミスト": {
        "en": "Alchemist",
        "ja": "アルケミスト",
    },
    "忍者": {
        "en": "Ninja",
        "ja": "忍者",
    },
    "侍": {
        "en": "Samurai",
        "ja": "侍",
    },
    "剣聖": {
        "en": "Sword Holy",
        "ja": "剣聖",
    },
    "ガンスリンガー": {
        "en": "Gunsringer",
        "ja": "ガンスリンガー",
    },
    "賢者": {
        "en": "Wiseman",
        "ja": "賢者",
    },
    "アサシン": {
        "en": "Assassin",
        "ja": "アサシン",
    },
    "ウェポンマスター": {
        "en": "Weapon master",
        "ja": "ウェポンマスター",
    },
    "ホーリーセイバー": {
        "en": "Holy saber",
        "ja": "ホーリーセイバー",
    },
    "ダークフェンサー": {
        "en": "Dark Fencer",
        "ja": "ダークフェンサー",
    },
    "ビショップ": {
        "en": "Bisshop",
        "ja": "ビショップ",
    },
    "ハーミット": {
        "en": "Hermit",
        "ja": "ハーミット",
    },
    "ホークアイ": {
        "en": "Hork eye",
        "ja": "ホークアイ",
    },
    "オーガ": {
        "en": "Oga",
        "ja": "オーガ",
    },
    "サイドワインダー": {
        "en": "Side winder",
        "ja": "サイドワインダー",
    },
    "スーパースター": {
        "en": "Super star",
        "ja": "スーパースター",
    },
    "ヴァルキュリア": {
        "en": "Valkyrie",
        "ja": "ヴァルキュリア",
    },
    "": {
        "en": "",
        "ja": "",
    },
    "": {
        "en": "",
        "ja": "",
    },
    "": {
        "en": "",
        "ja": "",
    },
    "": {
        "en": "",
        "ja": "",
    },
    "": {
        "en": "",
        "ja": "",
    },
}

// 言語設定
module.exports.getLocale = function() {
    var lang = (
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage);
    if(lang == "ja-jp") lang = "ja";
    if(lang != "ja") lang = "en";

    return lang;
}

module.exports.translate = function(key, locale) {
    console.log("key = ", key)
    if(key == undefined || key == "") return "";
    return multiLangData[key][locale];
}