import React, { useEffect, useState } from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    let duration = props.props;
    // console.log(props.props);
    // console.log(duration);
    const previousBreak = localStorage.getItem('breakDuration');
    console.log(previousBreak);
    const [breaktime, setBreaktime] = useState(previousBreak);

    const breakTime = (breakTime) => {
        console.log(breakTime, 'from btn click');
        setBreaktime(breakTime);
        localStorage.setItem('breakDuration', breakTime);

    };
    return (

        <div className='sidebar-body sticky'>
            <div className='user-info'>
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="" />
                <div className='user-detail'>
                    <h3>Tahmid Taki Rahman</h3>
                    <p>Kuala Lampur, Malaysia</p>
                </div>
            </div>

            <div className='additional-info'>
                <div>
                    <h2>9<small id='small-font'>out of 10</small></h2>
                    <p>Score</p>
                </div>
                <div>
                    <h2>Expert</h2>
                    <p>Level</p>
                </div>
                <div>
                    <h2>12<small id='small-font'>Years</small></h2>
                    <p>Experience</p>
                </div>
            </div>
            <h4>Add a break</h4>
            <div className="break-buttons">
                <button onClick={() => breakTime(5)}>5m</button>
                <button onClick={() => breakTime(10)}>10m</button>
                <button onClick={() => breakTime(20)}>20m</button>
                <button onClick={() => breakTime(30)}>30m</button>
            </div>

            <h4>Task Details</h4>
            <div className='task-time'>
                <h5>Task Total Time</h5>
                <p> {duration} minutes</p>

            </div>
            <div className='task-time'>
                <h5>Break Time</h5>
                <p>{breaktime ? breaktime : 0} minutes</p>

            </div>


        </div>
    );
};

export default Sidebar;