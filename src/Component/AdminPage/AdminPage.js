import React, { useEffect, useState } from 'react';
import AllProgram from '../AllProgram/AllProgram';
import logo from "../../Images/logos/Group 1329.png";
import './AdminPage.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus } from "@fortawesome/free-solid-svg-icons";

const AdminPage = () => {
    const [allEvents, setAllEvents] = useState([])
     useEffect(() => {
       fetch("https://protected-harbor-63077.herokuapp.com/allEvents")
         .then((res) => res.json())
         .then((data) => setAllEvents(data));
     }, []);
   
    return (
      <div className="admin-page">
        <div className="volunteer-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="side-var">
            <p>
              <FontAwesomeIcon icon={faUsers} />
              <span style={{ marginLeft: "5px" }}>
                volunteer registration list
              </span>
            </p>

            <a href="/addEvent">
              <FontAwesomeIcon icon={faPlus} /> Add event
            </a>
          </div>
        </div>

        <div>
          <h5>Volunteer register list</h5>
          <h6>Total registered: {allEvents.length} </h6>

          <div className="event-list">
            <div className="design">
              <div className="heading">
                <p>Name</p>
                <p>Email Address</p>
                <p>Registration Date</p>
                <p>Event list</p>
                <p>Action</p>
              </div>
            </div>
            {allEvents.map((events) => (
              <AllProgram key={events._id} events={events}></AllProgram>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AdminPage;