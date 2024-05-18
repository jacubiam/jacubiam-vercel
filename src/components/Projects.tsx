import { useTranslation } from "react-i18next";
import { tool, project, projects } from "../utils/projects-info";
import Tech from "./Tech";

const Projects = () => {
    const { t } = useTranslation();
    
    return (
        <section id="projects" className="grid grid-cols-1 text-normal max-w-[895px] mx-3 pt-16 md:mx-auto md:grid-cols-2 lg:pt-20">
            <h1 className="font-title font-bold text-heading text-[calc(8px+5vw)] drop-shadow-title shadow-title mb-6 ml-2 min-[425px]:text-3xl md:col-span-2 md:text-[32px] md:ml-8 lg:ml-14">{t('projects')}</h1>
            { 
                projects.map((project: project, index: number) => {
                    return (
                        <div key={index} className="flex flex-wrap border border-smoky rounded-3xl max-w-[500px] mx-auto mb-4 md:mx-3 md:mb-6 md:min-h-[482px]">
                            <div>
                                <a href={project.site} target="_blank">
                                    <img className="rounded-3xl mb-4" src={project.img} alt={`${project.img} icon`} />
                                </a>
                                <div className="mx-3">
                                    <a href={project.site}>
                                        <h2 className="font-title font-bold text-heading text-[calc(6px+5vw)] drop-shadow-title shadow-project mb-4 min-[425px]:text-3xl">{project.title}</h2>
                                    </a>
                                        <p className="text-[calc(5vw)] mb-4 min-[425px]:text-xl">{project.description}</p>
                                </div>
                            </div>
                            <div className="self-end flex flex-wrap gap-2 pb-4 mx-3">
                                {
                                    project.tools.map((tool: tool, indexTool: number) => {
                                        return (
                                            <div key={indexTool} className="flex border border-smoky rounded-xl items-center px-3 py-1">
                                                <div className="w-[calc(5vw)] mr-2 min-[425px]:w-5">
                                                    <Tech name={tool.name} />
                                                </div>
                                                <span className="text-sm">{tool.name}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
};

export default Projects;