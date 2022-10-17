import React from 'react'
import DisplayFlex from '../Display/DisplayFlex'
import AllRetailer from '../Retailers/AllRetailer'
import TableList from './TableList'

const AllRepresentatives = () => {
  return (
    <DisplayFlex >
         <TableList from_rep = {true}/>
    </DisplayFlex>
    // <AllRetailer />
  )
}

export default AllRepresentatives