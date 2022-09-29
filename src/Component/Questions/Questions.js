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
                    <p className="text-slate-600 text-lg font-semibold mb-4">What are the differences between props and State ?</p>
                    <p>
                        <span className="text-xl text-bold text-slate-700">State : </span>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                        <br/>
                        <span className="text-xl text-bold text-slate-700">Props : </span>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg my-6">
                    <p className="text-slate-600 text-lg font-semibold mb-4">What are the purposes of useEffect other than loading API ?</p>
                    
                    <ul>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                        <li>Running on props change: updating fetched API data to get BTC updated price</li>
                    </ul>
                 
                </div>
            </div>
        </div>
    );
};

export default Questions;