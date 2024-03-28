import React, { useState, useEffect } from 'react';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Sidebar from './components/Sidebar';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState(null);
  const [services, setServices] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [user, setUser] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      const { user } = await response.json();
      setAbout(user.about);
      setServices(user.services);
      setSkills(user.skills);
      setProjects(user.projects);
      setTimeline(user.timeline);
      setTestimonials(user.testimonials);
      setUser(user);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className='flex'>
      {isLoading ? (
        <Loading />
      ) : (
        <>

          <div className='flex gap-2 p-4 bg-purple-300'>
            <div className='mx-2'>
              <button className={`fixed font-bold text-xl top-4 right-2 z-20 ${isSidebarOpen ? 'text-white' : 'text-black'}`} onClick={toggleSidebar}>
                ☰
              </button>
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} user={user} />
            </div>
            <div className='m-4'>
              <About about={about} />
              <Services services={services} />
              <Skills skills={skills} />
              <Projects projects={projects} />
              <Timeline timeline={timeline} />
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </>
      )}
    </div>

  );
}

export default App;
