import React, { useState } from 'react';

function Projects({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = project => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="container mx-auto py-8" id ="project">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.sort((a, b) => a.sequence - b.sequence).map(project => (
                    <div key={project._id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-black">
                        <img src={project.image.url} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <div className="flex mb-2">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-sm mr-2">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button onClick={() => openModal(project)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Details</button>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 cursor-pointer hover:underline">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                        <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                        <p className="text-gray-700 mb-4">Tech Stack: {selectedProject.techStack.join(', ')}</p>
                        <div className="flex justify-between">
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 cursor-pointer hover:underline">GitHub</a>
                            <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 cursor-pointer hover:underline">Live Demo</a>
                            <button onClick={closeModal} className="text-gray-600 hover:text-red-500 focus:outline-none">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
