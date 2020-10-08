import React from 'react';
import { Link } from 'react-router-dom';
import './AllProgram.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const AllProgram = (props) => {
    const {name, email,eventDate, title, _id} = props.events;
     const handleCancel = (id) => {
       console.log("cancel clicked");
       console.log(id);
       fetch(`https://protected-harbor-63077.herokuapp.com/delete/${id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((result) => {
           if (result.deletedCount > 0){
              console.log("Deleted Successfully")
           } 
           else{
             console.log("not deleted");
           }
         });
     };
    return (
      <div className="all-registration">
        <div className="registration-listt">
          <small>{name}</small>
        </div>
        <div className="registration-list">
          <small> {email} </small>
        </div>
        <div className="registration-listt">
          <small> {new Date(eventDate).toDateString("dd/MM/yyyy")} </small>
        </div>
        <div className="registration-listt">
          <small> {title}</small>
        </div>
        <div className="registration-listt">
          <Link to="/admin">
            <button
              onClick={() => handleCancel(_id)}
              type="button"
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
              
            </button>
          </Link>
        </div>
      </div>
    );
};

export default AllProgram;