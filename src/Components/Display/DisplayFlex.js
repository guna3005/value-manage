import React from 'react'
import NavBar from '../../UI/NavBar'

const DisplayFlex = (props) => {
  // console.log("hi");
  return (
    <div style={{"display":"flex"}}>
        <NavBar />
        {props.children}
    </div>
  )
}

export default DisplayFlex