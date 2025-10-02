function AboutMe() {
    const languages = ["Javascript ES6+", "Typescript", "Python", "Go", "Rust", "Unreal Engine 5"]

    return (
        <div className="flex flex-col w-full h-full mt-10 justify-center items-center
            md:w-(--experience-max-width) max-w-(--experience-max-width) text-wrap mx-auto">
            <div className="w-full mb-10">
                <p className="w-full text-fxl md:text-7xl sm:text-5xl text-left">About Me</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <p className="text-base">Hey, I’m Enno Aragon an ex pro-gamer turned programmer.
                    </p>
                    <p className="text-sm text-(--custom-accent-light)"> Learn more about my gaming career
                        <a href="about"> {" "} here.</a>
                    </p>
                    <p className="text-base my-4"> With over three years of professional experience in Full-Stack Development, I
                        have a solid background in TypeScript, React.js, and NestJS. I also have
                        hands-on experience with AWS and various cloud services. I am comfortable
                        in a startup environment with a self-starter mentality, problem solving skills,
                        able to take ownership of new features and work efficiently to move on to the
                        next task.
                    </p>

                    <p className="text-base my-4">I'm also exploring video game development.
                        I am a firm believer of game engines being one of the toughest projects to implement.
                        Currently, I’m focused on building a physics engine for my game that utilizes AI with co-op/versus features.
                        Each project refines my skills and broadens my perspective. Learn more about my personal projects <a href="#projects">&nbsp;here</a>.
                    </p>
                    <p >
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="flex flex-col h-15  flex-wrap my-4 ml-5">
                        {languages.map((lang) => {
                            return <li className="mr-10 list-disc">{lang}</li>
                        })
                        }
                    </ul>

                    <p className="text-base my-4">When I'm not working on a project, you'll
                        find me outdoors hiking, capturing landscapes through
                        photography, staying active, or ticking off destinations from
                        my travel bucket list. Check out some of my favorite shots
                        <a href="/gallery" >&nbsp;here</a>.
                    </p>
                </div>

                <div className="w-full col-span-1">
                    <img src="https://media1.tenor.com/m/fTTVgygGDh8AAAAd/kitty-cat-sandwich.gif" alt="img" />
                </div>
            </div>

        </div>
    )
}

export default AboutMe
