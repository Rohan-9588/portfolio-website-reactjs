import React from 'react';
import {Link} from 'react-scroll';
import Contact from './Contact';

const Sidebar = ({ isOpen, hrefggleSidebar, user }) => {
    return (
        <div className={`sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-y-0 right-0 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out z-10`}>
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-4">{user.username}</h1>
                <ul className="my-16">
                    <li className="mb-2 font-semibold text-lg hover:text-xl transition-transform ease-in-out cursor-pointer">
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
                    </li>
                    <li className="mb-2 font-semibold text-lg hover:text-xl transition-transform ease-in-out cursor-pointer">
                        <Link to="service" spy={true} smooth={true} offset={-50} duration={500} >Services</Link>
                    </li>
                    <li className="mb-2 font-semibold text-lg hover:text-xl transition-transform ease-in-out cursor-pointer">
                        <Link to="skill" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
                    </li>
                    <li className="mb-2 font-semibold text-lg hover:text-xl transition-transform ease-in-out cursor-pointer">
                        <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                    </li>
                    <li className="mb-2 font-semibold text-lg hover:text-xl transition-transform ease-in-out cursor-pointer">
                        <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500}>Timeline</Link>
                    </li>
                    <li className="mb-2 font-semibold text-lg hover:text-xl transition-transform ease-in-out cursor-pointer">
                        <Link  to="testimonial" spy={true} smooth={true} offset={-50} duration={500}>Testimonials</Link>
                    </li>
                    <Contact user={user} />
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
