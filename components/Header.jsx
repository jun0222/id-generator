import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const changeOpenAndClose = () => {
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsOpen(true);
        }
    }

    return(
        <div className="bg-blue-400 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold md:text-4xl">IdGenerator</h1>
                    <div>
                        <button onClick={changeOpenAndClose}>
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                            </svg>                       
                        </button>
                    </div>
                </div>
                {isOpen && 
                    <div>
                        <ul>
                            <li className=""><a href="#rand-id" className="block px-8 py-2 hover:bg-blue-600">ランダムID</a></li>
                            <li className=""><a href="#password" className="block px-8 py-2 hover:bg-blue-600">パスワード</a></li>
                        </ul>
                    </div>
                }
        </div>
    )
}