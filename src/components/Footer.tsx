import { useEffect, useState } from "react";
import { numberToMonth } from "../utils/days-info";
import github from "../assets/hero/brand-github.png";

interface ICommitInfo {
    commit: {
        commit: {
            author: {
                date: string,
            }
        }
    }
}

const Footer = () => {
    const [lastDate, setLastDate] = useState<string>();

    const userName = "jacubiam";
    const repo = "jacubiam-vercel";

    useEffect(() => {
        const lastCommit = async (): Promise<void> => {
            const data = await fetch(`https://api.github.com/repos/${userName}/${repo}/branches/main`);
            const res: ICommitInfo = await data.json();
            const formatedDate = new Date(res.commit.commit.author.date);
            setLastDate(`${numberToMonth(formatedDate.getMonth())} ${formatedDate.getDate()}, ${formatedDate.getFullYear()}`);
            /* setLastDate(formatedDate.toUTCString()); */
        };

        lastCommit();
    }, []);

    return (
        <footer className="max-w-screen-lg pt-16 px-1 mx-auto lg:pt-20">
            <div className="bg-radial border border-smoky rounded-tr-[40px] rounded-tl-[40px]">
                <div className="flex justify-between items-center font-title max-w-screen-md text-normal text-sm my-2 px-5 md:mx-auto md:text-base">
                    <h1 className="h-4 md:h-5">Last Update: {lastDate}</h1>
                    <div className="">
                        <span className="align-middle mr-2">Repo:</span>
                        <a href="https://github.com/jacubiam/jacubiam-vercel" target="_blank">
                            <img className="inline w-5" src={github} alt="Github logo for repo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;