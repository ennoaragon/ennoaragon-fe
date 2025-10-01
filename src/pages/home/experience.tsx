import { useEffect, useState } from "react"
import { jobs, type iExperience } from "@static/experience"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"



const Expereince = () => {
    const [companies, setCompanies] = useState<Record<string, iExperience>>({});
    const [currentJob, setCurrentJob] = useState<string>("");

    useEffect(() => {

        processJobs()

    }, [])

    function processJobs() {

        const temp: Record<string, iExperience> = {};

        jobs.forEach((job: iExperience, i: number) => {
            if (job.company !== undefined) {

                temp[job.company] = job
                if (i === 0) {
                    setCurrentJob(job.company)
                }
            }
        })

        setCompanies(temp)
    }

    function JobExp(job: iExperience) {
        return (
            <div key={job.description} className="rounded max-w-text-mobile-width-max md:w-text-width-max md:max-w-text-width-max text-wrap">
                <div className="">
                    <div className="flex flex-1 justify-between w-full items-center">
                        <div className="">
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
                                    job.tasks.map((task: string, i) =>
                                        <li key={i} className=" rounded-md mt-4 mr-2 p-1">{task}</li>
                                    )
                                }
                            </ul>
                        </div>
                        : null
                    }
                    <div className="flex w-full flex-wrap" >

                        {job.more_links != undefined ? job.more_links.map((link: string, i) =>
                            <Tooltip key={i}>
                                <TooltipTrigger>
                                    <a target="_blank" rel="noopener noreferrer" href={link} className=" my-2">
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

    function buttonExpereience(job: string) {
        const isActive = job === currentJob

        return (
            <div key={job} onClick={() => setCurrentJob(job)}
                className={`w-full ${isActive ? 'bg-background' : ''} cursor-pointer hover:bg-background`}>
                <p className="text-left m-2">{job}</p>
            </div>
        )
    }


    return (
        <div className="flex flex-col w-full h-full mt-10 justify-center items-center
            md:w-(--experience-max-width) max-w-(--experience-max-width) text-wrap mx-auto">

            <p className="w-full text-fxl md:text-7xl sm:text-5xl text-left">Experience</p>
            <div className="grid grid-cols-3 gap-3 my-4">
                <div className="col-span-2 md:col-span-1 ">
                    <div className="flex flex-col p-1">
                        {
                            Object.keys(companies).map((key) =>
                                buttonExpereience(key)
                                //<p key={key} onClick={() => setCurrentJob(key)} className="text-left m-2">{key}</p>
                            )
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-col  justify-center items-center">
                        {currentJob !== "" && JobExp(companies[currentJob])}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expereince
