import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Address from '../../UI/Address';
import { CurrentActiveActions } from '../store/ActiveMembers';
import './AllRetailer.css'
const RetailerRender = (props) => {
    const disptach = useDispatch();
  const retailerChangeHandler = () =>{
       
      disptach(CurrentActiveActions.changeRetailer(props.data.id))
  }
  // console.log(props.dist,props.dist !== null,props.dist !== undefined);
  let from_dist = props.dist !== undefined;
  return (
    <tr className="tableRow" key={props.data.id}>
                <td>{props.data.id} </td>
                <td>
                  {!from_dist && <NavLink onClick={retailerChangeHandler} to={`/all-retailers/${props.data.id}`}>
                    {props.data.name}{" "}
                  </NavLink>}
                  {from_dist &&  props.data.name}
                </td>
                <td>{props.data.businessName}</td>
                <td>{props.data.owner }</td>
                <td>{props.data.phoneNumber}</td>
                <td>
                  <Address  address={props.data.address} />
                </td>
              </tr>
  )
}

export default RetailerRender