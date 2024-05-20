import i18n from "../i18n";

export interface skill {
    "title": string,
    "shadow": string,
    "list": Array<string>,
}

export const skills: skill[] = [
    {
        "title": "Front-end",
        "shadow": "shadow-front",
        "list": ["HTML", "CSS", "Javascript", "React", "Tailwind", "Typescript", "Bootstrap"]
    },
    {
        "title": "Back-end",
        "shadow": "shadow-back",
        "list": ["PHP", "Laravel", "Postgres", "Firebase", "Supabase", "MySQL", "Vite"]
    },
    {
        "title": i18n.t('skill-learning'),
        "shadow": "shadow-learning",
        "list": ["NodeJS", "Express", "NextJS", "Docker"]
    },
    {
        "title": i18n.t('skill-tools'),
        "shadow": "shadow-tools",
        "list": ["Git", "Github", "VScode", "Figma"]
    }
];

export const updateData = () => {
    skills[2].title = i18n.t('skill-learning');
    skills[3].title = i18n.t('skill-tools');
};

//When language change, the data is updated
i18n.on('languageChanged', () => {
    updateData();
});

