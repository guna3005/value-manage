import React from "react";
import NavBar from "./NavBar";
import "./Dashboard.css";
const DashBoard = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div className="fill">
        <img
          src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?w=826&t=st=1665574418~exp=1665575018~hmac=cbc227408b7e6a1bcdbd865f4c7c420c01b65957d70cf655291ebcbf029da923"
          alt="hi"
        />
      </div>
    </div>
  );
};

export default DashBoard;
