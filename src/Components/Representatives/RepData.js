// import { set } from "immer/dist/internal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Attendence from "../../UI/Attendence";
import Report from "../../UI/Report";
import DisplayFlex from "../Display/DisplayFlex";
import AllRetailer from "../Retailers/AllRetailer";
import RepReport from "./RepReport";
import TableList from "./TableList";
import "./RepData.css";

const RepData = () => {
  const [curPage, setCurPage] = useState("report");
  const [dates, setDates] = useState([]);
  const token = useSelector((state) => state.users.token);

  const reportOpenHandler = () => {
    setCurPage("report");
  };
  const attendanceOpenHandler = () => {
    async function fetchAttendance() {
      const response = await fetch(
        "http://192.168.29.12:8080/api/v1/representatives/attendence/all",
        {
          method: "GET",
          headers: {
            "accessToken": "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.json();
      setDates(data)
    };
    fetchAttendance();
    
    setCurPage("attendance");
  };
  const retailersOpenHandler = () => {
    setCurPage("retailers");
  };
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
          {curPage === "report" && <Report type={"show"} />}
          {curPage === "attendance" && (
            <Attendence dates={dates} type={"view"} />
          )}
          {curPage === "retailers" && <AllRetailer />}
        </div>
      </div>
    </DisplayFlex>
  );
};
export default RepData;
