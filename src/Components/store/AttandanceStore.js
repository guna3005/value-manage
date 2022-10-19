import { createSlice } from "@reduxjs/toolkit";

const AttendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    month: 10,
    year: 2022,
    present: [],
    attendence_marked: false,
  },
  reducers: {
    decreaseMonth(state) {
      if (state.month === 1) {
        state.month = 12;
        state.year--;
      } else {
        state.month--;
      }
    },
    increaseMonth(state) {
      if (state.month === 12) {
        state.year++;
        state.month = 1;
      } else {
        state.month++;
      }
    },
    increaseYear(state) {
      state.year++;
    },

    decreaseYear(state) {
      state.year--;
    },
  },
});

export const AttendanceActions = AttendanceSlice.actions;

export default AttendanceSlice;
