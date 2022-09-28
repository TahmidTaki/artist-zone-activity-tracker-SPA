import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = (props) => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    return (
        <div>

            <h3>Select today's activity</h3>
            <div className='container'>
                {
                    activities.map(activity =>
                        <Activity activity={activity} key={activity.id} addDuration={props.addDuration}></Activity>
                    )
                }
            </div>
        </div>
    );
};

export default Activities;