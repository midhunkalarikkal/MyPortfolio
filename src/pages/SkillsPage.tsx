export const SkillsPage = () => {

    const sectionStyle = 'text-white mt-6 text-lg font-semibold';
    const itemStyle = 'inline-block text-white px-4 py-2 m-1 rounded shadow bg-gray-800';

    return (
        <div className="w-full px-4 bg-neutral-950">
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
                    Skills
                </h2>
            </div>

            

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
                <h5 className={sectionStyle}>Languages</h5>
                <ul>
                    {['JavaScript', 'TypeScript', 'MongoDB', 'C', 'PostgreSQL', 'HTML5', '(S)CSS'].map((lang) => (
                        <li key={lang} className={itemStyle}>{lang}</li>
                    ))}
                </ul>

                <h5 className={sectionStyle}>Libraries & Frameworks</h5>
                <ul>
                    {['Node.js', 'Express', 'React', 'Tailwind', 'Bootstrap', 'MUI'].map((lib) => (
                        <li key={lib} className={itemStyle}>{lib}</li>
                    ))}
                </ul>

                <h5 className={sectionStyle}>Tools & Platforms</h5>
                <ul>
                    {['Git', 'Postman', 'Jest', 'Render', 'AWS', 'Firebase'].map((tool) => (
                        <li key={tool} className={itemStyle}>{tool}</li>
                    ))}
                </ul>

                <h5 className={sectionStyle}>Design & Prototyping</h5>
                <ul>
                    {['Figma', 'Code Planner', 'Photoshop'].map((tool) => (
                        <li key={tool} className={itemStyle}>{tool}</li>
                    ))}
                </ul>

                <h5 className={sectionStyle}>State Management & Architecture</h5>
                <ul>
                    {['Context API', 'Redux', 'Zustand'].map((state) => (
                        <li key={state} className={itemStyle}>{state}</li>
                    ))}
                </ul>

                <h5 className={sectionStyle}>Concepts & Models</h5>
                <ul>
                    {['MVC Architecture', 'Waterfall Model', 'SOLID Principles'].map((concept) => (
                        <li key={concept} className={itemStyle}>{concept}</li>
                    ))}
                </ul>

                <h5 className={sectionStyle}>Currently Pursuing</h5>
                <ul>
                    {["NestJS", "Microservices", "Clean Architecture", "Socket.io", "WebRTC"
                    ].map((item) => (
                        <li
                            key={item}
                            className={itemStyle}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}