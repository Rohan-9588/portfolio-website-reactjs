import React from 'react';

function Skills({ skills }) {
    return (
        <div className="container mx-auto py-8" id="skill">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.sort((a, b) => a.sequence - b.sequence).map(skill => (
                    <div key={skill._id} className="p-4 bg-cyan-300 rounded-lg shadow-md hover:shadow-black">
                        <div className="flex items-center mb-2">
                            <img
                                className="w-8 h-8 mr-2"
                                src={skill.image.url}
                                alt={skill.name}
                            />
                            <h3 className="text-lg font-bold">{skill.name}</h3>
                        </div>
                        <h3 className="text-base font-bold text-end">{skill.percentage}%</h3>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                <div style={{ width: `${skill.percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-blue-500"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;


