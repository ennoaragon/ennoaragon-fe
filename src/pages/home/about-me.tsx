function AboutMe() {
    const languages = ["Javascript (ES2015+)", "Typescript", "Python", "Go", "C++", "Rust"]

    return (
        <div className="flex flex-col w-full h-full mt-10 justify-center items-center
            md:w-(--experience-max-width) max-w-(--experience-max-width) text-wrap mx-auto">
            <div className="w-full mb-10">
                <p className="w-full text-fxl md:text-7xl sm:text-5xl text-left">About Me</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="w-full col-span-1">
                    <img src="https://media1.tenor.com/m/fTTVgygGDh8AAAAd/kitty-cat-sandwich.gif" alt="img"/>
                </div>
                <div className="col-span-2">
                    <p className="text-base mt-6">Hey, I’m Enno Aragon an ex pro-gamer turned programmer.</p>
                    <p className="text-base mt-6">When I'm not working on a project, you'll
                        find me outdoors hiking, capturing landscapes through
                        photography, staying active, or ticking off destinations from
                        my travel bucket list. Check out some of my favorite shots
                        <a href="/gallery">here</a>.
                    </p>
                    <ul className="flex flex-col h-15  flex-wrap mt-4 ml-5">
                        { languages.map((lang) => {
                            return <li className="mr-10 list-disc">{lang}</li>
                        })
                        }
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
