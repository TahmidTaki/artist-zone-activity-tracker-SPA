import React from 'react';
import './Activity.css';

const Activity = (props) => {
    // console.log(props.activity);
    const { id, picture, duration, detail, name } = props.activity;
    // console.log(id, duration);
    return (

        <div className="card">
            <img src={picture} alt="" />
            <h3>Activity: {name}</h3>
            <h4>Details: {detail}</h4>
            <p>Skill: <small>Intermediate</small></p>
            <p>Duration: {duration} min</p>
            <button onClick={() => props.addDuration(props.activity)}>Add-to-list</button>
        </div>

    );
};

export default Activity;