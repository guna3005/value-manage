import React, { useEffect, useState } from "react";
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
  let retailer = useSelector(state => state.activeMembers.retailer_id)
  const [data,setData ] = useState([]);
  const [orders,setOrders] = useState([])
  // retailer = "1";
  console.log(retailer);
  // console.log("http://192.168.29.12:8080/api/v1/representatives/1/retailers/" + retailer.toString());
  useEffect(() => {
    return () => {
      async function fetchRetailers() {
        const response = await fetch(
          "http://192.168.29.12:8080/api/v1/representatives/1/retailers/" + retailer.toString()
        );
        let data_new = await response.json();
        console.log(data_new.content);
        // setData(data_new[0]);
        console.log(data_new.content[0].comments);
        setData(data_new.content[0].comments)
        setOrders(data_new.content[0].orders)
      }
      fetchRetailers();
    };
  }, []);
  return (
    <div className="retailerDiv">
      <NavBar />
      <div style={{ width: "100%" }}>
        <button type="button" className="btn btn-primary ordersdiv" onClick={commentsOpenHandler}>COMMENTS</button>
        <button type="button" className="btn btn-primary ordersdiv" onClick={orderssOpenHandler}>ORDERS</button>
        <div style={{ width: "100%" }}>
          {page === "comments" && <CommentsList data={data}/>}
          {page === "orders" && <OrdersList data={orders} />}
        </div>
      </div>
    </div>
  );
};

export default RetailerData;
