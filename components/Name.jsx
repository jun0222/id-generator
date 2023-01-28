import { useState, useEffect } from "react";

export default function RandPassword() {
  const [randStrAndRandNum, setRandStrAndRandNum] = useState("");

  useEffect(() => {
    setRandStrAndRandNum(getLastName() + getFirstName());
  }, []);

  const getLastName = () => {
    const lastName = [
      "田中",
      "高橋",
      "佐藤",
      "鈴木",
      "山本",
      "大和田",
      "山田",
      "川島",
      "山田",
      "斉藤",
    ];
    let actualStr = "";
    actualStr += lastName[Math.floor(Math.random() * 10)];
    return actualStr;
  };

  const getFirstName = () => {
    const firstName = [
      "太郎",
      "次郎",
      "三郎",
      "四郎",
      "吾郎",
      "花子",
      "次子",
      "亜子",
      "みつ子",
      "一郎",
    ];
    let actualStr = "";
    actualStr += firstName[Math.floor(Math.random() * 10)];
    return actualStr;
  };

  const reloadStr = () => {
    setRandStrAndRandNum(getLastName() + getFirstName());
  };

  async function copyToClipboard() {
    if (process.browser) {
      const copyText = document.getElementById("copyTarget").innerText;
      await navigator.clipboard.writeText(copyText);
      const copyButton = document.getElementById("copy-button");
      copyButton.innerHTML = "Copied!";
      setTimeout(() => (copyButton.innerHTML = "Copy"), 1000);
    }
  }

  return (
    <>
      <div className="h-10 leading-10">
        <div className="flex justify-center m-3">
          {randStrAndRandNum.length > 11 && (
            <p id="copyTarget" className="text-4xl font-bold">
              {randStrAndRandNum}
            </p>
          )}
          {randStrAndRandNum.length <= 11 && (
            <p id="copyTarget" className="text-5xl font-bold">
              {randStrAndRandNum}
            </p>
          )}
        </div>
        <div className="flex justify-center mb-8">
          <div>
            <button
              id="copy-button"
              onClick={copyToClipboard}
              className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500"
            >
              Copy
            </button>
            <button
              onClick={reloadStr}
              className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500"
            >
              Reload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
