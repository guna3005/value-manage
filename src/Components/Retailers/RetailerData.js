import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentsList from "../../UI/CommentsList";
import NavBar from "../../UI/NavBar";
import OrdersList from "../../UI/OrdersList";
import "./RetailerData.css";

const RetailerData = () => {
  const [page, setPage] = useState("comments");
  const { retailerid } = useParams();
  const [retailer, setRetailer] = useState([]);
  const token = useSelector((state) => state.users.token);
  useEffect(() => {
    const fetchRetailer = async () => {
      const response = await fetch(
        "https://valuemanage.herokuapp.com/api/v1/representatives/retailers/" +
          retailerid,
        {
          method: "GET",
          headers: {
            accessToken: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setRetailer(data.content);
    };
    fetchRetailer();
    return () => {};
  }, [retailerid,token]);

  const commentsOpenHandler = () => {
    setPage("comments");
  };
  const orderssOpenHandler = () => {
    setPage("orders");
  };

  let comments = retailer.length > 0 ? retailer[0].comments : false;
  let orders = retailer.length > 0 ? retailer[0].orders : false;
  return (
    <div className="retailerDiv">
      <NavBar />
      <div style={{ width: "100%" }}>
        <button
          type="button"
          className="btn btn-primary ordersdiv"
          onClick={commentsOpenHandler}
        >
          COMMENTS
        </button>
        <button
          type="button"
          className="btn btn-primary ordersdiv"
          onClick={orderssOpenHandler}
        >
          ORDERS
        </button>
        <div style={{ width: "100%" }}>
          {page === "comments" && comments && <CommentsList data={comments} />}
          {page === "orders" && orders && <OrdersList data={orders} />}
        </div>
      </div>
    </div>
  );
};

export default RetailerData;
