import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
const Home = () => {

    const [activities, setActivities] = useState([])

    useEffect(() =>{

        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))

    }, [])

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-2xl font-bold font-sans text-blue-500">FOOTBALL DRILLS CLUB</h1>
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8">
            <div className="col-span-3">

                {
                    activities.map(activity => <Activities 
                        key ={activity.id}
                        contents={activity}
                        ></Activities>)
                }
            </div>
            <div className="">
                details
            </div>  
          </div>
        </div>
    );
};

export default Home;