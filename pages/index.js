export default function Home() {
  
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

  async function copyToClipboard() {
    if (process.browser) {
    const copyText = document.getElementById("copyTarget").innerText;
    await navigator.clipboard.writeText(copyText)
    alert(`IDをコピーしました\nID: ` + copyText);
    }
  }

  return (
    <div className="h-10 leading-10">
      <div className="flex justify-center">
        <p id="copyTarget" className="text-5xl font-bold">{getRandStr() + getRandNum()}</p>
      </div>
      <div className="flex justify-center m-3">
        <button onClick={copyToClipboard} className="px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Copy</button>
      </div>
    </div>
  )
}
