"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [ideaText, setIdeaText] = useState("");
  const [ideaList, setIdeaList] = useState<idea[]>([]);
  const [word_1, setWord_1] = useState<String>("");
  const [word_2, setWord_2] = useState<String>("");

  type idea = {
    word_1: String;
    word_2: String;
    idea: String;
  };

  const clickBtn = () => {
    setIsShow(true);

    setWord_1(wordlist_1[Math.floor(Math.random() * wordlist_1.length)]);
    setWord_2(wordlist_2[Math.floor(Math.random() * wordlist_2.length)]);
  };

  const signIn = () => {
    alert("sign in ");
  };

  const createIdea = () => {
    if (ideaText === "") return;
    const newIdea = {
      word_1: word_1,
      word_2: word_2,
      idea: ideaText,
    };
    const newIdeaList = [...ideaList, newIdea];
    setIdeaList(newIdeaList);
    setIdeaText("");
  };

  const wordlist_1 = [
    "りんご",
    "バナナ",
    "オレンジ",
    "パイナップル",
    "イチゴ",
    "グレープ",
    "メロン",
    "スイカ",
    "キウイ",
    "レモン",
    "トマト",
    "キャベツ",
    "ブロッコリー",
    "にんじん",
    "じゃがいも",
    "たまねぎ",
    "ほうれん草",
    "かぼちゃ",
    "ピーマン",
    "セロリ",
    "なす",
    "さつまいも",
    "ねぎ",
    "かぶ",
    "レタス",
    "かりんとう",
    "せんべい",
    "ポテトチップス",
    "アイスクリーム",
    "チョコレート",
    "クッキー",
    "プリン",
    "ケーキ",
    "ゼリー",
    "パン",
    "うどん",
    "そば",
    "ラーメン",
    "ピザ",
    "ハンバーガー",
    "寿司",
    "サンドイッチ",
    "カレーライス",
    "オムライス",
    "チャーハン",
    "おにぎり",
    "フライドチキン",
    "焼き鳥",
    "たこ焼き",
    "おでん",
    "ホットドッグ",
    "ラーメン",
    "サラダ",
    "スープ",
    "天ぷら",
    "お寿司",
    "お好み焼き",
    "納豆",
    "刺身",
    "煮物",
    "コーヒー",
    "紅茶",
    "緑茶",
    "ジュース",
    "水",
    "ビール",
    "ワイン",
    "日本酒",
    "お茶",
    "牛乳",
    "卵",
    "肉",
    "魚",
    "豆腐",
    "チーズ",
    "バター",
    "野菜",
    "果物",
    "パスタ",
    "ご飯",
    "麺",
    "お菓子",
    "甘い",
    "辛い",
    "塩辛い",
    "苦い",
    "おいしい",
    "不味い",
    "美味しい",
    "食べ物",
    "飲み物",
    "冷たい",
    "暑い",
    "寒い",
    "温かい",
    "暖かい",
    "冷静",
    "悲しい",
    "嬉しい",
    "怒り",
    "恐れ",
    "驚き",
    "楽しい",
    "痛い",
    "痒い",
    "疲れた",
    "元気",
    "病気",
    "健康",
    "面白い",
    "退屈",
    "興味",
    "好き",
    "嫌い",
    "忙しい",
    "暇",
    "積極的",
    "消極的",
    "甘い",
    "苦い",
    "塩辛い",
    "酸っぱい",
    "辛い",
    "ほんの少し",
    "たくさん",
    "いくつか",
    "すべて",
    "何か",
    "誰か",
    "いつか",
    "なにか",
    "これ",
    "それ",
    "あれ",
    "この",
    "その",
    "あの",
    "ここ",
    "そこ",
    "あそこ",
    "だれ",
    "なに",
    "どう",
    "いつ",
    "何",
    "どの",
    "どれ",
    "だれ",
    "いくつ",
    "いくつか",
    "何か",
    "誰か",
    "いつか",
    "なにか",
    "はい",
    "もう一度",
    "お願い",
    "ありがとう",
    "すみません",
    "おはよう",
    "こんにちは",
    "こんばんは",
    "おやすみ",
    "さようなら",
    "失礼",
    "いただきます",
    "ごちそうさま",
    "おめでとう",
    "お大事に",
    "幸せ",
    "愛",
    "友情",
    "家族",
    "恋愛",
    "笑顔",
    "涙",
    "夢",
    "希望",
    "勇気",
    "幸運",
    "成功",
    "失敗",
    "勉強",
    "仕事",
    "旅行",
    "音楽",
    "映画",
    "本",
    "絵本",
    "新聞",
    "雑誌",
    "パソコン",
    "スマートフォン",
    "テレビ",
    "カメラ",
    "時計",
    "鏡",
    "携帯電話",
    "自転車",
    "車",
    "電車",
    "バス",
    "飛行機",
    "船",
    "ビル",
    "家",
    "アパート",
    "寮",
    "テーブル",
    "椅子",
    "ソファ",
    "ベッド",
    "本棚",
    "時計",
    "鏡",
    "机",
    "タンス",
    "ライト",
    "カーテン",
    "冷蔵庫",
    "洗濯機",
    "掃除機",
    "扇風機",
    "エアコン",
    "電子レンジ",
    "オーブン",
    "テレビ",
    "ラジオ",
    "コンピュータ",
    "冷房",
    "暖房",
    "CDプレーヤー",
    "プリンター",
    "スマートフォン",
    "タブレット",
    "カメラ",
    "ゲーム機",
    "電話",
    "ヘッドフォン",
    "ノートパソコン",
    "冷凍庫",
    "食器洗い機",
    "電気ポット",
    "電気ランドリー",
    "電気ストーブ",
    "食洗機",
    "電子レンジ",
    "ドライヤー",
    "洗濯機",
    "電車",
    "オーブン",
    "トースター",
    "テレビ",
    "洗濯乾燥機",
    "エアコン",
  ];
  const wordlist_2 = [
    "テレビ",
    "冷蔵庫",
    "洗濯機",
    "エアコン",
    "電子レンジ",
    "掃除機",
    "電気ポット",
    "電話",
    "ドライヤー",
    "炊飯器",
    "コーヒーメーカー",
    "電気ストーブ",
    "オーブントースター",
    "電気ランドリー",
    "食器洗い機",
    "アイロン",
    "ミキサー",
    "ホットプレート",
    "加湿器",
    "扇風機",
    "ラジオ",
    "電気圧力鍋",
    "デジタルカメラ",
    "ビデオカメラ",
    "スマートフォン",
    "タブレット",
    "ノートパソコン",
    "プリンター",
    "電子辞書",
    "電卓",
    "電動歯ブラシ",
    "電子体温計",
    "冷風機",
    "空気清浄機",
    "電動カミソリ",
    "電子マネー",
    "電動自転車",
    "電動キックボード",
    "電動スクーター",
    "電動バイク",
    "クーラーボックス",
    "アロマディフューザー",
    "電動歯磨き器",
    "カーナビ",
    "電動シェーバー",
    "パソコンデスク",
    "椅子",
    "ベッド",
    "ソファ",
    "テーブル",
    "本棚",
    "タンス",
    "鏡",
    "ライト",
    "カーテン",
    "クッション",
    "布団",
    "ハンガーラック",
    "ワードローブ",
    "キッチンカウンター",
    "オフィスチェア",
    "書棚",
    "ランドリーボックス",
    "コートハンガー",
    "タオル掛け",
    "テレビ台",
    "ローテーブル",
    "椅子カバー",
    "ガーデンテーブル",
    "ガーデンチェア",
    "コンパクトデスク",
    "サイドテーブル",
    "折りたたみテーブル",
    "スツール",
    "おもちゃキッチン",
    "おままごとセット",
    "積み木",
    "ブロック",
    "知育玩具",
    "パズル",
    "おえかきボード",
    "トランポリン",
    "車のおもちゃ",
    "ぬいぐるみ",
    "ボールプール",
    "お風呂のおもちゃ",
    "シルバニアファミリー",
    "ベビージム",
    "乗り物のおもちゃ",
    "ドールハウス",
    "ラジコンカー",
    "キッチンセット",
    "お医者さんセット",
    "おしゃべり人形",
    "ミニカー",
    "ティッシュボックスカバー",
    "リモコンカー",
    "抱き枕",
    "お手玉",
    "フラフープ",
    "風船",
    "クレヨン",
    "マジックペン",
    "おえかきセット",
    "ビー玉",
    "ビデオゲーム",
    "ボードゲーム",
    "かるた",
    "将棋",
    "おままごと食材",
    "お絵かきセット",
    "サッカーボール",
    "野球ボール",
    "バスケットボール",
    "ラグビーボール",
    "テニスボール",
    "バドミントンシャトル",
    "卓球ボール",
    "ビーチボール",
    "ゴムボール",
    "ケーキ型",
    "ぬりえ",
    "おばけキャッチャー",
    "おもちゃのキッチン",
    "おもちゃの冷蔵庫",
    "おもちゃの洗濯機",
    "ミニおもちゃ",
    "ミニチュアおもちゃ",
    "おもちゃのセット",
    "おもちゃの道具",
    "おもちゃのボール",
    "ぬいぐるみのおもちゃ",
    "ぬいぐるみの動物",
    "おもちゃの自動車",
    "おもちゃの乗り物",
    "乗り物のおもちゃ",
    "木製のおもちゃ",
    "ガラガラ",
    "手作りのおもちゃ",
    "おもちゃの電車",
    "おもちゃのラジコン",
    "アクションフィギュア",
    "ボードゲームのおもちゃ",
    "知育おもちゃ",
    "パズルのおもちゃ",
    "電動のおもちゃ",
    "プレイマット",
    "音楽おもちゃ",
    "おもちゃのピアノ",
    "おもちゃのギター",
    "おもちゃのドラム",
    "おもちゃのマイク",
    "おもちゃのカメラ",
    "おもちゃの携帯電話",
    "おもちゃのテレビ",
    "おもちゃのコンピュータ",
    "おもちゃのパソコン",
    "おもちゃのタブレット",
    "おもちゃの時計",
    "おもちゃのお金",
  ];

  return (
    <div>
      <nav className="flex justify-around items-center mx-[10%] mt-2 border-b-2">
        <div>
          <h1 className="text-gray-500 text-2xl mb-2">IdeaGenerator</h1>
        </div>
        <button
          onClick={signIn}
          className="px-4 py-2 mb-2 mx-4 transition-all duration-400 bg-gray-400 rounded-md text-white text-xl hover:bg-gray-300"
        >
          signIn
        </button>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-center items-center flex-col gap-3">
          <motion.div
            whileHover={{ scale: [1, 1.2, 1, 1.1] }}
            transition={{ duration: 0.5, repeatDelay: 0.5 }}
          >
            <button
              onClick={clickBtn}
              className="mt-12 p-5 transition-all duration-400 bg-yellow-500 rounded-md text-white text-2xl hover:bg-yellow-400"
            >
              Generate Idea
            </button>
          </motion.div>
          <AnimatePresence>
            {isShow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="mt-12 flex gap-5 justify-center items-center">
                    <div className="px-6 py-3 w-[220px] text-center border-solid border-2 border-gray-400 rounded-md">
                      <span className="text-gray-500">{word_1}</span>
                    </div>
                    <span className="text-gray-500">✕</span>
                    <div className="px-6 py-3 w-[220px] text-center border-solid border-2 border-gray-400 rounded-md">
                      <span className="text-gray-500">{word_2}</span>
                    </div>
                  </div>
                  <div className="mt-24 items-center">
                    <p className="text-gray-500">Memo your idea!</p>
                    <input
                      type="text"
                      value={ideaText}
                      onChange={(event) => setIdeaText(event.target.value)}
                      className="bg-slate-200 w-[400px] px-6 py-2 outline-none"
                    />
                    <button
                      onClick={createIdea}
                      className="bg-slate-400 text-white py-2 px-4 rounded-md"
                    >
                      Create
                    </button>
                  </div>
                  {ideaList.map((idea) => {
                    return (
                      <div className="w-[440px] mt-4 p-4 border border-yellow-500 rounded-md flex flex-col gap-4 justify-center items-center">
                        <p className="text-center">{idea.idea}</p>
                        <div className="text-center flex items-center justify-center gap-4">
                          <span className="w-[150px] text-center">
                            {idea.word_1}
                          </span>
                          <span>✕</span>
                          <span className="w-[150px] text-center">
                            {idea.word_2}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
