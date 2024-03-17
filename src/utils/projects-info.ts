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
        "title": "Hackathon Davivienda",
        "site": "https://davivienda-landing.vercel.app/",
        "description": "A landing page built for a Hackathon hosted by Davivienda S.A. This was a collaborative project as part of real-world Kodigo practice.",
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
        "title": "Spotify Album Checker",
        "site": "https://kodigo-music.vercel.app/",
        "description": "A lightweight app for viewing albums within the Spotify API.",
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
    },
];
