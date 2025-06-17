import { MouseEvent } from "react"
import { Link } from "react-router"
import { useUiStore } from "@store/uiStore"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function NavMenu() {
    const darkMode = useUiStore(state => state.darkMode)
    const setdarkMode = useUiStore(state => state.lightSwitch)

    function darkModeButton(e: MouseEvent) {
        e.preventDefault()

        setdarkMode(!darkMode)
        if (!darkMode) {
            localStorage.setItem("theme", "dark")
        } else {
            localStorage.setItem("theme", "light")
        }
    }

    function experienceButton() {
        return (
            <>
                <span className="inline-flex items-center justify-center w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                </span>
            </>
        )
    }

    function aboutButton() {
        return (
            <>
                <span className="inline-flex items-center justify-center w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                </span>
            </>
        )

    }
    function githubButton() {
        return (
            <Tooltip>
                <TooltipTrigger>
                    <span className="inline-flex items-center justify-center w-10 h-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                            </g>
                        </svg>
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm bg-transparent">Github</p>
                </TooltipContent>
            </Tooltip>
        )
    }

    function linkedInButton() {
        return (
            <Tooltip>
                <TooltipTrigger>
                    <span className="inline-flex items-center justify-center w-10 h-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm bg-transparent">LinkedIn</p>
                </TooltipContent>
            </Tooltip>
        )
    }

    function instaButton() {
        return (
            <Tooltip>
                <TooltipTrigger>
                    <span className="inline-flex items-center justify-center w-10 h-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 27" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"></path> <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"></path> <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"></path>
                        </svg>
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm bg-transparent">Instagram</p>
                </TooltipContent>
            </Tooltip>
        )
    }

    // function homeButton() {
    //     return (
    //         <>
    //             <span className="inline-flex items-center justify-center w-10 h-10">
    //                 <img src={homeSvg} alt="home" className="size-6" />
    //             </span>
    //         </>
    //     )
    // }

    function twitterComButton() {
        return (
            <Tooltip>
                <TooltipTrigger>
                    <span className="inline-flex items-center justify-center w-10 h-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 18" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
                </svg>
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm bg-transparent">Twitter</p>
                </TooltipContent>
            </Tooltip>
        )
    }
    return (
        <nav className="w-full h-[50px] flex flex-row fixed bg-transparent">
            <div className="mx-2 h-full flex flex-row items-center justify-center text-center min-w-[200px]">
                <Link to="/" >
                    <h1 className="cursor-pointer text-xl">ennoaragon</h1>
                </Link>
            </div>
            <div className="mx-2 h-full flex flex-row items-center justify-center text-center flex-1">
                <div className="flex items-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ennoaragon" className="text-white text-2xl">{githubButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ennoaragon" className="text-white text-2xl">{linkedInButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ennoaragon" className="text-white text-2xl">{instaButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/ennoaragon" className="text-white text-2xl">{twitterComButton()}</a>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-4 md:space-x-10">
                <button onClick={(e: MouseEvent) => darkModeButton(e)} className="cursor-pointer">
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
                <Link className="nav-link hover:text-custom-accent-light text-lg text-white "
                    to="/about">
                    <div className="flex justify-center items-center">
                        {aboutButton()}
                        <span className="hidden md:block text-sm text-white">
                            About
                        </span>
                    </div>
                </Link>
                <Link className="nav-link hover:text-custom-accent-light text-white text-lg"
                    to="/projects" >
                    <div className="flex justify-center items-center">
                        {experienceButton()}
                        <span className="hidden md:block text-sm text-white">
                            Experience
                        </span>
                    </div>
                </Link>
            </div>
            <div className="w-fit h-full flex items-center justify-center text-center mx-5 ">
            </div>
        </nav >
    )
}

