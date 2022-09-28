import React, { useState } from 'react';
import './BasePage.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import Activities from '../Activities/Activities';
import Sidebar from '../Sidebar/Sidebar';
import ReactQuestions from '../ReactQuestions/ReactQuestions';
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
                    <h1 className='page-title'><FontAwesomeIcon icon={faPalette} />__【🅰🆁🆃🅸🆂🆃 𝒵𝑜𝓃𝑒】</h1>

                    <Activities addDuration={addDuration}></Activities>
                </div>
                <div>
                    <Sidebar props={duration}></Sidebar>
                </div>
            </div>
            <div className='questions'>
                <ReactQuestions></ReactQuestions>
            </div>
        </div>
    );
};

export default BasePage;