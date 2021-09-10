import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import LogIn from './components/LogIn/LogIn';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SearchVehicle from './components/SearchVehicle/SearchVehicle';

export const UserContext = createContext();
export const VehicleInfoContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [vehicleInfo, setVehicleInfo] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <VehicleInfoContext.Provider value={[vehicleInfo, setVehicleInfo]}>           
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <CreateAccount></CreateAccount>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="/vehicle/:vehicleName">
              <SearchVehicle></SearchVehicle>
            </Route>

            <PrivateRoute path="/destination/:vehicleName">
              <Destination></Destination>
            </PrivateRoute>                  
          </VehicleInfoContext.Provider>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
