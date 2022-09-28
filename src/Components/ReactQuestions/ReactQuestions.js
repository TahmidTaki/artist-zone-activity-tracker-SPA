import React from 'react';
import './ReactQuestions.css'

const ReactQuestions = () => {
    return (
        <div>
            <div>
                <h2>How React Works</h2>
                <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs). React uses components to display information. Components are reusable UIs. Components take input data named props and return a react element that should be appeared on the screen. Just like html dom manipulation, react creates its own virtual DOM. whenever there is a change in child node in the DOM tree, react matches is virtual dom for any change, if a change is found, ract updates that part of the tree, meaning dom update becomes very efficient. And any changes mentioned above, are handled through states.</p>
            </div>
            <div>
                <h2>Difference Between Props and States</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                <table>
                    <tr>
                        <th>Props</th>
                        <th>States</th>
                    </tr>
                    <tr>
                        <td>Props are read-only</td>
                        <td>State changes can be asynchronous</td>

                    </tr>
                    <tr>
                        <td>Props cannot be modified</td>
                        <td>state can be modified using setState</td>

                    </tr>
                </table>

            </div>
            <div>
                <h2>Usage of useEffect Hook</h2>
                <p> <small>A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.</small> </p>
                <p>By using the useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. This updates may include fetching data, updating some elements inside a component, directly updating the DOM, and timers.</p>
            </div>
        </div>
    );
};

export default ReactQuestions;