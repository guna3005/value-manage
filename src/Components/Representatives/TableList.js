import React from "react";
import { useSelector } from "react-redux";
// import NavBar from "../../UI/NavBar";
import RetailerRender from "../Retailers/RetailerRender";

const TableList = (props) => {
  const req_data = props.data;
  return (
    <>
      <div className="divwithtable">
        <table className="reqtable table table-hover">
          <thead className="thead-dark" style={{ border: "0.5px solid black" }}>
            <tr className="tableRow">
              <th>id</th>
              <th>Name</th>
              <th>Business Name</th>
              <th>Phone No</th>
              <th>Owner</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {req_data.map((data) => {
              return (
                <RetailerRender
                  key={data.id}
                  data={data}
                  dist={props.dist}
                  from_rep={props.from_rep}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
