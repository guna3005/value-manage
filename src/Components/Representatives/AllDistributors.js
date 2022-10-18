import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayFlex from '../Display/DisplayFlex'
import TableList from './TableList'
const AllDistributors = () => {
  const token = useSelector(state => state.users.token)
  const [distributors, setDistributors] = useState([]);
  useEffect(() => {

    return () => {
      async function fetchDistributors() {
        const response = await fetch(
          "http://localhost:8080/api/v1/manager/distributors",
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
        setDistributors(data.content);
      }
      fetchDistributors();
    };
  }, []);
    
  return (
    <DisplayFlex >
        <TableList dist={0} data = {distributors}/>
    </DisplayFlex>
  )
}

export default AllDistributors