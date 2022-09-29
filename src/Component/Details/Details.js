import React from 'react';

const Details = ({setBreak, breakTime}) => {

    return (
        <div className="p-6">
            <div className="flex p-4 justify-evenly">
                <div>
                    <img className="rounded-full w-16" src="https://12r9bkcquoz2cfikc47m7moj-wpengine.netdna-ssl.com/wp-content/uploads/2022/02/Oli-Billson.jpeg" alt="" />
                </div>
                <div className="">
                    <p>Ifaz Ahmed</p>
                    <p className="text-sm text-slate-600">Netrakona , Bangladesh</p>
                </div>
            </div>
            <div className="flex justify-between bg-slate-100 rounded-lg p-6 my-4">
                <div>
                  <p>65<span className="text-sm text-slate-600">kg</span></p>
                  <p>Weight</p>  
                </div>
                <div>
                    <p>5.10</p>
                    <p>Height</p>
                </div>
                <div>
                    <p>21<span className="text-sm text-slate-600">yrs</span></p>
                    <p>Age</p>
                </div>
            </div>
            <div className='mt-8'>
                <h1>Add a break</h1>
                <div className="bg-slate-200 rounded-lg p-6 flex justify-between mt-4">
                    <button className="bg-slate-700 rounded-full text-white p-2"><span onClick={setBreak} >10</span>s</button>
                    <button className="bg-slate-700 rounded-full text-white p-2"><span onClick={setBreak} >20</span>s</button>
                    <button className="bg-slate-700 rounded-full text-white p-2"><span onClick={setBreak} >30</span>s</button>
                    <button className="bg-slate-700 rounded-full text-white p-2"><span onClick={setBreak} >40</span>s</button>
                    <button className="bg-slate-700 rounded-full text-white p-2"><span onClick={setBreak} >50</span>s</button>  
                </div>
                <div className="bg-slate-100 rounded-lg text-sm text-slate-600 flex justify-between p-4 my-4">
                    <div>Break Time</div>
                    <div>{breakTime} Seconds</div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;