import { ArrowRight, ExternalLink, Folder } from "lucide-react";
import Link from "next/link";
import {projectsData} from "@/data/projectsData";

export default function Projects(){
    return (
        <section id="projects" className="py-20 bg-dark-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                    <span className="text-primary font-mono text-xl mr-3">05.</span> Featured Projects
                    <div className="ml-6 h-px bg-dark-700 grow"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {projectsData.map(project => (
                        <div key={project.id}
                             className="bg-dark-900 rounded-lg overflow-hidden border border-dark-700 flex flex-col group hover:-translate-y-2 transition-transform duration-300 relative">
                            <div className="p-5 flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <Folder className="w-8 h-8 text-primary"/>
                                    {/* Link icons */}
                                    <div className="flex items-center gap-4 relative z-10">
                                        <a href={project.githubUrl} target="_blank"
                                           className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-sm font-mono"
                                           aria-label="GitHub Repository">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {/* Invisible link that makes the whole card clickable */}
                                    <a href={`/projects/${project.id}`} className="absolute inset-0 z-0"
                                       aria-label={`View details for ${project.title}`}></a>
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-3 text-sm relative z-10">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex justify-left">
                                    <a href={`/projects/${project.id}`}
                                       className="text-primary  flex items-center gap-2 group">
                                        <span className="hover:underline">View Details</span>
                                        <ArrowRight className="w-4 h-4 transform " />
                                    </a>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="px-5 pb-5 mt-auto relative z-10">
                                <div className="flex flex-wrap gap-2 font-mono text-xs text-primary">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span key={tech} className="bg-primary/10 px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Increased top margin and padding for better spacing */}
                <div className="mt-10 flex justify-center">
                    <Link href="/projects"
                          className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 rounded font-mono transition-colors duration-300 flex items-center gap-2 group">
                        <span>View Other Projects</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}