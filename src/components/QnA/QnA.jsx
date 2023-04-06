import React from 'react';

const QnA = () => {
    return (
        <div>
            <h1 className='text-center font-extrabold text-3xl mb-5'>All questions answer!!!</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-24 my-5">
                <div className="collapse-title text-xl font-medium">
                    1. what is the difference between Props vs state ?
                </div>
                <div className="collapse-content">
                    <p>Props (short for "properties") are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. </p>
                    <p>State, on the other hand, is used to manage data that changes over time within a component. Unlike props, state is mutable and can be updated by the component itself using the setState() method</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-24 my-5">
                <div className="collapse-title text-xl font-medium">
                    2. How does useState work?
                </div>
                <div className="collapse-content">
                    <p>useState is a hook in React that allows to add state into the functional components. It is used to declare a state variable and provide a way to update that variable.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-24 my-5">
                <div className="collapse-title text-xl font-medium">
                    3. what is the Purpose of useEffect other than fetching data?
                </div>
                <div className="collapse-content">
                    <p>useEffect is a hook in React that allows us to perform side effects into the functional components. A side effect is any operation that affects something outside of the component, such as fetching data, modifying the DOM, or setting up event listeners.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-24 my-5">
                <div className="collapse-title text-xl font-medium">
                    4. How Does React work?
                </div>
                <div className="collapse-content">
                    <p>React is a JavaScript library for building user interfaces. It works by allowing us to define components, which are reusable pieces of code that describe how a part of our user interface should look and behave.React works by keeping track of the state of each component, and automatically updating the user interface when the state changes. When a component's state changes, React will re-render the component and any child components, updating the DOM to reflect the new state.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default QnA;