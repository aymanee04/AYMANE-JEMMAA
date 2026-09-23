import { Code2, Laptop, Server, Database } from 'lucide-react';

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const skillsData: SkillCategory[] = [
    {
        id: 'languages',
        title: 'Languages',
        icon: <Code2 size={24} />,
        skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'C#']
    },
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <Laptop size={24} />,
        skills: ['Angular', 'React', 'Next.js', 'HTML5', 'CSS', 'Tailwind CSS']
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: <Server size={24} />,
        skills: ['Spring Boot', 'Node.js', 'Express.js', 'JEE']
    },
    {
        id: 'databases',
        title: 'Databases & Tools',
        icon: <Database size={24} />,
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Postman', 'Jenkins', 'JUnit']
    }
];

export default function Skills(){
    return (
        <section id="skills" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                    <span className="text-primary font-mono text-xl mr-3">04.</span> Technical Skills
                    <div className="ml-6 h-px bg-dark-700 grow"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.map((category) => (
                        <div
                            key={category.id}
                            className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary/50 transition-colors">
                            <div className="text-primary mb-4">{category.icon}</div>
                            <h3 className="text-white font-semibold text-lg mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-dark-900 border border-dark-700 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}