export const SkillsPage = () => {

    const sectionStyle = 'text-white mt-6 text-lg font-semibold';
    const itemStyle = 'inline-block text-white px-4 py-2 m-1 rounded shadow bg-gray-800';

    return (
        <div className="w-full px-4">
            <div className="w-full">
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
                    {[
                        { name: 'NestJS', hidden: true },
                        { name: 'Microservices', hidden: true },
                        { name: 'Clean Architecture', hidden: false },
                        { name: 'Socket.io', hidden: false },
                        { name: 'WebRTC', hidden: true },
                    ].map(({ name, hidden }) => (
                        <li
                            key={name}
                            className={`${itemStyle} ${hidden ? 'hidden' : ''}`}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}