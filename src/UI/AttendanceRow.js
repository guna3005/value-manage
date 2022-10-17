import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Attendance.css'
import { AttendanceActions } from '../Components/store/AttandanceStore'
const AttendanceRow = (props) => {
    // 
    // const dates = useSelector(state => state.attendance.present)
    
    const year = useSelector(state => state.attendance.year)
    const month = useSelector(state => state.attendance.month)
    const token = useSelector(state => state.users.token)
    // const mark_attendance = useSelector(state => state.attendance.attendence_marked)
    const dispatch = useDispatch()
    const [dates, setDates] = useState([])
    let data = null;
    console.log(dates);

    const markattendanceHandler = () => {
        fetch("http://192.168.29.12:8080/api/v1/representatives/attendance/new",{
        method: 'POST' ,
        body : JSON.stringify({date : null}),
        headers : { 
          'Content-Type' : 'application/json',
          "accessToken" : "Bearer "+token,
        }
      })
        dispatch(AttendanceActions.addAttendance())
    }
    const setclass = (no) => {
        data = null;
        if (props.arr[props.st + no] === null){
            return 
        }
        let today = new Date()
        let today_time = today.getTime();
        let val = new Date(year,month-1,props.arr[props.st + no]);

        let curr_date = val.getTime();
        const is_today = (val.getDate() === today.getDate() && val.getMonth() === today.getMonth() && val.getFullYear() === today.getFullYear())
        if(is_today){
            let index = dates.findIndex(date => curr_date-date <846000)
           
            if(props.type === "view"){
                if (index !== -1){
                    data = "T"
                    return "present"
                }
                else{
                    data = "T"
                    return "absent"
                }
            }
            data = <button onClick={markattendanceHandler} className='todaybutton'>T</button>
            return "today"
        }
        data = props.arr[props.st + no];
        if(today_time < curr_date){
            return 
        }
        
        let index = dates.findIndex(date => date === curr_date)
        if (index === -1){
            return "absent"
        }
        return "present"
        
    }

  return (
    <tr className='dateboxes'>
        <td className={setclass(0)}>{data}</td>
        <td className={setclass(1)}>{data}</td>
        <td className={setclass(2)}>{data}</td>
        <td className={setclass(3)}>{data}</td>
        <td className={setclass(4)}>{data}</td>
        <td className={setclass(5)}>{data}</td>
        <td className={setclass(6)}>{data}</td>
    </tr> )
}

export default AttendanceRow