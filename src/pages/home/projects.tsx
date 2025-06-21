import { projects, iProject } from "@static/experience"

const Projects = () => {

    function project(p: iProject) {
        return (
            <div key={p.description} className="p-2">
                <div className="flex flex-1 justify-between w-full ">
                    <p className="text-xl md:text-3xl my-2">{p.title}</p>
                    { p.external_url.length > 0 ?
                        <a target="_blank" rel="noopener noreferrer" href={p.external_url} className=" my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                        : null
                    }
                </div>
                <p className="my-2">{p.description}</p>
                <div className="flex w-full flex-wrap" >
                    {
                        p.tech_chips.map((techChip: string,i) =>
                            <div key={i} className="bg-(--theme-tertiary) bg-opacity-40 text-black rounded-md mt-4 mr-2 p-1">
                                <p className="">{techChip}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        )
    }
    return (
        <div className="flex flex-col w-full mt-10 max-w-(--text-mobile-width-max) md:w-(--text-width-max) md:max-w-(--text-width-max) text-wrap mx-auto">
            <p className="text-4xl md:text-7xl md:text-center ">Projects</p>
            <div className="flex flex-col  justify-center items-center">
                {
                    projects.map((p: iProject) => project(p))
                }
            </div>
        </div>
    )
}

export default Projects
