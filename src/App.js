import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./Components/Authorisation/Login";
import AddRetailer from "./Components/Retailers/AddRetailer";
import AllRetailer from "./Components/Retailers/AllRetailer";
import Attendence from "./UI/Attendence";
import CommentsList from "./UI/CommentsList";
import DashBoard from "./UI/DashBoard";
import Report from "./UI/Report";
import RetailerData from "./Components/Retailers/RetailerData";
import { useSelector } from "react-redux";
import AllRepresentatives from "./Components/Representatives/AllRepresentatives";
import AllDistributors from './Components/Representatives/AllDistributors'

function App() {
  let user = useSelector((state) => state.users.user);
  // user = "rep"
  // console.log(user, "in app");
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      {user === "rep" && (
        <Switch>
          <Route path="/all-retailers" exact>
            <AllRetailer />
          </Route>

          <Route path="/all-retailers/:retailerid" exact>
            <RetailerData />
          </Route>
          <Route path="/add-retailer" exact>
            <AddRetailer />
          </Route>
        </Switch>
      )}

      {user === "manager" && (
        <Switch >
           <Route path="/all-representatives" exact>
            <AllRepresentatives />
          </Route>
          <Route path="/all-distributors" exact>
            <AllDistributors />
          </Route>
          <Route path="/add-distributor" exact>
            <AddRetailer />
          </Route>
        </Switch>
      )}

      <Route path="/report" exact>
        <Report />
      </Route>
      <Route path="/attendence" exact>
        <Attendence />
      </Route>
      <Route path="/comments" exact>
        <CommentsList />
      </Route>
      <Route path="/dashboard" exact>
        <DashBoard />
      </Route>
    </>
  );
}

export default App;
