import React, { useState, useEffect } from 'react';

const Contact = ({user}) => {
  
  return (
    <div className="container mx-auto py-8 my-32">   
      <div className="bg-gray-600 rounded-lg shadow-lg p-4">
      <div className='flex items-center gap-2 '>
        <span>@</span>
        <h3 className="text-base font-semibold  mb-2">{user.username}</h3>
        </div>
        <div className='flex items-center gap-2 '>
        <span>✉</span>
        <p className="text-base mb-2">{user.email}</p>  
        </div>
      </div>
    </div>
  );
};

export default Contact;
