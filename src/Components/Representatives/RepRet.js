import React from 'react'
import Address from '../../UI/Address';
import '../Retailers/AllRetailer.css';
const RepRet = (props) => {
  console.log(props.retailers);
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
        {props.retailers.map((data) => {
          return (<tr style={{"textAlign":"center"}}>
          <td>{data["id"]}</td>
          <td>{data["name"]}</td>
          <td>{data["businessName"]}</td>
          <td>{data["owner"]}</td>
          <td>{data["phoneNumber"]}</td>
          <td>{<Address  address ={data["address"]} />}</td>
          </tr>);
          
        })}
      </tbody>
    </table>
  </div>
  )
}

export default RepRet