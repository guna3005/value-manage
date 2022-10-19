import { createSlice, configureStore } from "@reduxjs/toolkit";

import currentActiveSlice from "./ActiveMembers";
import AttendanceSlice from "./AttandanceStore";

let user = localStorage.getItem("user") ? localStorage.getItem("user") : "";
let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
let in_it = { user: user, token: token };
const userSlice = createSlice({
  name: "users",
  initialState: in_it,
  reducers: {
    setUser(state, actions) {
      state.user = actions.payload;
    },
    setToken(state, actions) {
      state.token = actions.payload;
    },
  },
});
export const retailerSlice = createSlice({
  name: "retailers",
  initialState: [],
  reducers: {
    addRetailer(state, actions) {
      state.push(actions.payload);
    },
  },
});

export const Store = configureStore({
  reducer: {
    users: userSlice.reducer,
    retailers: retailerSlice.reducer,
    activeMembers: currentActiveSlice.reducer,
    attendance: AttendanceSlice.reducer,
  },
});

export const RetailerActions = retailerSlice.actions;
export const UserActions = userSlice.actions;
export default userSlice;
