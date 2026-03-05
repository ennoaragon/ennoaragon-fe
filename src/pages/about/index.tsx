
const About = () => {
    const videoUrl = "https://storage.googleapis.com/ea-frontend-assets/jumbo_cam_heart.mp4"
    return (
        <div className="mt-[100px] w-full flex flex-col items-center mx-auto md:w-(--experience-max-width) max-w-(--experience-max-width) ">
            <div className="text-left w-full ">
                <p className="text-4xl md:text-7xl">More About Myself</p>
            </div>
            <div className="grid grid-cols-4 gap-4 my-10 w-full">
                <video className="col-span-2 object-cover rounded-lg min-w-[300px] " controls autoPlay muted loop>
                    <source src={videoUrl} type="video/mp4" ng-if="option=='video'" />
                </video>
                <div className="text-left text-base col-span-2 text-wrap">

                    <p>Former professional eSports player turned Full Stack Developer, I have successfully transitioned my passion for gaming into a thriving career in tech. During my gaming years, I honed vital skills in teamwork and dedication, contributing to significant wins for North America in a field dominated by Europe.</p>
                </div>
            </div>
            <div className="text-left text-base">
            </div>
            <div className="text-left my-4 w-full">
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
                    <a className="text-secondary" href="/gallery">&nbsp;here</a>.
                </p>
            </div>
        </div>
    )
}

export default About
