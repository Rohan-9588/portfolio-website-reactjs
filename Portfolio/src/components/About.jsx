import React from 'react';
import { motion } from 'framer-motion';

function About({ about }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" py-8 bg-slate-200 rounded-lg shadow-lg"
            id="about"
        >
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 flex justify-center">
                    <motion.img
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 lg:w-64 lg:h-64 rounded-full mb-4 border-4 border-white"
                        src={about.avatar.url}
                        alt={about.name}
                    />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left px-6">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold mb-2 text-gray-800"
                    >
                        {about.name}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 mb-4"
                    >
                        {about.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg mb-6 text-gray-700"
                    >
                        {about.description}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="italic text-gray-700"
                    >
                        {about.quote}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
