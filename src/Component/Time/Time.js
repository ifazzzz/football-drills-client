import React from 'react';
import { toast } from 'react-toastify';
const Time = (props) => {

    const {seconds} = props;

    let secondsTaken = 0;
    for(const second of seconds) {
         secondsTaken = secondsTaken + second.time;
    }

    const showToastMessage = () => {
        toast.success('Your Drills Are Completed !')
    }

    return (
        
        <div className="p-6">
           <div>
              <p className="text-base text-bold">Exercise Details</p>
              <div className="bg-slate-100 rounded-lg text-sm text-slate-600 flex justify-between p-4 my-4">
                <div>Exercise Time</div>
                <div>{secondsTaken} Seconds</div>
              </div>
            </div>

            <div className="my-6">
                <button onClick={showToastMessage} className="w-full bg-slate-700 px-6 py-3 rounded-lg text-white">Activity Completed</button>   
            </div>
        </div>
    );
};

export default Time;