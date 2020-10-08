
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Task from '../Task/Task'
import Header from '../Header/Header';

import './Event.css'




const Event = () => {
   const [userEvents, setUserEvents] = useState([]);
   const [loggedInUser] = useContext(UserContext);
   useEffect(() => {
     fetch(
       "https://protected-harbor-63077.herokuapp.com/userEvents?email=" +
         loggedInUser.email,
       {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       }
     )
       .then((res) => res.json())
       .then((data) => setUserEvents(data));
   }, [loggedInUser.email]);

    return (
      <div>
        <Header></Header>

        <h3>You have : {userEvents.length} Events </h3>
        <div className="row">
          {
            userEvents.map(e => <Task event = {e}></Task>)
          }
        </div>
      </div>
    );
};

export default Event;