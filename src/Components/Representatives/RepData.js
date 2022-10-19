// import { set } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Attendence from "../../UI/Attendence";
import Report from "../../UI/Report";
import DisplayFlex from "../Display/DisplayFlex";
import AllRetailer from "../Retailers/AllRetailer";
import RepReport from "./RepReport";
import TableList from "./TableList";
import "./RepData.css";
import "../Retailers/AllRetailer.css";
import { useParams } from "react-router-dom";
import RepRet from "./RepRet";
const RepData = () => {
  const [curPage, setCurPage] = useState("report");
  const [dates, setDates] = useState([]);
  const token = useSelector((state) => state.users.token);
  const {repid} = useParams();
  const [req_data,setreqData]= useState([])
  
  useEffect(() => {
    console.log("print inside useeffect");
    async function repdata() {
      const response = await fetch(
        "http://localhost:8080/api/v1/manager/representatives/"+repid,
        {
          method: "GET",
          headers: {
            "accessToken": "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const data =await  response.json();
      console.log(data);
      setreqData(data)
    };
    repdata();
  
    return () => {
      
    }
  }, [])
  const reportOpenHandler = () => {
    setCurPage("report");
  };
  const attendanceOpenHandler = () => {
    setCurPage("attendance");
  };
  const retailersOpenHandler = () => {
    setCurPage("retailers");
  };
  console.log(req_data["attendances"],req_data["reports"],req_data["retailers"]);
  return (
    <DisplayFlex>
      <div className="retailerdatadiv">
        <div className="repbuttonsclass">
          <button
            type="button"
            className="btn btn-primary"
            onClick={reportOpenHandler}
          >
            REPORTS
          </button>
          <button
            type="button"
            className="btn btn-primary "
            onClick={attendanceOpenHandler}
          >
            ATTENDANCE
          </button>
          <button
            type="button"
            className="btn btn-primary "
            onClick={retailersOpenHandler}
          >
            ASSOCIATED RETAILERS
          </button>
        </div>
        <div style={{ width: "100%" }}>
          {curPage === "report" && <RepReport report ={req_data["reports"] ? req_data["reports"] : [] } type={"show"} />}
          {curPage === "attendance" && (
            <Attendence dates={req_data["attendances"]} type={"view"} />
          )}
          {curPage === "retailers" && <RepRet retailers = {req_data["retailers"]} />}
        </div>
      </div>
    </DisplayFlex>
  );
};
export default RepData;
