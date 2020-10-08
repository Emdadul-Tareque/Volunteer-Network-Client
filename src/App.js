
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Registration from './Component/Registration/Registration';
import Event from './Component/Event/Event';
import AdminPage from './Component/AdminPage/AdminPage';
import AddEvents from './Component/AddEvents/AddEvents';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/Registration/:id">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/events">
            <Event></Event>
          </PrivateRoute>
          <Route path="/admin">
            <AdminPage></AdminPage>
          </Route>
          <Route to = "/addEvent">
            <AddEvents></AddEvents>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
