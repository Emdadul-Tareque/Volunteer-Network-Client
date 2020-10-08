import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../Images/logos/Group 1329.png";
import './Registration.css';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';



const Registration = () => {
    
    const [loggedInUser] = useContext(UserContext);
    const {id} = useParams();
    console.log(typeof(title));

     const [selectedDate, setSelectedDate] = useState({
       eventDate: new Date()
      
     });
     const [events, setEvents] = useState([])
  
     
    const handleDate = (date) => {
      const newDates = { ...selectedDate };
      newDates.eventDate = date;
      setSelectedDate(newDates);
    };

    useEffect(() => {
      fetch("https://protected-harbor-63077.herokuapp.com/registration/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, []);

     
     const handleRegistration = () => {

       const { img, title } = events;
       const event = {
         img: img,
         title: title,
       };
         
       const newRegistration = { ...loggedInUser, ...selectedDate,...event};
       fetch("https://protected-harbor-63077.herokuapp.com/addUser", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newRegistration),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
         });
     };

    return (
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="registration-form">
          <div className="form">
            <h2>Register as a Volunteer</h2>
            <form action="">
              <div className="form-field">
                <p>{loggedInUser.name}</p>
              </div>

              <br />
              <div className="form-field">
                <p>{loggedInUser.email}</p>
              </div>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Event date"
                      format="dd/MM/yyyy"
                      value={selectedDate.eventDate}
                      onChange={handleDate}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
              <input
                className="form-field"
                type="text"
                placeholder="Description"
                required
              />
              <div className="form-field">
                <p> {events.title} </p>
              </div>
              <br />
              <Link to="/events">
                <button onClick={handleRegistration} className="submit-btn">
                  Registration
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;