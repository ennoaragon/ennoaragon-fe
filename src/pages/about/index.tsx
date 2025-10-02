
const About = () => {

    const videoUrl = "https://storage.googleapis.com/ea-frontend-assets/jumbo_cam_heart.mp4"
    return (
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-2 px-10 md:p-2 min-w-full w-full">
            <div className="flex flex-col items-center w-full max-w-text-mobile-width-max md:w-text-width-max md:max-w-text-width-max text-wrap mx-auto ">
                <div className="px-8 mb-8">
                    <video className="object-cover rounded-lg min-w-[300px] lg:max-w-[700px]" controls autoPlay muted loop>
                        <source src={videoUrl} type="video/mp4" ng-if="option=='video'" />
                    </video>
                </div>
                <div className="text-left text-base my-4">
                    <p className="text-base mt-6">My journey began in 2016 when I embarked
                        on building a website for my father’s business, finding the
                        complexities of backend and frontend development both challenging
                        and captivating. Shortly after, my eSports career took off, you can
                        read more about it <a href="/about">here </a>.
                        Over the years, I've developed software during my content creation
                        and <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/idropbodies_tv" >gaming days</a>, worked at a
                        <a href="https://signup.buildbox.com/">startup</a>,
                        and tackled ambitious projects at
                        <a target="_blank" rel="noopener noreferrer" href="https://idropstudios.com"
                        >
                            iDropStudios
                        </a>.
                    </p>
                </div>
                <div className="text-left text-base">
                    <p >Former professional eSports player turned Full Stack Developer, I have successfully transitioned my passion for gaming into a thriving career in tech. During my gaming years, I honed vital skills in teamwork and dedication, contributing to significant wins for North America in a field dominated by Europe.</p>
                </div>
                <div className="text-left my-4">
                    <p className="text-xl mb-4">🎮Paladins Premier Player Accomplishments</p>
                    <ul className="text-base">
                        <li className="text-base">🏆1st Paladins Summer Premier 2017
                        </li>
                        <li>🏆1st 2018 PPL Summer Finals</li>
                        <li>🥈2nd 2018 PPL Spring Finals</li>
                        <li>🥈2nd 2017 PPL Fall Finals</li>
                        <li>🥇1st 5x Champion Regional PPL split 2017-2018</li>
                        <li className="text-base">🥉3rd Esports Superstars: Paladins 2018</li>
                    </ul>
                </div>
                <div className="text-left my-4">
                    <p>Now as Full Stack Developer, I bring passion and teamwork from the gaming world to create exceptional user experiences. I'm currently deepening my expertise in Go, while confidently employing HTML, CSS, and frameworks like Next.js, React.js, and Svelte. My technical journey extends from building intuitive SaaS and e-commerce solutions to developing tools for DnD campaigns. Continuously enhancing my skills, I am committed to using cutting-edge technologies to deliver innovative solutions and eagerly look forward to completing several game projects soon.</p>
                </div>
                <div>
                    <p className="text-base mt-6">When I'm not working on a project, you'll
                        find me outdoors hiking, capturing landscapes through
                        photography, staying active, or ticking off destinations from
                        my travel bucket list. Check out some of my favorite shots
                        <a className="text-secondary" href="/gallery">here</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
