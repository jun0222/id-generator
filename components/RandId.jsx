import { useState, useEffect } from "react";

export default function RandPassword() {
    const [randStrAndRandNum, setRandStrAndRandNum] = useState("");
    const [alpNums, setAlpNums] = useState([]);
    const [alpNum, setAlpNum] = useState("7");
    const [numNums, setNumNums] = useState([]);
    const [numNum, setNumNum] = useState("3");

    useEffect(() => {
        setAlpNums([...Array(9)].map((_, i) => i + 2));
        setNumNums([...Array(6)].map((_, i) => i + 1));
        setRandStrAndRandNum(getRandStr()+getRandNum());
    }, [alpNum, numNum]);

    const getSelectedAlpNum = (event) => {
        setAlpNum(event.target.value);
    };
    const getSelectedNumNum = (event) => {
        setNumNum(event.target.value);
    };
    
    const getRandStr = () => {
        const numberOfDigits = alpNum;
        const useCharacters = "abcdefghijklmnopqrstuvwxyz";
        const useCharactersLength = useCharacters.length;
        let actualStr = "";
        for(let i=0; i<numberOfDigits; i++){
            actualStr += useCharacters[Math.floor(Math.random()*useCharactersLength)];
        }
        return actualStr;
    }

    const getRandNum = () => {
        const numberOfDigits = numNum;
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
            <div className="h-10 leading-10">
                <div className="flex justify-center m-5">
                    <p id="copyTarget" className="text-5xl font-bold">{randStrAndRandNum}</p>
                </div>
                <div className="flex justify-center m-3">
                    <div>
                        <button id="copy-button" onClick={copyToClipboard} className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Copy</button>
                        <button onClick={reloadStr} className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Reload</button>
                    </div>
                </div>
                <div className="flex justify-center m-3">
                    <div className="mb-8">
                        <label htmlFor="name" className="text-sm block">Alphabets length</label>
                        <select className="add-input-style" name="" id="" value={alpNum} onChange={getSelectedAlpNum}>
                            {alpNums.map((alpNum, index)=>{
                                return (
                                    <option key={index} id="alphabets-word" className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" value={alpNum}>{alpNum}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="flex justify-center m-3">
                    <div className="mb-8">
                        <label htmlFor="name" className="text-sm block">Numbers length</label>
                        <select className="add-input-style" name="" id="" value={numNum} onChange={getSelectedNumNum}>
                            {numNums.map((alpNum, index)=>{
                                return (
                                    <option key={index} id="alphabets-word" className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" value={alpNum}>{alpNum}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
