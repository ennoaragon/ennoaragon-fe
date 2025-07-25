import { useEffect, useState } from "react"
import { Link } from "react-router"
import {
    githubButton,
    linkedInButton,
    instaButton,
    twitterComButton,
    experienceButton,
    aboutButton,
    projectsButton,
    homeButton
} from "./components/buttons"
import { useTheme } from "@/components/theme-provider.tsx"

function NavMenu() {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);
    const scrollElement = document.body;

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {

            const currentScroll = scrollElement.scrollTop || 0; // || window.scrollY;
            console.log(scrollElement)

            setScrolled(currentScroll > 50);

            if (currentScroll > lastScrollTop && currentScroll > 100) {
                setVisible(false);
            } else {
                setVisible(true)
            }

            lastScrollTop = currentScroll;
        };


        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            };

        };
    }, []);

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full top-0 left-0 right-0 h-14 flex flex-row transition-transform duration-300 ease-out
            z-50 ${scrolled ? 'bg-background' : 'bg-transparent'}
            ${visible ? 'translate-y-0' : '-translate-y-full'} `}>
            <div className="mx-2 h-full flex flex-row items-center justify-center text-center">
                <div className="flex items-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ennoaragon" className=" text-2xl">{githubButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ennoaragon" className=" text-2xl">{linkedInButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ennoaragon" className=" text-2xl">{instaButton()}</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/ennoaragon" className=" text-2xl">{twitterComButton()}</a>
                </div>
            </div>
            <div className="h-full flex flex-row items-center justify-center text-center min-w-[200px] flex-1">
                <Link to="/" className="cursor-pointer text-xl">
                    { homeButton() }
                </Link>
            </div>
            <div className="flex justify-center items-center space-x-4 md:space-x-10">
                {theme === "dark" ?

                    <button onClick={() => setTheme("light")} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30px" width="30px" className="fill-(--primary)">
                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                        </svg>
                    </button>
                    :

                    <button onClick={() => setTheme("dark")} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-(--button-bg)" height="30px" width="30px">
                            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                        </svg>
                    </button>
                }
                <Link className="hover:text-custom-accent-light text-lg"
                    to="/about">
                    <div className="flex justify-center items-center">
                        {aboutButton()}
                        <span className="hidden md:block text-sm ">
                            About
                        </span>
                    </div>
                </Link>
                <button className="hover:text-custom-accent-light  text-lg cursor-pointer" onClick={() => scrollToSection("experience")}>
                    <div className="flex justify-center items-center">
                        {experienceButton()}
                        <span className="hidden md:block text-sm ">
                            Experience
                        </span>
                    </div>
                </button>
                <button className="hover:text-custom-accent-light  text-lg cursor-pointer" onClick={() => scrollToSection("projects")}>
                    <div className="flex justify-center items-center">
                        {projectsButton()}
                        <span className="hidden md:block text-sm ">
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

export default NavMenu
