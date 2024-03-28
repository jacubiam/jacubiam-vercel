export interface skill {
    "title": string,
    "shadow": string,
    "list": Array<string>,
}

export const skills: skill[] = [
    {
        "title": "Front-end",
        "shadow": "shadow-front",
        "list": ["HTML", "CSS", "Javascript", "React", "Tailwind", "Typescript"]
    },
    {
        "title": "Back-end",
        "shadow": "shadow-back",
        "list": ["PHP", "Laravel", "Postgres", "Firebase", "Supabase"]
    },
    {
        "title": "Learning",
        "shadow": "shadow-learning",
        "list": ["NodeJS", "Express", "NextJS", "Docker"]
    },
    {
        "title": "Tools",
        "shadow": "shadow-tools",
        "list": ["Git", "Github", "VScode", "Figma", "Vite"]
    }
];

