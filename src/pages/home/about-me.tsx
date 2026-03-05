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
                        <a href="about">&nbsp;here.</a>
                    </p>

                    <p className="my-4 text-base relative">
                        I started programming back in 2016. My first project was
                        a website for my father’s business, finding the
                        complexities of backend and frontend development both challenging
                        and captivating. Shortly after, my eSports career took off, you can
                        read more about it<a href="about">&nbsp;here</a>.
                        Over the years, I've developed software during my content creation
                        and<a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/idropbodies_tv" >&nbsp;gaming days</a>, worked at a
                        <a href="https://signup.buildbox.com/">&nbsp;startup</a>,
                        and tackled ambitious projects at
                        <a target="_blank" rel="noopener noreferrer" href="https://idropstudios.com"
                        >&nbsp;iDropStudios</a>.
                    </p>
                    <p className="text-base my-4">I'm also exploring video game development.
                        I am a firm believer of game engines being one of the toughest projects to implement.
                        Currently, I’m focused on building a physics engine for my game that utilizes AI with co-op/versus features.
                        Each project refines my skills and broadens my perspective. Learn more about my personal projects<a href="#projects">&nbsp;here</a>.
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
                    <img src={import.meta.env.ENV_MODE === "production" ? "https://media.licdn.com/dms/image/v2/C4E03AQGQMEwCkTSsPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1611106378582?e=1774483200&v=beta&t=rEDHhOTyAicPjB0Oqb4OfmbPBN0KqhyoVKpWIHTqQIg" : "https://media1.tenor.com/m/fTTVgygGDh8AAAAd/kitty-cat-sandwich.gif"} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default AboutMe
