import React, { useState } from 'react';
import './BasePage.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import Activities from '../Activities/Activities';
import Sidebar from '../Sidebar/Sidebar';
const BasePage = () => {
    let addTime = 0;
    const [duration, setDuration] = useState(0);
    const addDuration = (activity) => {
        addTime = activity.duration;
        // duration = duration + addTime;
        setDuration(duration + addTime);
        console.log(duration, 'from base page');
    }


    return (
        <div>
            <div className='main-container'>
                <div>
                    <h1 className='page-title'><FontAwesomeIcon icon={faPalette} />__Artist Zone</h1>

                    <Activities addDuration={addDuration}></Activities>
                </div>
                <div>
                    <Sidebar props={duration}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default BasePage;