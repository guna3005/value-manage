import { createSlice } from "@reduxjs/toolkit";

const Retailer_dummy_data = [
  {
    id: 1,

    comments: [
      {
        id: 1,
        name: "Retailer 1",
        text: "comment 1 on retailer 1 hi hello how are you are you fine hello hello hello naruto uzumaki",
        date: "10/10/2022",
      },
      {
        id: 2,
        name: "Retailer 1",
        text: "comment 2 on retailer 1",
        date: "20/20/2022",
      },
      {
        id: 3,
        name: "Retailer 1",
        text: "comment 3 on retailer 1",
        date: "30/30/3022",
      },
    ],
    orders: [
      {
        id: 1,
        supplierName: "supplier 1",
        productName: "product 1",
        amount: 9032,
      },
      {
        id: 2,
        supplierName: "supplier 1",
        productName: "product 2",
        amount: 99,
      },
      {
        id: 3,
        supplierName: "supplier 1",
        productName: "product 3",
        amount: 75,
      },
    ],
  },
  {
    id: 2,
    comments: [
      {
        id: 1,
        name: "Retailer 2",
        text: "comment 2 on retailer 2",
        date: "20/20/2022",
      },
      {
        id: 2,
        name: "Retailer 2",
        text: "comment 2 on retailer 2",
        date: "20/20/2022",
      },
      {
        id: 3,
        name: "Retailer 2",
        text: "comment 3 on retailer 2",
        date: "30/30/3022",
      },
    ],
    orders: [
      {
        id: 1,
        supplierName: "supplier 2",
        productName: "product 1",
        amount: 9032,
      },
      {
        id: 2,
        supplierName: "supplier 2",
        productName: "product 2",
        amount: 99,
      },
      {
        id: 3,
        supplierName: "supplier 2",
        productName: "product 3",
        amount: 75,
      },
    ],
  },
  {
    id: 3,
    comments: [
      {
        id: 1,
        name: "Retailer 3",
        text: "comment 1 on retailer 3",
        date: "30/30/2022",
      },
      {
        id: 2,
        name: "Retailer 3",
        text: "comment 2 on retailer 3",
        date: "20/20/2022",
      },
      {
        id: 3,
        name: "Retailer 3",
        text: "comment 3 on retailer 3",
        date: "30/30/3022",
      },
    ],
    orders: [
      {
        id: 1,
        supplierName: "supplier 3",
        productName: "product 1",
        amount: 9032,
      },
      {
        id: 2,
        supplierName: "supplier 3",
        productName: "product 2",
        amount: 99,
      },
      {
        id: 3,
        supplierName: "supplier 3",
        productName: "product 3",
        amount: 75,
      },
    ],
  },
  {
    id: 4,
    comments: [
      {
        id: 1,
        name: "Retailer 4",
        text: "comment1 on retailer4",
        date: "10/10/2022",
      },
      {
        id: 2,
        name: "Retailer 4",
        text: "comment 2 on retailer 4",
        date: "20/20/2022",
      },
      {
        id: 3,
        name: "Retailer 4",
        text: "comment 3 on retailer 4",
        date: "30/30/3022",
      },
    ],
    orders: [
      {
        id: 1,
        supplierName: "supplier 4",
        productName: "product 1",
        amount: 9032,
      },
      {
        id: 2,
        supplierName: "supplier 4",
        productName: "product 2",
        amount: 99,
      },
      {
        id: 3,
        supplierName: "supplier 4",
        productName: "product 3",
        amount: 75,
      },
    ],
  },
];

const RetailerDataSlice = createSlice({
  name: "RetailerData",
  initialState: Retailer_dummy_data,
  reducers: {
    addComment(state, actions) {

      let id = actions.payload.id;

      let index = state.findIndex((element) => {
        return element.id === id;
      });

      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      const req_comment = {
        id : state[index].comments.length+ 1,
        name : state[index].comments[0].name,
        text : actions.payload.comment,
        date : today
      }

      state[index].comments.push(req_comment);
    },
    
  },
});

export const RetailerDataActions = RetailerDataSlice.actions;

export default RetailerDataSlice;
