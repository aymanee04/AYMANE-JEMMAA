
export default function About() {
    return (
        <>
            <main id="about" className="pt-16 bg-dark-900 text-gray-300 font-sans antialiased selection:bg-primary selection:text-white min-h-screen">
                <section className="py-20 bg-dark-800/50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="text-primary font-mono text-xl mr-3">01.</span> About Me
                            <div className="ml-6 h-px bg-dark-700 grow"></div>
                        </h2>

                        <div className="text-gray-400 space-y-4 leading-relaxed text-lg">
                            <p>
                                I am a Full-Stack Developer specializing in Java Spring Boot and modern JavaScript frameworks
                                like Angular and React. I am experienced in designing multi-tenant web applications with REST APIs,
                                JWT authentication, and role-based access control.
                            </p>
                            <p>
                                Currently, I am pursuing a Master&#39;s degree in Computer Engineering & Artificial Intelligence at
                                <span className="text-white font-medium"> Faculté des Sciences Ain Chock</span>. I am passionate
                                about software architecture, football statistics, and continuous learning, always seeking to bridge
                                the gap between complex backend systems and intuitive user interfaces.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}