import { Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const EventList = (props) => {
    const { img, title, _id } = props.event;
    return (
      <div>
        <Card style={{ width: "18rem", marginBottom: "40px", border: 'none' }}>
          <Link to = {"/registration/"+_id}>
            <Card.Img
              style={{ marginLeft: "15px", width: "250px", height: "270px" }}
              variant="top"
              src={img}
            />
          </Link>
          <Card.Body>
            <Card.Title style={{ textAlign: "center",}}> {title} </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
};

export default EventList;