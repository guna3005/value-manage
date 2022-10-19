import React from "react";
import { NavLink } from "react-router-dom";
import Address from "../../UI/Address";
import "./AllRetailer.css";
const RetailerRender = (props) => {
  let from_dist = props.dist !== undefined;
  let from_rep = props.from_rep !== undefined;
  return (
    <tr className="tableRow" key={props.data.id}>
      <td>{props.data.id} </td>
      <td>
        {!from_dist && !from_rep && (
          <NavLink to={`/all-retailers/${props.data.id}`}>
            {props.data.name}{" "}
          </NavLink>
        )}
        {from_rep && (
          <NavLink to={`/rep-data/${props.data.id}`}>
            {props.data.name}{" "}
          </NavLink>
        )}
        {from_dist && props.data.name}
      </td>

      <td>{props.data.businessName}</td>
      <td>{props.data.owner}</td>
      <td>{props.data.phoneNumber}</td>
      <td>
        <Address address={props.data.address} />
      </td>
    </tr>
  );
};

export default RetailerRender;
