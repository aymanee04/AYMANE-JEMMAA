import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="pt-16 bg-dark-900 text-gray-300 font-sans antialiased selection:bg-primary selection:text-white">
                <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-primary font-mono mb-4 text-lg">Hi, my name is</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Aymane JEMMAA.
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-8">
                            Full-Stack Web Developer.
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-gray-400 mx-auto mb-10 leading-relaxed">
                            Specializing in Java Spring Boot, Angular, and React. I design and build scalable
                            web applications and robust architectures.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://github.com/aymanee04" target="_blank"
                               className="px-8 py-3 rounded-md bg-dark-800 hover:bg-dark-700 text-white font-medium transition-colors border border-dark-700 flex items-center justify-center gap-2">
                                GitHub Profile
                            </a>
                            <Link href="/#contact"
                               className="px-8 py-3 rounded-md bg-primary hover:bg-blue-600 text-white font-medium transition-colors border border-transparent">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <About/>
            <Experience/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}