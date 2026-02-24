export const portfolioData = {
    profile: {
        name: "Saravana Prakash R",
        title: "XR DEVELOPER",
        email: "saravana.pmfsp@gmail.com",
        phone: "+91 8344090472",
        location: "Karaikal, India - 609603",
        about: "Innovative AR/VR Developer with a passion for creating immersive experiences and training solutions. I specialize in leveraging expertise in virtual reality design and development to contribute to cutting-edge projects that enhance learning, safety, and engagement in dynamic environments."
    },
    stats: [
        { label: "Training Hours", value: "425+" },
        { label: "Major Projects", value: "13+" },
        { label: "Years Experience", value: "4+" }
    ],
    experience: [
        {
            date: "JAN 2025 – SEP 2025",
            role: "Engineer - Immersive Tech",
            company: "Digifox Studio",
            highlights: [
                "Developed safety training module and vehicle simulator for industrial applications",
                "Built AR car configurator using ARCore technology"
            ]
        },
        {
            date: "MAY 2022 – NOV 2024",
            role: "AR/VR Developer",
            company: "Madras Mindworks",
            highlights: [
                "Built multi-sensory AR/VR applications using Unity and Unreal Engine",
                "Worked with Oculus Quest, HTC Vive, and Vision Pro devices",
                "Completed 250+ hours of specialized AR/VR development training"
            ]
        },
        {
            date: "JUN 2021 – MAY 2022",
            role: "Web Developer",
            company: "Avon Solutions",
            highlights: [
                "Maintained websites, ensuring responsiveness and efficiency",
                "Collaborated with cross-functional teams to enhance UX and optimize performance"
            ]
        }
    ],
    projects: [
        {
            id: "xr-showcase",
            title: "Interactive XR Showcase",
            description: "Fully interactive Three.js point cloud experience featuring Meta Quest 3 and Vision Pro with morphing animations.",
            tags: ["Three.js", "GSAP", "Point Clouds"],
            highlight: true,
            link: "xr-showcase.html"
        },
        {
            id: "forklift",
            title: "Forklift VR Simulator",
            description: "Engineered a VR forklift training simulator with realistic physics and collision detection.",
            tags: ["Unity", "VR", "Physics"]
        },
        {
            id: "multiplayer",
            title: "Multiplayer Construction",
            description: "Developed a real-time multiplayer VR inspection system with voice communication.",
            tags: ["Unity", "Photon", "Networking"]
        },
        {
            id: "ai-hairstyle",
            title: "AI Hairstyle Generator",
            description: "Built a real-time AI hairstyle generation system using Gemini Nano API.",
            tags: ["Unity", "Gemini Nano", "AI"]
        }
        // ... more project data can be added here
    ],
    skills: {
        primary: [
            { icon: "🥽", name: "AR/VR Development", desc: "Unity, Unreal Engine, Meta XR SDK" },
            { icon: "🎮", name: "VR Platforms", desc: "Quest, Vive, Vision Pro" },
            { icon: "🤖", name: "AI Integration", desc: "Gemini Nano, REST, Pipelines" }
        ],
        secondary: [
            { icon: "💾", name: "Database", desc: "SQL, Functions, Management" },
            { icon: "🎨", name: "Design Tools", desc: "Blender, Figma, HTML/CSS" }
        ]
    }
};
