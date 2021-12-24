import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Home() {
  const [randStrAndRandNum, setRandStrAndRandNum] = useState("");

  useEffect(() => {
    setRandStrAndRandNum(getRandStr()+getRandNum());
  }, []);
  
  const getRandStr = () => {
    const numberOfDigits = 7;
    const useCharacters = "abcdefghijklmnopqrstuvwxyz";
    const useCharactersLength = useCharacters.length;
    let actualStr = "";
    for(let i=0; i<numberOfDigits; i++){
      actualStr += useCharacters[Math.floor(Math.random()*useCharactersLength)];
    }
    return actualStr;
  }

  const getRandNum = () => {
    const numberOfDigits = 3;
    const useCharacters = "1234567890";
    const useCharactersLength = useCharacters.length;
    let actualStr = "";
    for(let i=0; i<numberOfDigits; i++){
      actualStr += useCharacters[Math.floor(Math.random()*useCharactersLength)];
    }
    return actualStr;
  }

  const reloadStr = () => {
    setRandStrAndRandNum(getRandStr()+getRandNum());
  }

  async function copyToClipboard() {
    if (process.browser) {
    const copyText = document.getElementById("copyTarget").innerText;
    await navigator.clipboard.writeText(copyText)
    const copyButton = document.getElementById("copy-button");
    copyButton.innerHTML = 'Copied!'
    setTimeout(() => copyButton.innerHTML = 'Copy', 1000)
    }
  }

  return (
    <>
      <Header />
      <div className="h-10 leading-10">
        <div className="flex justify-center m-5">
          <p id="copyTarget" className="text-5xl font-bold">{randStrAndRandNum}</p>
        </div>
        <div className="flex justify-center m-3">
          <button id="copy-button" onClick={copyToClipboard} className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Copy</button>
          <button onClick={reloadStr} className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Reload</button>
        </div>
      </div>
    </>
  )
}
