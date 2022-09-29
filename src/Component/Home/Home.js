import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Deatils from '../Details/Details';
const Home = () => {

    const [activities, setActivities] = useState([])
    const [seconds, setSeconds] = useState([])

    useEffect(() =>{

        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))

    }, [])
    
    const addTime = (activities) => {
        const newArray = [...seconds, activities]
        setSeconds(newArray);
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
                <Deatils seconds={seconds}></Deatils>
            </div>  
          </div>
        </div>
    );
};

export default Home;