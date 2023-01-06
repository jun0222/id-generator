import { useState, useEffect } from "react";
import { randWord, randNumber } from "@ngneat/falso"; // https://github.com/ngneat/falso

export default function RandPassword() {
  const [word, setWord] = useState("");

  function getWord() {
    setWord(rands.word);
  }

  useEffect(() => {
    getWord();
  }, []);
  const rands = { word: randWord() };

  async function copyToClipboard() {
    await getWord();
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
          <p id="copyTarget" className="text-2xl font-bold">
            {word}
          </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
