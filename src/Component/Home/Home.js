import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Details from '../Details/Details';
import Time from '../Time/Time';
import { addToDb } from '../Utilities/Fakedb';

const Home = () => {
    
    const [activities, setActivities] = useState([])
    const [seconds, setSeconds] = useState([])
    const [breakTime, setBreakTime] = useState()

    useEffect(() =>{

        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))

    }, [])
    
    useEffect(() =>{

        const addedTime = localStorage.getItem('breakTime')
        const choosenTime = JSON.parse(addedTime)
        if(choosenTime){
            setBreakTime(choosenTime)
        }
    }, [breakTime])

    const addTime = (activities) => {
        const newArray = [...seconds, activities]
        setSeconds(newArray);
    }
    
    const addBreak = (e) => {
        setBreakTime(e.target.innerText);
        addToDb(e.target.innerText)
    }

    return (
        <div className="container mx-auto mt-20 font-sans">
            <div className="flex align-center justify-start my-12">
                <img src="https://www.nbcsports.com/sites/rsnunited/files/archive/assets_media_gallery/philadelphia/2020/07/01/houston-texans-symbol_1_0.jpg" alt="" className="w-12 h-12 rounded-full" />
                <h1 className="mx-4 text-3xl font-bold font-sans text-slate-700">FOOTBALL DRILLS CLUB</h1>
            </div>
            
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 lg:col-span-3">

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    activities.map(activity => <Activities 
                        key ={activity.id}
                        contents={activity}
                        seconds = {addTime}
                        ></Activities>)
                }
                </div>
            </div>
            
            <div className="bg-white rounded-lg">
                <Details setBreak={addBreak} breakTime={breakTime}></Details>
                <Time seconds={seconds}></Time>
            </div>  
          </div>
        </div>
    );
};

export default Home;