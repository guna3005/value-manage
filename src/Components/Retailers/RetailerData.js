import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentsList from "../../UI/CommentsList";
import NavBar from "../../UI/NavBar";
import OrdersList from "../../UI/OrdersList";
import "./RetailerData.css";


const RetailerData = () => {
  const [page, setPage] = useState("comments");
  const Retailer_dummy_data = useSelector(state => state.RetailerData)
  const { retailerid } = useParams();
  let retailerdata = Retailer_dummy_data.find((data) => {
    return data.id === +retailerid;
  });
  const commentsOpenHandler = () =>{
    setPage("comments")
  }
  const orderssOpenHandler = () =>{
    setPage("orders")
  }
  return (
    <div className="retailerDiv">
      <NavBar />
      <div style={{ width: "100%" }}>
        <button type="button" className="btn btn-primary ordersdiv" onClick={commentsOpenHandler}>COMMENTS</button>
        <button type="button" className="btn btn-primary ordersdiv" onClick={orderssOpenHandler}>ORDERS</button>
        <div style={{ width: "100%" }}>
          {page === "comments" && <CommentsList data={retailerdata.comments}/>}
          {page === "orders" && <OrdersList data={retailerdata.orders} />}
        </div>
      </div>
    </div>
  );
};

export default RetailerData;
