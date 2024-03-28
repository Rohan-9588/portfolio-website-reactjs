import React, { useState } from 'react';
import './Timeline.css';
import { motion } from 'framer-motion';

function Timeline({ timeline }) {
    const [showEducation, setShowEducation] = useState(true);

    const renderTimelineItem = (item) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={item._id}
            className="timeline-item"
        >
            <h3 className="text-lg font-bold mb-2">{item.company_name}</h3>
            <p className="text-gray-800 mb-2">{item.summary}</p>
            <p className="text-gray-800 mb-2">Job Title: {item.jobTitle}</p>
            <p className="text-gray-800 mb-2">Location: {item.jobLocation}</p>
            <p className="text-gray-800 mb-2">Start Date: {new Date(item.startDate).toLocaleDateString()}</p>
            <p className="text-gray-800 mb-2">End Date: {new Date(item.endDate).toLocaleDateString()}</p>
            <ul className="list-disc list-inside">
                {item.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </motion.div>
    );

    const educationItems = timeline.filter(item => item.forEducation).sort((a, b) => a.sequence - b.sequence);
    const experienceItems = timeline.filter(item => !item.forEducation).sort((a, b) => a.sequence - b.sequence);

    return (
        <div className="container mx-auto px-2 py-8 bg-gray-100 rounded-lg shadow-lg" id="timeline">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Timeline</h2>
            <div className="mb-4 flex">
                <button
                    onClick={() => setShowEducation(true)}
                    className={`mr-4 px-4 py-2 text-lg font-semibold rounded-md ${showEducation ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    Education
                </button>
                <button
                    onClick={() => setShowEducation(false)}
                    className={`px-4 py-2 text-lg font-semibold rounded-md ${!showEducation ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    Experience
                </button>
            </div>
            <div className="timeline-section">
                {showEducation && (
                    <>
                        <h3 className="text-2xl font-bold mb-4 text-blue-700">Education</h3>
                        {educationItems.map(item => renderTimelineItem(item))}
                    </>
                )}
                {!showEducation && (
                    <>
                        <h3 className="text-2xl font-bold mb-4 text-blue-700">Experience</h3>
                        {experienceItems.map(item => renderTimelineItem(item))}
                    </>
                )}
            </div>
        </div>
    );
}

export default Timeline;
