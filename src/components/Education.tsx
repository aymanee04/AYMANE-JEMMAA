export default function Education(){
    return (
        <section id="education" className="py-20 bg-dark-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                    <span className="text-primary font-mono text-xl mr-3">03.</span> Education
                    <div className="ml-6 h-[1px] bg-dark-700 flex-grow"></div>
                </h2>

                <div className="space-y-6">
                    <div
                        className="bg-dark-900 border border-dark-700 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between hover:border-primary/50 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold text-white">Master in Computer Engineering and Artificial
                                Intelligence</h3>
                            <p className="text-gray-400 mt-1">Faculté des sciences AinChock</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                            <span
                                className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-mono">2025 - Present</span>
                        </div>
                    </div>

                    <div
                        className="bg-dark-900 border border-dark-700 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between hover:border-primary/50 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold text-white">Bachelor in IT Engineering and Multimedia</h3>
                            <p className="text-gray-400 mt-1">ES2IM</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                            <span
                                className="inline-block px-3 py-1 bg-dark-800 text-gray-300 border border-dark-700 rounded-full text-sm font-mono">2024 - 2025</span>
                        </div>
                    </div>

                    <div
                        className="bg-dark-900 border border-dark-700 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between hover:border-primary/50 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold text-white">Specialized Technician in IT Development</h3>
                            <p className="text-gray-400 mt-1">ITSup</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                            <span
                                className="inline-block px-3 py-1 bg-dark-800 text-gray-300 border border-dark-700 rounded-full text-sm font-mono">2022 - 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}