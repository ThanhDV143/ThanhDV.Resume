window.cvData = {
    system: {
        savePdf: "Save PDF",
        portfolio: "Portfolio",
        seeMore: "Detail",
        moreProjects: "See more projects...",
        description: "Description",
        technicalDetails: "Technical Details",
        technologies: "Technologies",
        myCv: "My CV"
    },
    fullName: "Dang Van Thanh",
    jobTitle: "Unity Game Programmer",
    portfolioInfo: {
        title: "Project Portfolio",
        subTitle: "A collection of commercial games and personal technical research projects developed throughout my career.",
        footerText: "© 2026 Dang Van Thanh",
        personalSectionTitle: "Technical R&D"
    },
    about: "I am a Game Developer with <b>4+ years of experience</b> working with <b>Unity</b> and <b>C#</b>. Knowledgeable in OOP, ECS, Design Patterns, System Design... I have participated in developing various game genres from hyper-casual to hybrid-casual. Capable of working independently and collaborating effectively in teams. <br><br>Additionally, I built a HomeLab Proxmox system and <b>CI/CD</b> pipeline with <b>Jenkins</b> to manage packages.<br><br>Currently, I am looking to join high-quality game projects and further develop my skills in <b>Technical Art, Software Architecture</b>, and <b>Performance Optimization</b>.",
    sectionTitles: {
        about: "About",
        workExperience: "Work Experience",
        personalProjects: "Technical R&D",
        contact: "Contact",
        education: "Education",
        skills: "Skills"
    },
    contact: {
        phone: "0358040000",
        email: "vanthanh1998@gmail.com",
        address: "Trung Van, Nam Tu Liem, Hanoi",
        website: "https://knowledge.thanhdv.com",
        websiteDisplay: "knowledge.thanhdv.com",
        github: "https://github.com/ThanhDV143",
        githubDisplay: "github.com/ThanhDV143"
    },
    education: {
        school: "Hanoi University of Mining and Geology",
        major: "IT Faculty - Computer Science",
        period: "09/2016 - 09/2022"
    },
    workExperience: [
        {
            company: "Ohze",
            theme: "#e4343b",
            period: "03/2025 - 02/2026",
            title: "GAME DEVELOPER",
            description: ["Participated in the CrazyHubs program organized by CrazyLabs to standardize hyper-casual game production processes according to international standards."],
            maxProjects: 2,
            moreProjectsLink: "portfolio.html#Ohze",
            details: [
                {
                    icon: "Icon/train_loop.webp",
                    name: "Train Loop: TD",
                    genre: "Tower Defense / Strategy",
                    description: "Combined Tower Defense and Strategy mechanics, focusing on System Design and Performance Optimization.",
                    tags: ["Unity", "C#", "Solo", "Pragmatic Architecture"],
                    link: "https://www.taptap.io/app/33874766",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/TrainLoop_TD.apk",
                    backupLinkText: "APK", 
                    points: [
                        "Proactively eliminated complex patterns (like DI Framework) to avoid over-engineering.",
                        "Implemented Spatial Partitioning (Grid-based) to optimize performance."
                    ],
                    videos: [],
                    images: [
                        "Images/TrainLoop/train_loop1.jfif",
                        "Images/TrainLoop/train_loop2.jfif",
                        "Images/TrainLoop/train_loop3.jfif",
                        "Images/TrainLoop/train_loop4.jfif",
                    ]
                },
                {
                    icon: "Icon/heroes.webp",
                    name: "Super Hero Defense",
                    genre: "Tower Defense / Roguelike",
                    description: "Combined Tower Defense and Roguelike mechanics. Prioritized clear, easily extensible code structure.",
                    tags: ["Unity", "C#", "Teamwork", "Dependency Injection", "Strategy", "Factory"],
                    link: "https://www.taptap.io/app/33910058",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/SuperHeroDefense.apk",
                    backupLinkText: "APK",
                    points: [
                        "Built core gameplay with extensibility to facilitate teamwork during development.",
                        "Learned and applied design patterns such as Dependency Injection, Strategy, Factory to optimize code structure.",
                    ],
                    videos: [],
                    images: [
                        "Images/Heroes/heroes1.jfif",
                        "Images/Heroes/heroes2.jfif",
                        "Images/Heroes/heroes3.jfif",
                        "Images/Heroes/heroes4.jfif",
                        "Images/Heroes/heroes5.jfif",
                    ]
                },
                {
                    icon: "Icon/smash_face.png",
                    name: "Smash Your Face",
                    genre: "Party / Action",
                    description: "Completed prototype in 48h (OHZE Jam), integrated face recognition.",
                    tags: ["Unity", "C#", "MediaPipe", "JAM"],
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/SmashYourFace.rar",
                    backupLinkText: "Download",
                    points: [
                        "Integrated MediaPipe Plugin into the game for face recognition.",
                        "Worked with a team of 6 (3 programmers) in a short time frame.",
                    ],
                    videos: ["https://youtu.be/A1SdOcHdQ3Y"],
                    images: [
                        "Images/SYF/SYF1.png",
                        "Images/SYF/SYF2.png",
                        "Images/SYF/SYF3.png",
                        "Images/SYF/SYF4.png",
                    ]
                },
                {
                    icon: "Icon/block_crusher.webp",
                    name: "Blocks Crusher",
                    genre: "Puzzle / Casual",
                    description: "Practiced Rapid Prototyping workflow: from concept to finished product in 3 weeks.",
                    tags: ["Unity", "C#", "CrazyHubs", "Rapid Prototyping"],
                    link: "https://www.taptap.io/app/33891864",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/BlockCrusher.apk",
                    backupLinkText: "APK",
                    points: [
                        "Developed game from concept to finished product within 3 weeks following the CrazyHubs process.",
                        "Practiced rapid prototyping skills and product thinking according to CrazyLabs quality standards.",
                    ],
                    videos: [],
                    images: [
                        "Images/BlockCrusher/blockCrusher1.jfif",
                        "Images/BlockCrusher/blockCrusher2.jfif",
                        "Images/BlockCrusher/blockCrusher3.jfif",
                        "Images/BlockCrusher/blockCrusher4.jfif",
                        "Images/BlockCrusher/blockCrusher5.jfif",
                    ]
                },
                {
                    icon: "Icon/arrow.webp",
                    name: "Arrow Break Out",
                    genre: "Puzzle / Casual",
                    description: "Optimized product experience according to CrazyLabs quality standards.",
                    tags: ["Unity", "C#", "CrazyHubs", "Rapid Prototyping"],
                    link: "https://www.taptap.io/app/33914917",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/ArrowBreakOut.apk",
                    backupLinkText: "APK",
                    points: [
                        "Developed game from concept to finished product within 3 weeks following the CrazyHubs process.",
                        "Practiced rapid prototyping skills and product thinking according to CrazyLabs quality standards.",
                    ],
                    videos: [],
                    images: [
                        "Images/Arrow/arrow1.jfif",
                        "Images/Arrow/arrow2.jfif",
                        "Images/Arrow/arrow3.jfif",
                        "Images/Arrow/arrow4.jfif",
                        "Images/Arrow/arrow5.jfif",
                    ]
                }
            ]
        },
        {
            company: "Bravestars",
            theme: "#f15a29",
            period: "12/2022 - 03/2024",
            title: "GAME DEVELOPER",
            description: ["Developed hybrid-casual game projects following Agile Scrum methodology.", "Participated in designing and building game systems."],
            maxProjects: 1,
            moreProjectsLink: "portfolio.html#Bravestars",
            details: [
                {
                    icon: "Icon/candy_battle.webp",
                    name: "Candy Battle",
                    genre: "Adventure / Action",
                    description: "Built high-intensity combat system (Survivor-like), optimized performance for large number of entities.",
                    tags: ["Unity", "C#", "ECS (Entitas)", "Optimization"],
                    link: "https://www.taptap.io/app/320447",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/CandyBattle.apk",
                    backupLinkText: "APK",
                    points: [
                        "Developed combat system including: Weapons, Skills, AI Enemy, Inventory...",
                        "Applied ECS (Entitas) to optimize game performance."
                    ],
                    videos: [],
                    images: [
                        "Images/CandyBattle/candyBattle1.jpg",
                        "Images/CandyBattle/candyBattle2.jpg",
                        "Images/CandyBattle/candyBattle3.jpg",
                        "Images/CandyBattle/candyBattle4.jpg",
                        "Images/CandyBattle/candyBattle5.jpg",
                        "Images/CandyBattle/candyBattle6.jpg",
                    ]
                },
                {
                    icon: "Icon/cat_tycoon.webp",
                    name: "Cat Restaurant Tycoon",
                    genre: "Simulation / Management",
                    description: "Restaurant management game for iOS. Learned and applied client-side API integration.",
                    tags: ["Unity", "C#", "iOS", "API Integration"],
                    link: "https://www.taptap.io/app/33656534",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/CatRestaurantTycoon.apk",
                    backupLinkText: "APK",
                    points: [
                        "Developed Inventory and Daily Check-in features.",
                        "Handled client-side API integration: Making API calls and processing responses to sync with Server."
                    ],
                    videos: [],
                    images: [
                        "Images/CatTycoon/catTycoon1.jpg",
                        "Images/CatTycoon/catTycoon2.jpg",
                        "Images/CatTycoon/catTycoon3.jpg",
                        "Images/CatTycoon/catTycoon4.jpg",
                        "Images/CatTycoon/catTycoon5.jpg",
                    ]
                }
            ]
        },
        {
            company: "Omegame",
            theme: "#990000",
            period: "03/2021 - 12/2022",
            title: "GAME DEVELOPER",
            description: [
                "Developed and maintained hyper-casual game projects.",
                "Integrated advertising and tracking for games.",
                "Monitored progress of development team members."
            ],
            maxProjects: 0,
            moreProjectsLink: "portfolio.html#Omegame",
            details: [
                {
                    icon: "Icon/metamon.webp",
                    name: "Metamon",
                    genre: "Casual",
                    description: "Implemented gameplay for catching and training monsters, inspired by Pokemon.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/metamon/com.metamon.pkm.zoo.monster",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/Metamon.apk",
                    backupLinkText: "APK",
                    points: [],
                    videos: [],
                    images: [
                        "Images/Metamon/metamon1.webp",
                        "Images/Metamon/metamon2.webp",
                        "Images/Metamon/metamon3.webp",
                        "Images/Metamon/metamon4.webp",
                        "Images/Metamon/metamon5.webp",
                    ]
                },
                {
                    icon: "Icon/fall_party.webp",
                    name: "Fall Party",
                    genre: "Casual",
                    description: "Trained AI Bot using MLAgent, simulated fun 3D physics collisions.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/fall-party/com.fall.party.guys.fallguyparty.gameparty",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/FallParty.apk",
                    backupLinkText: "APK",
                    points: ["Used MLAgent to train AI for game bots."],
                    videos: [],
                    images: [
                        "Images/Fall/fall1.webp",
                        "Images/Fall/fall2.webp",
                        "Images/Fall/fall3.webp",
                        "Images/Fall/fall4.webp",
                        "Images/Fall/fall5.webp",
                        "Images/Fall/fall6.webp",
                        "Images/Fall/fall7.webp",
                        "Images/Fall/fall8.webp",
                    ]
                },
                {
                    icon: "Icon/hook.webp",
                    name: "Hook Guys Party",
                    genre: "Casual",
                    description: "Focused on optimizing Lighting and environmental effects in the game.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/hook-guys-party/com.hook.guys.party.wuggyparty.hypercasual",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/Hook.apk",
                    backupLinkText: "APK",
                    points: ["Initial exploration of Lighting optimization."],
                    videos: [],
                    images: [
                        "Images/Hook/hook1.webp",
                        "Images/Hook/hook2.webp",
                        "Images/Hook/hook3.webp",
                        "Images/Hook/hook4.webp",
                        "Images/Hook/hook5.webp",
                    ]
                },
                {
                    icon: "Icon/beach.webp",
                    name: "Beach Defence BH",
                    genre: "Arcade",
                    description: "Researched AI mechanics and controls for first-person shooter games.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/beach-defence-bh/com.beachhead.beach.defence.defense",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDV143/ThanhDV.GameDemos/releases/download/Upload_001/BeachDefence.apk",
                    backupLinkText: "APK",
                    points: ["Explored 3D game development and AI."],
                    videos: [],
                    images: [
                        "Images/Beach/beach1.webp",
                        "Images/Beach/beach2.webp",
                        "Images/Beach/beach3.webp",
                        "Images/Beach/beach4.webp",
                        "Images/Beach/beach5.webp",
                        "Images/Beach/beach6.webp",
                    ]
                }
            ]
        }
    ],
    personalProjects: {
        theme: "#0866ff",
        projects: [
            {
                name: "HomeLab Proxmox",
                period: "2025 - present",
                genre: "DevOps / System Admin",
                description: "Self-hosted Home Server system for personal storage, management, and learning needs.",
                tags: ["Proxmox", "Jenkins", "Verdaccio", "Docker", "Cloudflared"],
                icon: "server",
                link: "https://knowledge.thanhdv.com",
                linkText: "Tech Blog",
                points: [
                    "Set up Proxmox Virtual Environment to virtualize and manage infrastructure services (XPEnology NAS, Web Server).",
                    "Configured network to access server from the internet using Cloudflare Tunnel.",
                    "Built CI/CD pipeline with Jenkins: Automated publishing of Unity Packages to Verdaccio.",
                ],
                videos: [],
                images: [
                    "Images/HomeLab/lab1.png",
                    "Images/HomeLab/lab2.png",
                    "Images/HomeLab/lab3.png",
                    "Images/HomeLab/lab4.png",
                    "Images/HomeLab/lab5.png",
                ]
            },
            {
                name: "AudioManager.FMOD",
                period: "2025",
                genre: "Tooling / Audio Middleware",
                description: "Wrapper library for FMOD in Unity, helping to standardize and accelerate audio integration workflow.",
                tags: ["Unity", "FMOD", "Tooling","Audio"],
                icon: "music",
                link: "https://github.com/ThanhDV143/ThanhDV.AudioManager.FMOD.git",
                linkText: "GitHub",
                points: [
                    "Provides easy-to-use high-level APIs, minimizing repetitive code when integrating audio.",
                    "Provides visual management tools in Unity Editor, automatically generates code to save time during implementation."
                ],
                videos: [],
                images: [
                    "Images/AudioManager.FMOD/fmod1.png",
                    "Images/AudioManager.FMOD/fmod2.png",
                ]
            },
            {
                icon: "save",
                name: "GameSaver",
                period: "2025",
                genre: "Tooling / Save System",
                description: "Simple, secure, and visual local data management solution for Unity Developers.",
                tags: ["Unity", "JSON", "AES Encryption", "Open Source"],
                link: "https://github.com/ThanhDV143/ThanhDV.GameSaver.git",
                linkText: "GitHub",
                points: [
                    "Supports data serialization to JSON files, integrates AES encryption algorithm to secure player information.",
                    "Provides visual management tools to view, edit, and delete save files directly in Unity Editor."
                ],
                videos: [],
                images: [
                    "Images/GameSaver/saver1.png",
                ]
            },
            {
                name: "ESP32 - The Cube (WIP)",
                period: "2025",
                genre: "Hardware / Embedded",
                description: "Personal research project on Robotics and Hardware Interface.",
                tags: ["WIP", "ESP32", "C++", "Robotics"],
                icon: "cpu",
                link: "https://knowledge.thanhdv.com/books/esp32-the-cube",
                linkText: "Devlog",
                points: [
                    "Developing a robot using ESP32 microcontroller, performing assembly and hardware interfacing.",
                    "Aiming to apply State Machine and Behaviour Tree for robot's autonomous behavior."
                ],
                videos: [],
                images: [
                    "Images/ESP32/cube1.jpg",
                    "Images/ESP32/cube2.jpg",
                    "Images/ESP32/cube3.jpg",
                ]
            },
            {
                name: "ACADEMIC ARCHIVE",
                period: "2020 - 2022",
                genre: "Research / Legacy Projects",
                description: "Technical foundation research projects from student days, including Multiplayer and C++ Unreal Engine 4.",
                tags: ["Legacy", "C++", "Photon", "Multiplayer", "Unreal Engine 4"],
                icon: "archive",
                link: "",
                linkText: "",
                points: [
                    "Alpha (FPS Multiplayer): Researched how to develop a basic multiplayer game with Photon.",
                    "Tank (Unreal Engine 4): Explored and experienced Unreal Engine 4."
                ],
                videos: [
                    "https://www.youtube.com/watch?v=YG0PBS1dHss",
                    "https://youtu.be/5V0fp1vsn70"
                ],
                images: []
            }
        ],
        maxProjects: 3,
        moreProjectsLink: "portfolio.html#TechnicalR&D"
    },
    skills: [
        {
            category: "Programming Languages & Game Engine",
            items: ["C#", "Unity"]
        },
        {
            category: "Unity Libraries & Tools",
            items: ["FMOD", "Addressables", "UniTask", "Odin Inspector", "..."]
        },
        {
            category: "Other Tools",
            items: ["Git", "Photoshop", "Figma", "ClickUp", "Jenkins (CI/CD)", "..."]
        }
    ]
};
