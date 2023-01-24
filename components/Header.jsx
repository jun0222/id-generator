import { useState } from "react";

export default function Header(props) {
  const { setMode } = props;
  const [isOpen, setIsOpen] = useState(false);
  const changeOpenAndClose = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
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
  const changeModeWord = () => {
    setMode("Word");
    setIsOpen(false);
  };
  const changeModeName = () => {
    setMode("Name");
    setIsOpen(false);
  };
  const changeModeKatakana = () => {
    setMode("Katakana");
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
            <li className="">
              <a
                onClick={changeModeWord}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                単語
              </a>
            </li>
            <li className="">
              <a
                onClick={changeModeName}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                名前
              </a>
            </li>
            <li className="">
              <a
                onClick={changeModeKatakana}
                className="block px-8 py-2 hover:bg-blue-600"
              >
                カタカナ
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
