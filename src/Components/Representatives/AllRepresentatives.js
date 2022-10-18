import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayFlex from '../Display/DisplayFlex'
import AllRetailer from '../Retailers/AllRetailer'
import TableList from './TableList'

const AllRepresentatives = () => {
  const token = useSelector(state => state.users.token)
  const [reps, setReps] = useState([]);
  useEffect(() => {

    return () => {
      async function fetchReps() {
        const response = await fetch(
          "http://localhost:8080/api/v1/manager/representatives",
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
        setReps(data.content);
      }
      fetchReps();
    };
  }, []);
  return (
    <DisplayFlex >
         <TableList from_rep = {true} data = {reps}/>
    </DisplayFlex>
    // <AllRetailer />
  )
}

export default AllRepresentatives