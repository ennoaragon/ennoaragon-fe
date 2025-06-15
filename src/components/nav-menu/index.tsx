import { MouseEvent } from "react"
import { Link } from "react-router"
import { useUiStore } from "@store/uiStore"

export default function NavMenu() {
    const darkMode = useUiStore(state => state.darkMode)
    const setdarkMode = useUiStore(state => state.lightSwitch)

    function darkModeButton(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        setdarkMode(!darkMode)
        if (!darkMode) {
            localStorage.setItem("theme", "dark")
        } else {
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <nav className="w-full h-[50px] flex flex-row fixed bg-transparent">
            <div className="mx-2 h-full flex flex-row items-center justify-center text-center min-w-[200px]">
                <Link to="/" >
                    <h1 className="cursor-pointer text-xl">ennoaragon</h1>
                </Link>
            </div>
            <div className="mx-2 h-full flex flex-row items-center justify-center text-center flex-1">
            </div>
            <div className="flex flex-col justify-center items-center mx-5 h-full">
                <button onClick={darkModeButton} className="cursor-pointer">
                    {darkMode ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30px" width="30px" className="fill-(--t-color)">
                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-(--button-bg)" height="30px" width="30px">
                            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                        </svg>
                    }
                </button>
            </div>
            <div className="w-fit h-full flex items-center justify-center text-center mx-5 ">
            </div>
        </nav >
    )
}

