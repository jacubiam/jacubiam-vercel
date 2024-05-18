import i18n from "../i18n";
import davivienda from "../assets/projects/davivienda-img.png";
import spotify from "../assets/projects/spotify-album.png";

export interface tool {
    name: string,
}

export interface project {
    img: string,
    title: string,
    site: string,
    description: string,
    tools: Array<tool>,
}

export const projects: project[] = [
    {
        "img": davivienda,
        "title": i18n.t('project-davivienda'),
        "site": "https://davivienda-landing.vercel.app/",
        "description": i18n.t('project-davivienda-desc'),
        "tools": [
            {
                "name": "React",
            },
            {
                "name": "Tailwind",
            },
            {
                "name": "Vite",
            },
        ],
    },
    {
        "img": spotify,
        "title": i18n.t('project-spoty'),
        "site": "https://kodigo-music.vercel.app/",
        "description": i18n.t('project-spoty-desc'),
        "tools": [
            {
                "name": "React",
            },
            {
                "name": "Tailwind",
            },
            {
                "name": "Typescript",
            },
        ],
    }
];

export const updateData = () => {
    projects[0].title = i18n.t('project-davivienda');
    projects[0].description = i18n.t('project-davivienda-desc');
    projects[1].title = i18n.t('project-spoty');
    projects[1].description = i18n.t('project-spoty-desc');
};

//When language change, the data is updated
i18n.on('languageChanged', () => {
    updateData();
});