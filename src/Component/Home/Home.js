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
        <div className="container mx-auto mt-20">
            <h1 className="my-12 text-3xl font-bold font-sans text-slate-700">FOOTBALL DRILLS CLUB</h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">

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