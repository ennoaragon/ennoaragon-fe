import Expereince from "./experience"
import Projects from "./projects"

function Home() {
    return (
        <>
            <section className="content flex flex-col justify-center items-center min-h-screen text-left h-screen w-full">
                <div className="max-w-(--text-mobile-width-max) md:w-(--text-width-max) md:max-w-(--text-width-max) ">
                    <div className="text-left">
                        <p className="text-left text-4xl md:text-7xl">Enno Aragon</p>
                    </div>
                    <p className="text-base mt-6">Hey, I’m Enno Aragon an ex pro-gamer turned programmer.</p>
                    <p className="text-base mt-6">I'm focused on honing my engineering
                        skills by developing desktop and web applications that enhance
                        UX, including CLI tools, and Discord bots for D&D for friends.
                        I'm also exploring video game development. Each project refines
                        my skills and broadens my perspective. Learn more about my work
                        <a href="/projects">here</a>.
                    </p>
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
