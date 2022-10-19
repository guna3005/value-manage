import "./Attendance.css";
import AttendanceRow from "./AttendanceRow";
import { useDispatch, useSelector } from "react-redux";
import { AttendanceActions } from "../Components/store/AttandanceStore";
import { useEffect, useState } from "react";

const noDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
const Attendence = (props) => {
  const year = useSelector((state) => state.attendance.year);
  let month = useSelector((state) => state.attendance.month);
  let firstDate = new Date(year, month - 1, 0).getDay();
  let token = useSelector((state) => state.users.token);
  let user = useSelector((state) => state.users.user);
  let [dates, setDates] = useState(props.dates);
  useEffect(() => {
    let attdata = [];
    if (user === "manager" && props.type === "update") {
      async function fetchAttendance() {
        const response = await fetch(
          "https://valuemanage.herokuapp.com/api/v1/manager/attendance/all",
          {
            method: "GET",
            headers: {
              accessToken: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        attdata = await response.json();
        setDates(attdata);
      }
      fetchAttendance();
    } else if (user === "rep" && props.type === "update") {
      async function fetchAttendancerep() {
        const response = await fetch(
          "https://valuemanage.herokuapp.com/api/v1/representatives/attendence/all",
          {
            method: "GET",
            headers: {
              accessToken: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        attdata = await response.json();
        setDates(attdata);
      }
      fetchAttendancerep();
    }
    return () => {};
  }, [token,props.type,user]);
  const dispatch = useDispatch();
  const date = new Date();
  date.setMonth(month - 1);
  let noofdays = noDaysInMonth(year, month);
  let month1 = date.toLocaleString("en-US", {
    month: "long",
  });
  const arr = new Array(42).fill(null);
  for (let j = 1; j <= noofdays; j++) {
    arr[firstDate++] = j;
  }
  const decreaseMonthHandler = () => {
    dispatch(AttendanceActions.decreaseMonth());
  };
  const increaseMonthHandler = () => {
    dispatch(AttendanceActions.increaseMonth());
  };
  const decreaseYearHandler = () => {
    dispatch(AttendanceActions.decreaseYear());
  };
  const increaseYearHandler = () => {
    dispatch(AttendanceActions.increaseYear());
  };
  return (
    <div className="maindiv">
      <div className="headerdiv">
        <button
          type="button"
          onClick={decreaseMonthHandler}
          className="btn btn-primary btn-sm leftbtn btnclass"
        >
          {"<"}
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm btnclass monthbutton"
        >
          {month1}
        </button>
        <button
          type="button"
          onClick={increaseMonthHandler}
          className="btn btn-primary btn-sm btnclass"
        >
          {">"}
        </button>
        <button
          type="button"
          onClick={decreaseYearHandler}
          className="btn btn-primary btn-sm ms-5 btnclass"
        >
          {"<"}
        </button>
        <button type="button" className="btn btn-primary btn-sm btnclass">
          {year}
        </button>
        <button
          type="button"
          onClick={increaseYearHandler}
          className="btn btn-primary btn-sm btnclass"
        >
          {">"}
        </button>

        <div className="calenderdiv">
          <table className="tableclass">
            <thead className="tablehead">
              <tr>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
                <th>SUN</th>
              </tr>
            </thead>
            <tbody>
              {arr[6] != null && (
                <AttendanceRow
                  arr={arr}
                  st={0}
                  dates={dates}
                  type={props.type}
                />
              )}
              <AttendanceRow arr={arr} st={7} dates={dates} type={props.type} />
              <AttendanceRow
                arr={arr}
                st={14}
                dates={dates}
                type={props.type}
              />
              <AttendanceRow
                arr={arr}
                st={21}
                dates={dates}
                type={props.type}
              />
              <AttendanceRow
                arr={arr}
                st={28}
                dates={dates}
                type={props.type}
              />
              {arr[35] != null && <AttendanceRow arr={arr} st={35} />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
