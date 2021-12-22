export default function Home() {
  
  const getRandStr = () => {
    const numberOfDigits = 7;
    const useCharacters = "abcdefghijklmnopqrstuvwxyz";
    const useCharactersLength = useCharacters.length;
    let actualStr = "";
    for(var i=0; i<numberOfDigits; i++){
      actualStr += useCharacters[Math.floor(Math.random()*useCharactersLength)];
    }
    return actualStr;
  }

  const getRandNum = () => {
    const numberOfDigits = 3;
    const useCharacters = "1234567890";
    const useCharactersLength = useCharacters.length;
    let actualStr = "";
    for(var i=0; i<numberOfDigits; i++){
      actualStr += useCharacters[Math.floor(Math.random()*useCharactersLength)];
    }
    return actualStr;
  }

  const copyToClipboard = () => {
    if (process.browser) {
    var copyText = document.getElementById("copyTarget").innerText;
    navigator.clipboard.writeText(copyText)
    alert(`IDをコピーしました\nID: ` + copyText);
    }
  }

  return (
    <div>
      <div id="copyTarget">{getRandStr() + getRandNum()}</div>
      <input type="button" value="copy" onClick={copyToClipboard} />
    </div>
  )
}
