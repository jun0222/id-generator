# 目次

<!-- TOC -->

- [目次](#目次)
- [URL](#url)
  - [通常](#通常)
  - [タイムスタンプにブックマークしたい場合](#タイムスタンプにブックマークしたい場合)
- [概要](#概要)
- [操作](#操作)
  - [基本操作](#基本操作)
  - [モード切り替え](#モード切り替え)
- [ソースコードについて](#ソースコードについて)
  - [表示するコンポーネントの切り替え](#表示するコンポーネントの切り替え)
  - [ハンバーガーメニューの開閉](#ハンバーガーメニューの開閉)
  - [フッターを画面最下部に固定](#フッターを画面最下部に固定)

<!-- /TOC -->

# URL

## 通常

https://id-generator.juns-app.com/

## タイムスタンプにブックマークしたい場合

https://id-generator.juns-app.com/?mq=Timestamp

# 概要

乱数自動生成アプリです。  
google ドキュメントでタイムスタンプを入れる良い感じのショートカットが見つからない、  
1password で ID の乱数を作る機能がなかったので作りました。

# 操作

## 基本操作

Reload を押すと別の乱数が出ます。  
Copy を押すとクリップボードにコピーします。  
~~ length を押すと文字数を変えます。

## モード切り替え

右上のハンバーガーメニューから、

- ランダム ID
- タイムスタンプ
- パスワード

が選択できます。

# ソースコードについて

## 表示するコンポーネントの切り替え

mode という state を切り替える。  
setMode を props として Header コンポーネントに渡し、  
その中でヘッダー内のクリックされた文字に応じて onClick で setMode する。

mode という state の中身を切り替える。  
mode という state の中身に応じて、RandId,Password,Timestamp から対応したコンポーネントがマウントされる。

pages/index.js

```js
import { useEffect, useState } from "react";
import Header from "../components/Header";
import RandId from "../components/RandId";
import Password from "../components/Password";
import Timestamp from "../components/Timestamp";
import Footer from "../components/Footer";
import Head from "../components/Head";

export default function Home() {
  const [mode, setMode] = useState("RandId");

  return (
    <>
      <Head />
      <Header setMode={setMode} />
      {mode === "RandId" && <RandId />}
      {mode === "Password" && <Password />}
      {mode === "Timestamp" && <Timestamp />}
      <Footer />
    </>
  );
}
```

components/Header.jsx

```js
import { useState } from "react";

export default function Header(props) {
  const { setMode } = props;
  const changeModeRandId = () => {
    setMode("RandId");
    setIsOpen(false);
  };
  const changeModePassword = () => {
    setMode("Password");
    setIsOpen(false);
  };
  const changeModeTimestamp = () => {
    setMode("Timestamp");
    setIsOpen(false);
  };

  return (
    <div className="bg-blue-400 text-white py-2">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="mx-4 text-xl font-semibold md:text-4xl">IdGenerator</h1>
        <div>
          <button className="mx-4" onClick={changeOpenAndClose}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <ul>
            <li className="">
              <a
                onClick={changeModeRandId}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                ランダムID
              </a>
            </li>
            <li className="">
              <a
                onClick={changeModePassword}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                パスワード
              </a>
            </li>
            <li className="">
              <a
                onClick={changeModeTimestamp}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                タイムスタンプ
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
```

## ハンバーガーメニューの開閉

isOpen という state を用意する。  
ハンバーガーメニューの onClick に指定された changeOpenAndClose 関数で、  
setIsOpen して true/false を切り替える。

isOpen が true ならヘッダーメニューを条件付きレンダーで表示、  
false なら非表示にする。

components/Header.jsx

```js
import { useState } from "react";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const changeOpenAndClose = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="bg-blue-400 text-white py-2">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="mx-4 text-xl font-semibold md:text-4xl">IdGenerator</h1>
        <div>
          <button className="mx-4" onClick={changeOpenAndClose}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <ul>
            <li className="">
              <a
                onClick={changeModeRandId}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                ランダムID
              </a>
            </li>
            <li className="">
              <a
                onClick={changeModePassword}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                パスワード
              </a>
            </li>
            <li className="">
              <a
                onClick={changeModeTimestamp}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                タイムスタンプ
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
```

## フッターを画面最下部に固定

CSS in JS で固定している

```js
export default function Footer() {
  const footerStyle = {
    position: "fixed",
    width: "100%",
    height: "80px",
    bottom: "0",
    textAlign: "center",
    lineHeight: "80px",
    zIndex: "1000",
  };
  return (
    <>
      <footer style={footerStyle} className="bg-blue-400 text-white">
        Copyright © jun
      </footer>
    </>
  );
}
```
