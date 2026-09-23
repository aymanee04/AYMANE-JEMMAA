import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { projectsData } from "@/data/projectsData";
import {Footer} from "@/components/Footer";

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-16 bg-dark-900 text-gray-300 font-sans antialiased selection:bg-primary selection:text-white">
                <section id="projects" className="py-20 bg-dark-800/50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                            Projects
                            <div className="ml-6 h-px bg-dark-700 grow"></div>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {projectsData.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-dark-900 rounded-lg border border-dark-700 p-6 hover:-translate-y-1 transition-transform"
                                >
                                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-5">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    <Link href={`/projects/${project.id}`} className="text-primary flex items-center gap-2">
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}