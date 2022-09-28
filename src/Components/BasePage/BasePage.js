import React from 'react';
import './BasePage.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import Activities from '../Activities/Activities';
import Sidebar from '../Sidebar/Sidebar';
const BasePage = () => {
    const i = '<img src="https://i.ibb.co/GdJM3M8/act1.jpg" alt="act1" border="0">';
    return (
        <div>
            <div className='main-container'>
                <div>
                    <h1 className='page-title'><FontAwesomeIcon icon={faPalette} />__Artist Zone</h1>

                    <Activities></Activities>
                </div>
                <div>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default BasePage;