import React, { useEffect, useState } from "react";
import "./AllRetailer.css";
import "bootstrap/dist/css/bootstrap.css";
import RetailerRender from "./RetailerRender";
import { useSelector } from "react-redux";

const AllRetailer = (props) => {
  const [retailers, setRetailers] = useState([]);
  const token = useSelector(state => state.users.token)

  useEffect(() => {

    return () => {
      async function fetchRetailers() {
        const response = await fetch(
          "http://localhost:8080/api/v1/representatives/retailers",
            {
              method:"GET",
              headers : 
            {
              "accessToken" : "Bearer "+token,
              'Content-Type' : 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
            }
        );
        const data = await response.json();
        setRetailers(data.content);
      }
      fetchRetailers();
    };
  }, []);
  console.log(retailers);
  return (
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
    // </div>
  );
};

export default AllRetailer;
