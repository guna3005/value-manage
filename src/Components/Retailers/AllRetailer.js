import React, { useEffect, useState } from "react";
import NavBar from "../../UI/NavBar";

import "./AllRetailer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import RetailerRender from "./RetailerRender";

const AllRetailer = (props) => {
  //   const history = useHistory();
  // let Fake_retailers = useSelector((state) => state.retailers);
  const [retailers, setRetailers] = useState([]);
  // const user = useSelector(state => state.users.user)

  let data = [];
  useEffect(() => {
    
  

  return () => {
    async function fetchRetailers() {
      const response = await fetch("http://192.168.29.12:8080/api/v1/representatives/1/retailers");
      data = await response.json();
      console.log(data.content);
      setRetailers(data.content);
    }
    fetchRetailers();
  }
  },[])

  
  

  console.log(data);
  
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div className="divwithtable">
        <table className="reqtable table table-hover">
          <thead className="thead-dark" style={{ border: "0.5px solid black" }}>
            <tr className="tableRow">
              <th>id</th>
              <th>Name</th>
              <th>Business Name</th>
              <th>Owner</th>
              <th>Phone No</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {retailers.map((data) => {
              return <RetailerRender key={data.id} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRetailer;
