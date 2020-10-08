import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import './Home.css'
import Grid from "@material-ui/core/Grid";
import EventList from '../EventList/EventList';

const Home = () => {
      const [events, setEvents] = useState([]);
      useEffect(() => {
        fetch("https://protected-harbor-63077.herokuapp.com/events")
          .then((res) => res.json())
          .then((data) => setEvents(data));
      }, []);

      
    return (
      <div>
        <Header></Header>
        <Headline></Headline>
        <div className="all-event">
          <Grid container spacing={1}>
            {events.map(event => (
              <Grid container item xs={4} spacing={4}>
                <EventList key = {event._id} event={event}></EventList>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
};

export default Home;