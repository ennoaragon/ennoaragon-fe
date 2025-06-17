import { projects, iProject } from "@static/experience"

const Projects = () => {

    function project(p: iProject) {
        return (
            <div className="p-2">
                <div className="flex flex-1 justify-between w-full ">
                    <p className="text-xl md:text-3xl my-2">{p.title}</p>
                    if project.ExtUrl != "" {
                        <a target="_blank" rel="noopener noreferrer" href={p.external_url} className="text-white my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    }
                </div>
                <p className="my-2">{p.description}</p>
                <div className="flex w-full flex-wrap" >
                    {
                        p.tech_chips.map((techChip: string) =>
                            <div className="bg-tertiary bg-opacity-40 text-black rounded-md mt-4 mr-2 p-1">
                                <p className="text-white">{techChip}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        )
    }
    return (
        <div className="flex flex-col w-full mt-10">
            <p className="text-4xl md:text-7xl md:text-center text-white">Projects</p>
            <div className="flex flex-col text-white justify-center items-center">
                {
                    projects.map((p: iProject) => project(p))
                }
            </div>
        </div>
    )
}

export default Projects
