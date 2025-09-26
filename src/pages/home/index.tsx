import { AuroraBackground } from "@/components/ui/aurora-background";
import Expereince from "./experience"
import Projects from "./projects"
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
                    <p className="text-base mt-6">I'm focused on honing my engineering
                        skills by developing desktop and web applications that enhance
                        UX, including CLI tools, and Discord bots for D&D for friends.
                        I'm also exploring video game development. Each project refines
                        my skills and broadens my perspective. Learn more about my personal projects
                        <button  onClick={() => scrollToSection("projects")}>here</button>.
                    </p>
                </div>
            </section>
            </AuroraBackground>
            <section id="about" className="content flex flex-col justify-center items-center min-h-screen text-left h-screen w-full">
                <div className="max-w-(--text-mobile-width-max) md:w-(--text-width-max) md:max-w-(--text-width-max)" >
                    <p className="text-base mt-6">Hey, I’m Enno Aragon an ex pro-gamer turned programmer.</p>
                    <p className="text-base mt-6">When I'm not working on a project, you'll
                        find me outdoors hiking, capturing landscapes through
                        photography, staying active, or ticking off destinations from
                        my travel bucket list. Check out some of my favorite shots
                        <a href="/gallery">here</a>.
                    </p>
                </div>
            </section>
            <section id="experience" className="content flex flex-col justify-center items-center min-h-screen text-left h-screen w-full">
                <Expereince />
            </section>
            <section id="projects" className="content flex flex-col justify-center items-center min-h-fill  text-left h-screen w-full">
                <Projects />
            </section>
        </>
    )
}

export default Home
