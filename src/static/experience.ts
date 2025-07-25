export interface iProject{
    id: number,
    company?: string,
    title: string,
    description: string,
    tasks: string[],
    image_url: string,
    tech_chips: string[],
    date: string,
    external_url: string,
    more_links?: string[]
}

export const jobs:iProject[] = [
    {
        id: 1,
        company: "AppOnboard, Inc",
        title: "Full Stack Engineer",
        description: "Led the design and development of multiple critical systems, including an Asset Store and monetization system for user-generated content, an alerting system with detailed logging integrated with Elastic Search and Slack, and an Admin portal for internal support tools. Designed and implemented scalable APIs and improved the user experience for over 1,000,000 users across desktop and mobile.",
        tasks: [
            "Led the design and development of the Asset Store and monetization system, enabling user-generated content (UGC) sales through our client; using React, Redux, Node.js, Elastic Search, and AWS.",
            "Designed and implemented an alerting system with detailed logging by integrating Elastic Search with a Slack bot, improving system metrics and accessibility.",
            "Developed the Admin portal for internal tools for the support team to assist customers with various subscription plans, account locks, and feature overrides on the client application.",
            "Designed and implemented scalable APIs using NestJS, MySQL, and AWS, supporting over 1,000,000 users and enabling account creation with multiple subscription plan types for various features across desktop and mobile devices. Enhanced user experience by developing the front end with React, Redux, MailChimp, and AWS lambda.",
            "Implemented Continuous Integration and Development pipelines, managed pull requests, conducted code reviews, and performed unit testing."
        ],
        image_url: "",
        tech_chips: ["React", "Redux", "Node.js", "TypeScript", "Elastic Search", "MySQL", "NestJS","AWS", "Material-UI"],
        date: "June 2021 - May 2024",
        external_url: "https://signup.buildbox.com/",
        more_links: ["https://buildbox.com/blog", "https://buildboxworld.com/", "http://shop.buildbox.com"]
    },
    {
        id: 2,
        company: "Oregon Institute of Technology",
        title: "Teacher's Assistance",
        description:  "Graded student work for all levels of C++ courses, including advanced and Object Oriented Programming (OOP). I developed and evaluated assignments for the SQL and NoSql database course. Assess, assist, and encourage best coding practices.",
        tasks: [
            "Graded student work for all levels of C++ courses, including advanced and Object Oriented Programming (OOP)",
            "Developed and evaluated assignments for the SQL and NoSql database course.",
            "Assess, assist, and encourage best coding practices."
        ],
        image_url: "",
        tech_chips: ["c++", "MySQL", "MongoDB"],
        date: "September 2019 - June 2021",
        external_url: ""
    }
]


export const projects:iProject[] = [
    {
        id: 0,
        title: "Team fire cracker",
        description: "Join an adventurous cat and its AI companion on a secret mission from Earth in this 2.5D platformer. The game aims to deliver an immersive experience, utilizing GPT-4 agents to craft engaging and interactive conversations between the characters, enhancing the overall gameplay and narrative depth.",
        tasks: [],
        image_url: "https://tenor.com/view/kitty-cat-sandwich-cats-sandwich-gif-26112528",
        tech_chips: ["Unreal Engine 5", "c++", "Chat GPT", "python"],
        date: "2021-09-01",
        external_url: ""
    },
    {
        id: 1,
        title: "Joy Tap",
        description: "The product is a stress-relief desktop application with a video game window overlay. With a tap of a key, the application will play a video overlay during gameplay intermissions; press again to minimize. The lightweight Application is built using",
        tasks: [],
        image_url: "https://tenor.com/view/kitty-cat-sandwich-cats-sandwich-gif-26112528",
        tech_chips: ["Svelte", "Tauri", "Rust", "Tailwindcss", "GCP", "GO"],
        date: "2021-09-01",
        external_url: ""
    },
    {
        id: 2,
        title: "Naoux",
        description: "Led the team by designing and developing a clothing store using Agile/Scrum principles with a team of three members. Developed the backend using third-party services to fulfill physical item shipments. Created an SMTP service for order placements",
        tasks: [],
        image_url: "https://tenor.com/view/kitty-cat-sandwich-cats-sandwich-gif-26112528",
        tech_chips: ["React","Redux", "Firebase", "Express", "Material UI", "Stripe" ],
        date: "2021-09-01",
        external_url: "https://www.naoux.co/"
    },
    {
        id: 3,
        title: "The Tavern",
        description: "Developed interactive tools catering to diverse role-playing needs, enabling users to save documents, information, and images to NoSQL datebases. Implemented real-time item saving and display alongside an interactive map system for coordinating information.",
        tasks: [],
        image_url: "https://tenor.com/view/kitty-cat-sandwich-cats-sandwich-gif-26112528",
        tech_chips: ["React","Redux", "Firebase", "Express", "Material UI", "Stripe" ],
        date: "2021-09-01",
        external_url: "https://www.thetavern.io/"
    }
]
