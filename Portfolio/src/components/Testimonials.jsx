import React, { useState, useEffect } from 'react';

const Testimonial = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className=" container bg-gray-100 py-8" id="testimonial">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Testimonials</h1>
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`absolute top-0 left-0 w-full h-full transition-shadow duration-500 ease-in-out ${index === currentTestimonialIndex ? 'opacity-100' : 'opacity-0'}`}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className=" container bg-white rounded-lg  overflow-hidden shadow-lg p-6">
      <img src={testimonial.image.url} alt={testimonial.name} className="rounded-full w-20 h-20 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-center mb-2">{testimonial.name}</h3>
      <p className="text-gray-600 text-center mb-4">{testimonial.position}</p>
      <p className="text-gray-800">{testimonial.review}</p>
    </div>
  );
};

export default Testimonial;
