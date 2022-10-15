import { createSlice } from "@reduxjs/toolkit";

let dates_present =  [
    "10/1/2022","10/2/2022","10/3/2022","10/4/2022","10/5/2022","10/6/2022","10/7/2022","10/11/2022","10/12/2022"
]

let new_dates = dates_present.map(date => new Date(date).getTime())
const  AttendanceSlice = createSlice({
    name : "attendance",
    initialState : {
        month : 10,
        year : 2022,
        present : new_dates,
        attendence_marked : false
    },
    reducers : {
        decreaseMonth(state){
            if (state.month === 1 ){
                    state.month = 12;
                    state.year -- ;
            }
            else {
                state.month --;
            }
        },
        increaseMonth(state ){
            if(state.month === 12){
                state.year ++;
                state.month = 1
            }
            else {
                state.month++;
            }
        },
        increaseYear(state){
            state.year ++ ;
        },

        decreaseYear(state){
            state.year --;
        },
        addAttendance(state){
            console.log(new Date().getTime(),new Date(2022,9,14).getTime())
            state.present.push(new Date().getTime())
            
        }
    }
})



export const AttendanceActions = AttendanceSlice.actions;

export default AttendanceSlice;