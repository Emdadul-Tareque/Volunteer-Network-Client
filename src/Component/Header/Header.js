import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";


// import { Link } from "react-router-dom";
import logo from "../../Images/logos/Group 1329.png";
import "./Header.css";
const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  let user = Object.keys(loggedInUser).length;
  if(user > 0) {
    user = true;
  }
  else{
    user = false;
  }
  console.log("logged in user", );
  return (
    <div className="nav-bar">
      <nav className="nav">
        <ul>
          <li>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Donation</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>{user && <a href="#name"> {loggedInUser.name} </a>}</li>

          <li>
            <Link to="/login">
              <button className="reg-btn">Registration</button>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              {user && <button className="admin-btn">Admin</button>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
