import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../Images/logos/Group 1329.png";
import './Login.css'
import { handleGoogleSignIN, initializeLoginFramework } from './loginManager';
import googleIcon from '../../Images/logos/google.png'


const Login = () => {

    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
      password: "",
      photo: "",
    });
    console.log(user);

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser)
      
    const googleSignIn = () => {
      handleGoogleSignIN().then((res) => {
        handleResponse(res, true);
      });
    };

      const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
          history.replace(from);
        }
      };

    return (
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="login">
          <div className="google-login">
            <h2>Login with google</h2>
            <div className="signIn">
              <div>
                <img className="google-icon" src={googleIcon} alt="" />
              </div>
              <button className="signIn-btn" onClick={googleSignIn}>
                Sign In with google
              </button>
              <br />
            </div>
            <small>
              Don't have an account?{" "}
              <span>
                <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">
                  {" "}
                  Create account
                </a>
              </span>{" "}
            </small>
          </div>
        </div>
      </div>
    );
};

export default Login;