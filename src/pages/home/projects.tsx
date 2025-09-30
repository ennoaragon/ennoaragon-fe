import React from "react"
import { projects, type iProject } from "@static/projects"

const Projects = () => {

    function projectImage(p: iProject, first: boolean) {

        const order = first ? "row-span-full col-start-1 col-span-6 self-center" : "row-span-full col-span-7 col-end-12 self-center"
        return (

            <div className={`${order} z-0 `}>
                <img className="object-cover rounded-lg" src={p.local_src} alt={p.title} />
            </div>
        )
    }

    function projectContent(p:iProject, first: boolean) {
        const  order = first  ? "row-span-full col-start-1 col-span-5 self-center" : "row-span-full col-span-6 col-end-12 self-center text-right"
        return (
            <>
                <div className={`${order} z-1`}>
                <div className="flex-col items-center justify-center">
                </div>
                    <div key={p.description} className="p-4 bg-gradient-to-tr to-(--custom-card-accent2)  via-(--custom-card) from-(--custom-card-accent) rounded-lg z-1">
                        <div className="flex flex-1 justify-between w-full">
                            <p className="text-xl md:text-3xl my-2 ">{p.title}</p>

                            {p.external_url.length > 0 ?
                                <a target="_blank" rel="noopener noreferrer" href={p.external_url} className=" my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                                : null
                            }
                            {p.external_url.length > 0 ?
                                <a target="_blank" rel="noopener noreferrer" href={p.external_url} className=" my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                                : null
                            }
                        </div>
                        <p className="my-2">{p.description}</p>
                        <div className="flex w-full flex-wrap mt-4" >
                            {
                                p.tech_chips.map((techChip: string, i) =>
                                    <div key={i} className="font-thin text-sm mr-2 p-1">
                                        <p className="">{techChip}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }

    function project() {
        return (
            <React.Fragment>
                {
                    projects.map((p: iProject, i) => {
                        if (p.hide){
                            return null
                        }
                        const first  = i %2 ==0
                        return (
                            <div className="wrap mx-auto mb-20" key={i}>
                                <div className="grid grid-cols-10 grid-rows-8">
                                    {projectImage(p, first)}
                                    {projectContent(p, !first)}
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
    return (
        <div className="flex flex-col w-full h-full mt-10 justify-center items-center
            md:w-(--projects-max-width) md:max-w-(--projects-max-width) max-w-(--projects-max-width) text-wrap mx-auto">
            <p className="w-full text-fxl md:text-7xl sm:text-5xl text-left mb-15">Projects</p>
            <div className="flex flex-col  justify-center items-center">
                {project()}
            </div>
        </div>
    )
}

export default Projects
