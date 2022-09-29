import React from 'react';
import './Activities.css'
const Activities = ({contents}) => {
    const {title , image, description, time} = contents
    return (
        <div>
            <img src={image} alt="" />
            <h1 className="text-2xl font-bold font-sans">{title}</h1>
            <p className="font-sans">{description}</p>
            <h1 className="text-xl font-bold font-sans">Time Required :{time}</h1>
            <button className="bg-blue-700 px-6 py-3 rounded-lg text-white">Add to list</button>
        </div>
    );
};

export default Activities;