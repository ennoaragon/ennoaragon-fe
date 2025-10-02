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

    function projectContent(p: iProject, first: boolean) {
        const order = first ? "row-span-full col-start-1 col-span-5 self-center" : "row-span-full col-span-6 col-end-12 self-center text-right"
        return (
            <>
                <div className={`${order} z-1`}>
                    <div key={p.id} className="p-4 bg-gradient-to-tr to-(--custom-card-accent2)  via-(--custom-card) from-(--custom-card-accent) rounded-lg z-1">
                        <div className={`flex flex-1 justify-between w-full ${ first?"":"flex-row-reverse"}`}>
                            <p className="text-xl md:text-3xl my-2 ">{p.title}</p>
                            <div className="flex flex-row items-center mr-2">
                                {
                                    //p.github_url.length > 0
                                    p.github_url.length === 0 ?
                                        <a target="_blank" rel="noopener noreferrer" href={p.github_url} className=" my-2 mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
                                                </g>
                                            </svg>
                                        </a>
                                        : null
                                }
                                {

                                        //<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        //    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        //</svg>
                                    p.external_url.length > 0 ?
                                    <a target="_blank" rel="noopener noreferrer" href={p.external_url} className=" my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                    : null
                                }
                            </div>
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
                        if (p.hide) {
                            return null
                        }
                        const first = i % 2 == 0
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
