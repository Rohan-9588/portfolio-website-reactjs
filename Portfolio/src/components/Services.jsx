import React from 'react';

function Services({ services }) {
    return (
        <div className="container mx-auto py-8 p-4 " id="service">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service._id} className="p-4 bg-purple-400 rounded-lg shadow-md hover:shadow-black">
                        <div className='flex justify-between '>
                            <img className="h-28 " key={service.image.public_id} src={service.image.url} alt="service image" />
                            <p className="text-black m-2">{service.desc}</p>
                        </div>
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                            <span>{service.charge}</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
