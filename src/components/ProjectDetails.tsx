import {projectsData} from "@/data/projectsData";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import {getProjectById} from "@/data/getProjectById";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {ArrowRight, ArrowUpRight, LucideArrowLeft} from "lucide-react";

export function generateStaticParams() {
    return projectsData.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
    const project = getProjectById(params.id);
    if (!project) return {};
    return { title: `${project.title} — Project Details` };
}

function Icon({ name, className }: { name: string; className?: string }) {
    const LucideIcon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkle;
    return <LucideIcon className={className} />;
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = getProjectById(params.id);
    if (!project) return notFound();

    const prev = project.previousProject ? getProjectById(project.previousProject) : undefined;
    const next = project.nextProject ? getProjectById(project.nextProject) : undefined;

    const archEntries = project.architecture
        ? (Object.entries(project.architecture) as [string, string[] | undefined][]).filter(([, v]) => v && v.length)
        : [];

    return (
        <>
            <Navbar/>
        <div className="bg-dark-900 text-slate-200 min-h-screen">
            {/* HERO */}
            <header className="pt-32 pb-20 grid-bg">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <p className="font-mono text-primary text-sm mb-5">01 / PROJECT</p>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            {project.title}
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">{project.subtitle}</p>

                        <div className="flex flex-wrap gap-2 mt-8">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono"
                                >
                  {tech}
                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-500 transition flex items-center gap-2 group"
                                >
                                    View GitHub <ArrowUpRight className="w-6 h-6"/>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-lg border border-slate-600 text-slate-200 hover:border-primary hover:text-primary transition flex items-center gap-2 group"
                                >
                                    Live Demo <ArrowUpRight className="w-6 h-6"/>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* OVERVIEW */}
            <section className="py-20 border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_320px] gap-16">
                        <div>
                            <p className="font-mono text-primary text-sm">02 / OVERVIEW</p>
                            <h2 className="text-3xl font-bold text-white mt-3">What is this project?</h2>
                            <p className="text-slate-400 leading-8 mt-6">{project.description}</p>
                            <p className="text-slate-400 leading-8 mt-4">{project.longDescription}</p>
                        </div>

                        {project.stats && project.stats.length > 0 && (
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                {project.stats.map((stat) => (
                                    <div key={stat.label} className="border border-slate-700 rounded-lg p-5 bg-dark-800">
                                        <p className="font-mono text-primary text-2xl font-bold">{stat.value}</p>
                                        <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            {project.features && project.features.length > 0 && (
                <section className="py-20 bg-dark-800/40 border-y border-slate-800">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="font-mono text-primary text-sm">03 / FEATURES</p>
                        <h2 className="text-3xl font-bold text-white mt-3">Key Features</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                            {project.features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="p-6 rounded-xl border border-slate-700 bg-dark-800 hover:border-primary/60 transition"
                                >
                                    <Icon name={feature.icon} className="w-6 h-6 text-primary" />
                                    <h3 className="font-bold text-white mt-5">{feature.title}</h3>
                                    <p className="text-sm text-slate-400 leading-6 mt-3">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ARCHITECTURE */}
            {archEntries.length > 0 && (
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="font-mono text-primary text-sm">04 / ARCHITECTURE</p>
                        <h2 className="text-3xl font-bold text-white mt-3">System Architecture</h2>

                        <div className="mt-10 p-8 md:p-12 rounded-xl border border-slate-700 bg-dark-800">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center flex-wrap">
                                {archEntries.map(([key, values], i) => (
                                    <div key={key} className="flex items-center gap-4">
                                        <div
                                            className={`w-full md:w-48 p-5 rounded-lg border ${
                                                key === "backend" ? "border-blue-500/50 bg-blue-500/5" : "border-slate-600"
                                            }`}
                                        >
                                            <p className="text-primary font-mono capitalize">{key}</p>
                                            <p className="text-white font-semibold mt-2 text-sm">{values!.join(", ")}</p>
                                        </div>
                                        {i < archEntries.length - 1 && (
                                            <span className="text-primary text-2xl rotate-90 md:rotate-0"><ArrowRight/></span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CHALLENGES */}
            {project.challenges && project.challenges.length > 0 && (
                <section className="py-20 bg-dark-800/40 border-y border-slate-800">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="font-mono text-primary text-sm">05 / CHALLENGES</p>
                        <h2 className="text-3xl font-bold text-white mt-3">Challenges & Solutions</h2>

                        <div className="mt-10 space-y-5">
                            {project.challenges.map((challenge) => (
                                <div
                                    key={challenge.title}
                                    className="grid md:grid-cols-[220px_1fr] gap-6 p-6 rounded-xl border border-slate-700 bg-dark-800"
                                >
                                    <h3 className="font-bold text-white">{challenge.title}</h3>
                                    <p className="text-slate-400 leading-7">{challenge.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* TECH STACK */}
            {project.techStack && project.techStack.length > 0 && (
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="font-mono text-primary text-sm">06 / TECHNOLOGIES</p>
                        <h2 className="text-3xl font-bold text-white mt-3">Technology Stack</h2>

                        <div className="grid md:grid-cols-2 gap-5 mt-10">
                            {project.techStack.map((group) => (
                                <div key={group.category} className="border border-slate-700 rounded-xl p-6 bg-dark-800">
                                    <p className="font-mono text-primary text-sm uppercase">{group.category}</p>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {group.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-block px-2.5 py-1.5 border border-slate-700 rounded-md text-slate-400 font-mono text-xs"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* LEARNING */}
            {project.learned && project.learned.length > 0 && (
                <section className="py-20 bg-dark-800/40 border-y border-slate-800">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="font-mono text-primary text-sm">07 / LEARNING</p>
                        <h2 className="text-3xl font-bold text-white mt-3">What I Learned</h2>

                        <ul className="max-w-3xl mt-8 text-slate-400 leading-8 list-disc list-inside space-y-2">
                            {project.learned.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center mt-20">
                        <Link href="/#projects" className="font-mono text-sm text-primary hover:underline flex items-center gap-2 group border border-slate-700 rounded-xl p-3 hover:border-primary transition">
                            <LucideArrowLeft className="w-4 h-4"/>
                            <span>Back to projects</span>
                        </Link>
                    </div>
                </section>
            )}

        </div>
            <Footer/>
        </>
    );
}