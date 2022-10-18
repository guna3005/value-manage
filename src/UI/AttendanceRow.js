import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Attendance.css'
import { AttendanceActions } from '../Components/store/AttandanceStore'
const AttendanceRow = (props) => {
    // console.log("hello");
    const year = useSelector(state => state.attendance.year)
    const month = useSelector(state => state.attendance.month)
    const token = useSelector(state => state.users.token)
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)
    let data = null;    
    // console.log(props.dates);
    const attdata  = props.dates;
    
    const markattendanceHandler = () => {
        const attendencemark = async () =>{
            await fetch(`http://localhost:8080/api/v1/${user === "manager" ? "manager" : "representatives"}/attendance/new`,{
                method: 'POST' ,
                body : JSON.stringify({date : null}),
                headers : { 
                  'Content-Type' : 'application/json',
                  "accessToken" : "Bearer "+token,
                }
              })
        }
        attendencemark()
        // setattdata(data => [...data,new Date()])

    }
    const setclass = (no) => {
        // return "present"
        // console.log(props.arr[props.st + no],attdata);
        data = null;
        if (props.arr[props.st + no] === null){
            return 
        }
        let today = new Date()
        let today_time = today.getTime();
        let val = new Date(year,month-1,props.arr[props.st + no]);

        let curr_date = val.getTime();
        // console.log(curr_date,attdata);
        // for (const i in attdata){
        //     console.log(new Date(attdata[i].date),attdata[i],curr_date);
        // }
        const is_today = (val.getDate() === today.getDate() && val.getMonth() === today.getMonth() && val.getFullYear() === today.getFullYear())
        if(is_today){
            let index = attdata.findIndex(date => (curr_date-new Date(date.date).getTime()) < 846000)
           
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
            if (index !== -1){
                data = "T"
                return "present"
            }
            data = <button onClick={markattendanceHandler} className='todaybutton'>T</button>
            return "today"
        }
        data = props.arr[props.st + no];
        if(today_time < curr_date){
            return 
        }
        let index = attdata.findIndex(date => new Date(date.date).getTime() === curr_date)
        if (index === -1){
            return "absent"
        }
        return "present"
        
    }
console.log(attdata);
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