import { useState, useEffect } from "react";

export default function RandPassword() {
    const [password, setPassword] = useState("");
    const [strNums, setStrNums] = useState([]);
    const [strNum, setStrNum] = useState("8");


    useEffect(() => {
        setPassword(getPasswordStr());
        setStrNums([...Array(9)].map((_, i) => i + 4));
    }, [strNum]);

    const getSelectedStrNum = (event) => {
        setStrNum(event.target.value);
    };
    
    const getPasswordStr = () => {
        const numberOfDigits = strNum;
        const useCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        const useCharactersLength = useCharacters.length;
        let actualStr = "";
        for(let i=0; i<numberOfDigits; i++){
            actualStr += useCharacters[Math.floor(Math.random()*useCharactersLength)];
        }
        return actualStr;
    }

    const reloadStr = () => {
        setPassword(getPasswordStr());
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
                <div className="flex justify-center m-3">
                    {password.length > 10 &&
                        <p id="copyTarget" className="text-4xl font-bold">{password}</p>
                    }
                    {password.length <= 10 &&
                        <p id="copyTarget" className="text-5xl font-bold">{password}</p>
                    }
                </div>
                <div className="flex justify-center mb-8">
                    <button id="copy-button" onClick={copyToClipboard} className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Copy</button>
                    <button onClick={reloadStr} className="m-1 px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500">Reload</button>
                </div>
                <div className="flex justify-center m-3">
                    <div>
                        <label htmlFor="name" className="text-sm block">Numbers length</label>
                        <select className="add-input-style" name="" id="" value={strNum} onChange={getSelectedStrNum}>
                            {strNums.map((strNum, index)=>{
                                return (
                                    <option key={index} id="alphabets-word" className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" value={strNum}>{strNum}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
