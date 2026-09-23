export default function Experience(){
    return (
            <div id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                    <span className="text-primary font-mono text-xl mr-3">02.</span> Experience
                    <div className="ml-6 h-px bg-dark-700 grow"></div>
                </h2>

                <div
                    className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-dark-700">
                    <div
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <i className="fas fa-briefcase text-white text-sm"></i>
                        </div>
                        <div
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-800 p-6 rounded-lg border border-dark-700 shadow-lg hover:border-primary/50 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                <h3 className="font-bold text-white text-xl">Full-Stack Developer Intern</h3>
                                <span className="text-primary font-mono text-sm">Jan 2026 - Mar 2026</span>
                            </div>
                            <h4 className="text-gray-300 font-medium mb-4">T2S Group</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Designed and developed a multi-tenant ticket management system using Spring Boot and
                                Angular serving 5 client organizations. Implemented RESTful APIs, JWT authentication,
                                role-based access control, Cloudinary integration, and Thymeleaf email notifications.
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-dark-700 group-hover:bg-primary transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <i className="fas fa-briefcase text-white text-sm"></i>
                        </div>
                        <div
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-800 p-6 rounded-lg border border-dark-700 shadow-lg hover:border-primary/50 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                <h3 className="font-bold text-white text-xl">Web Developer Intern</h3>
                                <span className="text-primary font-mono text-sm">Oct 2025 - Nov 2025</span>
                            </div>
                            <h4 className="text-gray-300 font-medium mb-4">Arcad Collective</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Developed a modern corporate website with Next.js and Tailwind CSS, creating a library
                                of reusable React components for scalability and consistency.
                            </p>
                        </div>
                    </div>

                    <div
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-dark-700 group-hover:bg-primary transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <i className="fas fa-briefcase text-white text-sm"></i>
                        </div>
                        <div
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-800 p-6 rounded-lg border border-dark-700 shadow-lg hover:border-primary/50 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                <h3 className="font-bold text-white text-xl">Web Developer Intern</h3>
                                <span className="text-primary font-mono text-sm">Mar 2024 - Apr 2024</span>
                            </div>
                            <h4 className="text-gray-300 font-medium mb-4">Online Technologies</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Developed an automated customer service chatbot and implemented interactive behaviors
                                using JavaScript, HTML5, and CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}