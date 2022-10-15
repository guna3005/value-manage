import { createSlice, configureStore } from "@reduxjs/toolkit";

import RetailerDataSlice from "./RetailerDataRedux";
import currentActiveSlice from "./ActiveMembers";
import AttendanceSlice from "./AttandanceStore";

const userSlice = createSlice({
  name: "users",
  initialState: { user:"rep"},
  reducers: {
    setUser(state, actions) {
      state.user = actions.payload;
    },
  },
});

const Fake_retailers = [
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  },
  {
    id: 2,
    name: "Retailer 2",
    businessName: "business name 2",
    phoneNo: "8432098094",
    owner: "owner 2",
    address: {
      id: 2,
      houseNo: "2-20-9",
      street: "street 2",
      city: "city 2",
      pinCode: "pincode 2",
      state: "state 2",
    },
  },
  {
    id: 3,
    name: "Retailer 3",
    businessName: "business name 3",
    phoneNo: "8432098094",
    owner: "owner 3",
    address: {
      id: 3,
      houseNo: "2-30-9",
      street: "street 3",
      city: "city 3",
      pinCode: "pincode 3",
      state: "state 3",
    },
  },
  {
    id: 4,
    name: "Retailer 4",
    businessName: "business name 4",
    phoneNo: "8432098094",
    owner: "owner 4",
    address: {
      id: 4,
      houseNo: "2-40-9",
      street: "street 4",
      city: "city 4",
      pinCode: "pincode 4",
      state: "state 4",
    },
  },
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  },
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  },
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  },
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  },
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  },
  {
    id: 1,
    name: "Retailer 1",
    businessName: "business name 1",
    phoneNo: "8432098094",
    owner: "owner 1",
    address: {
      id: 1,
      houseNo: "2-10-9",
      street: "street 1",
      city: "city 1",
      pinCode: "pincode 1",
      state: "state 1",
    },
  }
];
export const retailerSlice = createSlice({
  name: "retailers",
  initialState: Fake_retailers,
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
    RetailerData: RetailerDataSlice.reducer,
    activeMembers: currentActiveSlice.reducer,
    attendance: AttendanceSlice.reducer
  },
});

export const RetailerActions = retailerSlice.actions;
export const UserActions = userSlice.actions;
export default userSlice;
