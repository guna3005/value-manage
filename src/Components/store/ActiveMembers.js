import { createSlice } from "@reduxjs/toolkit";

const Initial_active = {
  retailer_id: "",
  representative_id: "",
};

const currentActiveSlice = createSlice({
  name: "activeMembers",
  initialState: Initial_active,
  reducers: {
    changeRetailer(state, actions) {
      state.retailer_id = actions.payload;
    },
    changeRep(state, actions) {
      state.representative_id = actions.payload;
    },
  },
});

export const CurrentActiveActions = currentActiveSlice.actions;

export default currentActiveSlice;
