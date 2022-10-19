import React from 'react'
import Report from '../../UI/Report'

const RepReport = (props) => {
  console.log(props.report);
  return (
    <div className="divwithtable">
    <table className="reqtable table table-hover">
      <thead className="thead-dark" style={{ border: "0.5px solid black" }}>
        <tr className="tableRow">
          <th>id</th>
          <th>Chemists Met</th>
          <th>Chemists Onboarded</th>
          <th>Previous Met</th>
          <th>Orders</th>
          <th>Comments</th>
        </tr>

      </thead>
      <tbody>
        {props.report.map((data,index) => <tr style={{"textAlign":"center"}}>
            <td>{index}</td>
            <td>{data["metTotal"]}</td>
            <td>{data["metNew"]}</td>
            <td>{data["metOld"]}</td>
            <td>{data["orders"]}</td>
            <td style={{"maxwidth":"30px"}}>{data["comment"]["text"]}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
  )
}

export default RepReport