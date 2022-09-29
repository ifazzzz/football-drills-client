import React from 'react';

const Time = (props) => {
    const {seconds} = props;
    console.log(seconds);

    let secondsTaken = 0;
    for(const second of seconds) {
         secondsTaken = secondsTaken + second.time;
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
                <button className="w-full bg-slate-700 px-6 py-3 rounded-lg text-white">Activity Completed</button>
            </div>
        </div>
    );
};

export default Time;