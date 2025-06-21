import { jobs, iProject } from "@static/experience"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const Expereince = () => {

    function JobExp(job: iProject) {
        return (
            <div key={job.description} className="rounded my-4 border-transparent box-border border-2
        hover:border-(--theme-tertiary) hover:box-border hover:border-2
        hover:bg-opacity-30 max-w-text-mobile-width-max md:w-text-width-max md:max-w-text-width-max text-wrap">
                <div className="p-2">
                    <div className="flex flex-1 justify-between w-full items-center">
                        <div className="my-2">
                            <p className="text-xl md:text-3xl">{job.title}</p>
                            <p className="text-base md:text-lg ">{job.date}</p>
                        </div>
                        {job.external_url != "" ?
                            <a target="_blank" rel="noopener noreferrer" href={job.external_url} className=" my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                            : null
                        }
                    </div>
                    { /* <p className="my-2">{job.description}</p> */}
                    {job.tasks.length > 0 ?
                        <div className="flex w-full flex-wrap" >
                            <ul className="list-disc">
                                {
                                    job.tasks.map(( task: string, i) =>
                                        <li key={i} className=" rounded-md mt-4 mr-2 p-1">{task}</li>
                                    )
                                }
                            </ul>
                        </div>
                        : null
                    }
                    <div className="flex w-full flex-wrap" >

                        {job.more_links != undefined ? job.more_links.map((link: string,i) =>
                            <Tooltip key={i}>
                                <TooltipTrigger>
                                    <a  target="_blank" rel="noopener noreferrer" href={link} className=" my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm bg-transparent">{link}</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : null
                        }
                    </div>

                </div>
            </div>
        )
        /*
                            <div className="flex w-full flex-wrap mt-4" >
                                {job.tech_chips.map((techChip: string) =>
                                    <div className="flex flex-wrap bg-(--theme-tertiary) bg-opacity-40 max-w-full text-black rounded-md mr-2 p-1 mt-2">
                                        <p className="">{techChip}</p>
                                    </div>
                                )
                                }
                            </div> */
    }
    return (
        <div className="flex flex-col w-full h-full mt-10 max-w-(--text-mobile-width-max) md:w-(--text-width-max) md:max-w-(--text-width-max) text-wrap mx-auto">
            <p className="text-4xl md:text-7xl text-left ">Experience</p>
            <div className="flex flex-col  justify-center items-center">
                {jobs.map((job: iProject) => JobExp(job))}
            </div>
        </div>
    )
}

export default Expereince
