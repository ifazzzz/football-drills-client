import React from 'react';

const Questions = () => {
    return (
        <div className="container mx-auto my-16">
            <h1 className="text-center text-3xl font-bold font-sans text-slate-700">Questions And Answers</h1>
            <div>
                <div className="bg-white p-6 rounded-lg my-6">
                 <p className="text-slate-600 text-lg font-semibold mb-4">How Does React Work ?</p>
                 <p>
                 ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. Returned React elements determine how the UI will look at the client end.It’s possible to have as many components as necessary without cluttering your code.
                 </p>
                </div>
                <div className="bg-white p-6 rounded-lg my-6">
                 <p className="text-slate-600 text-lg font-semibold mb-4">What are the differences between props and useEffect ?</p>
                 <p>
                 Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions. Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.<br/><br/>
                 The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect
                 </p>
                </div>
                <div className="bg-white p-6 rounded-lg my-6">
                 <p className="text-slate-600 text-lg font-semibold mb-4">What are the purposes of useEffect other than loading API ?</p>
                 <p>
                   <ul>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                   </ul>
                 </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;