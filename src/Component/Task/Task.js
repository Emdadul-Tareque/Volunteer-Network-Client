import React from 'react';
import './Task.css'

const Task = (props) => {
    const {eventDate, img, title, _id} = props.event;

    const handleCancel = (id) => {
      console.log("cancel clicked")
      console.log(id)
      fetch(`https://protected-harbor-63077.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.deletedCount);
        });
    }
    
    return (
      <div className="col-md-4" id="events">
        <div className="event">
          <div className="event-pic">
            <img src={img} alt="" />
          </div>
          <div className="event-info">
            <h4>{title}</h4>
            <h5>{new Date(eventDate).toDateString("dd/MM/yyyy")}</h5>
            <button onClick = {() => handleCancel(_id)} type="button" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
};

export default Task;