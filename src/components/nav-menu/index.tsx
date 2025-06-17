import { MouseEvent } from "react"
import { Link } from "react-router"
import { useUiStore } from "@store/uiStore"
import {
    githubButton,
    linkedInButton,
    instaButton,
    twitterComButton,
    experienceButton,
    aboutButton,
    projectsButton
} from "./components/buttons"

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

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="w-full h-[50px] flex flex-row fixed bg-transparent">
            <div className="mx-2 h-full flex flex-row items-center justify-center text-center">
                <div className="flex items-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ennoaragon" className="text-white text-2xl">{githubButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ennoaragon" className="text-white text-2xl">{linkedInButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ennoaragon" className="text-white text-2xl">{instaButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/ennoaragon" className="text-white text-2xl">{twitterComButton()}</a>
                </div>
            </div>
            <div className="h-full flex flex-row items-center justify-center text-center min-w-[200px] flex-1">
                <Link to="/" >
                    <h1 className="cursor-pointer text-xl">E</h1>
                </Link>
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
                <button className="nav-link hover:text-custom-accent-light text-white text-lg cursor-pointer" onClick={() => scrollToSection("experience")}>
                    <div className="flex justify-center items-center">
                        {experienceButton()}
                        <span className="hidden md:block text-sm text-white">
                            Experience
                        </span>
                    </div>
                </button>
                <button className="nav-link hover:text-custom-accent-light text-white text-lg cursor-pointer" onClick={() => scrollToSection("projects")}>
                    <div className="flex justify-center items-center">
                        {projectsButton()}
                        <span className="hidden md:block text-sm text-white">
                            Projects
                        </span>
                    </div>
                </button>
            </div>
            <div className="w-fit h-full flex items-center justify-center text-center mx-5 ">
            </div>
        </nav >
    )
}

