import { AuroraBackground } from "@/components/ui/aurora-background";
import Expereince from "./experience"
import Projects from "./projects"
import About from "./about-me"
import {
    useEffect,
} from "react"
import {
    useLocation
} from "react-router"

function Home() {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        < >
            <AuroraBackground>
                <section className="content flex flex-col justify-center items-center min-h-screen text-left h-screen w-full">
                    <div className="max-w-(--text-mobile-width-max) md:w-(--text-width-max) md:max-w-(--text-width-max) ">
                        <div className="text-left">
                            <p className="text-4xl md:text-7xl">Enno Aragon</p>
                        </div>
                        <p className="text-base mt-6">
                            I’m a software engineer honing skills by developing desktop and web applications that enhance
                            UX, including CLI tools, and Discord D&D for my friends and I.
                            Currently, I’m focused on building a physics engine for my game that will utilize AI.
                        </p>
                    </div>
                </section>
            </AuroraBackground>
            <section id="about" className="content flex flex-col justify-center items-center min-h-[700px] h-fill text-left w-full">
                <About />
            </section>
            <section id="experience" className="content flex flex-col justify-center items-center text-left min-h-[700px] h-fill w-full mb-[150px]">
                <Expereince />
            </section>
            <section id="projects" className="content flex flex-col justify-center items-center min-h-[700px] h-fill text-left w-full mb-[150px]">
                <Projects />
            </section>
        </>
    )
}

export default Home
