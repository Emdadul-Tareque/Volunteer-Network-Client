import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Images/logos/Group 1329.png";
import { Link } from 'react-router-dom';
import './addEvents.css'
import { UserContext } from '../../App';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';

const AddEvents = () => {
    const [loggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
       eventDate: new Date()
      
     });
    const [event, setEvent] = useState({
      title: "",
      eventDate: "",
      description: "",
      photo: "",
    });

    const handlePost = () => {
      const newEventDetails = { ...loggedInUser, ...event, ...selectedDate };
         fetch("https://protected-harbor-63077.herokuapp.com/addEvents", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(newEventDetails),
         });
    }

    const handleDate = (date) => {
      const newDates = { ...selectedDate };
      newDates.eventDate = date;
      setSelectedDate(newDates);
    };

    const handleBlur = (e) =>{
        const newEvent = { ...event };
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    
    return (
      <div className="admin-page">
        <div className="volunteer-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="side-var">
            <Link to="/admin">
              <p>
                <FontAwesomeIcon icon={faUsers} />
                <span style={{ marginLeft: "5px" }}>
                  volunteer registration list
                </span>
              </p>
            </Link>

            <a href="/addEvent">
              <FontAwesomeIcon icon={faPlus} /> Add event
            </a>
          </div>
        </div>

        <div>
          <h5>Add Event</h5>
          <div className="event-form">
            <div className="form-element">
              <form action="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-Field">
                      <label for="fname">Event title</label>
                      <br></br>
                      <input
                        className="input"
                        name="title"
                        type="text"
                        placeholder="Event title"
                        onBlur={handleBlur}
                        required
                      />
                      <br />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-Field">
                      <label for="fname">Description</label>
                      <br />
                      <input
                        name="description"
                        className="input-des"
                        type="text"
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-Field">
                      <label for="fname">Banner</label>
                      <br />
                      <input type="file" required />
                    </div>
                  </div>
                </div>
              </form>
              <div className="post-btn">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddEvents;