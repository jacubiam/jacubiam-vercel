import { skill } from "../utils/skills-info";
import { skills } from "../utils/skills-info";
import Tech from "./Tech";

const Skills = () => {
    return (
        <section id="skills" className="grid grid-cols-1 text-normal max-w-[783px] gap-4 mx-3 pt-16 md:mx-auto sm:grid-cols-2 md:gap-y-8 lg:pt-20">
            <h1 className="font-title font-bold text-heading text-[calc(8px+5vw)] drop-shadow-title shadow-title mb-2 ml-2 min-[425px]:text-3xl sm:col-span-2 md:text-[32px] md:mb-0 md:ml-8 lg:ml-0 ">Skills</h1>
            {
                skills.map((skill: skill, index: number) => {
                    return (
                        <div key={index} className="border border-smoky rounded-3xl w-full max-w-[350px] mx-auto">
                            <div className="mx-4">
                                <h2 className={`font-title font-bold text-heading text-[calc(8px+5vw)] text-center drop-shadow-title mt-4 mb-8 min-[425px]:text-3xl md:text-[32px] ${skill.shadow}`}>{skill.title}</h2>
                                <div className="grid grid-cols-3 justify-center justify-items-center text-center gap-x-1 gap-y-4 pb-4 sm:pb-6">
                                    {
                                        skill.list.map((tech: string, indexTech: number) => {
                                            return (
                                                <div key={indexTech} className="w-fit">
                                                    <div className="w-[calc(48px+5vw)] max-w-16 mx-auto">
                                                        <Tech name={tech} />
                                                    </div>
                                                    <span className="text-sm md:text-base">{tech}</span>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
};

export default Skills;