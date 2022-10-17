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
import AllDistributors from "./Components/Representatives/AllDistributors";
import RepData from "./Components/Representatives/RepData";
import DisplayFlex from "./Components/Display/DisplayFlex";

function App() {
  let user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      {user === "" && <Switch>
        <Route path="/*">
          <Redirect to="/login" />
        </Route>
        </Switch>}
      {user === "rep" && (
        <Switch>
          <Route path="/all-retailers" exact>
            <DisplayFlex>
              <AllRetailer />
            </DisplayFlex>
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
        <Switch>
          <Route path="/all-representatives" exact>
            <AllRepresentatives />
          </Route>
          <Route path="/all-distributors" exact>
            <AllDistributors />
          </Route>
          <Route path="/add-distributor" exact>
            <AddRetailer />
          </Route>
          <Route path="/rep-data/:repid" exact>
            <RepData />
          </Route>
        </Switch>
      )}

      <Route path="/report" exact>
        <DisplayFlex>
          <Report type={"update"} />
        </DisplayFlex>
      </Route>
      <Route path="/attendence" exact>
        <DisplayFlex>
          <Attendence />
        </DisplayFlex>
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
