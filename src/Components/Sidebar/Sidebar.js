import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-body'>
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
                <button>5m</button>
                <button>10m</button>
                <button>20m</button>
                <button>30m</button>
            </div>


        </div>
    );
};

export default Sidebar;