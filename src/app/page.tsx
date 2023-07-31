"use client";

import { useState } from "react";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [ideaText, setIdeaText] = useState("");
  const [word_1, setWord_1] = useState<String>("");
  const [word_2, setWord_2] = useState<String>("");

  const clickBtn = () => {
    setIsShow(true);

    setWord_1(wordlist_1[Math.floor(Math.random() * wordlist_1.length)]);
    setWord_2(wordlist_2[Math.floor(Math.random() * wordlist_2.length)]);
  };

  const createIdea = () => {};

  const wordlist_1 = [
    "掃除機",
    "ラジオ",
    "スピーカー",
    "ヘッドホン",
    "リュック",
  ];
  const wordlist_2 = [
    "iPhone",
    "マウス",
    "ギター",
    "クリーニングクロス",
    "目薬",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center flex-col gap-3">
        <button
          onClick={clickBtn}
          className="mt-12 p-5 transition-all duration-400 bg-yellow-500 rounded-md text-white text-2xl hover:bg-yellow-400"
        >
          Generate Idea
        </button>
        {isShow && (
          <div className="flex flex-col items-center">
            <div className="mt-12 flex gap-5 justify-center items-center">
              <div className="px-6 py-3 w-[220px] text-center border-solid border-2 border-gray-400 rounded-md">
                <span className="text-gray-500">{word_1}</span>
              </div>
              <span>✕</span>
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
              <button className="bg-slate-400 text-white py-2 px-4 rounded-md">
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
