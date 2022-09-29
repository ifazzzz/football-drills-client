import React from 'react';
import './Activities.css'
const Activities = ({contents}) => {
    const {title , image, description, time} = contents
    return (
        <div className="border border-transparent rounded-lg p-4 bg-white">
            <img className="w-96 h-40 rounded-lg" src={image} alt="" />
            <div className="mt-3">
                <h1 className="text-xl font-bold font-sans my-2">{title}</h1>
                <p className="text-slate-600 my-2">{description}</p>
                <h1 className="text-base font-bold font-sans my-2">Time Required :{time}</h1>
            </div>
            <div className="mt-4">
                <button className="w-full bg-slate-700 px-6 py-3 rounded-lg text-white">Add to list</button>
            </div>
        </div>
    );
};

export default Activities;