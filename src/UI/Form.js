import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "../Components/Retailers/AddRetailer.css";
import "./Form.css";
const Form = (props) => {
  const token = useSelector((state) => state.users.token);
  const user = useSelector((state) => state.users.user);

  const name = useRef();
  const nameRef1 = useRef();
  const nameRef2 = useRef();
  const nameRef3 = useRef();
  const commentRef = useRef();
  const ar = [name, nameRef1, nameRef2, nameRef3];
  const [report, setRepprt] = useState(null);
  const [viewtype, setviewType] = useState(report === null);
  const   fetchReports  = useCallback( async () => {
    const response = await fetch(
      `https://valuemanage.herokuapp.com/api/v1/${
        user === "manager" ? "manager" : "representatives"
      }/report`,
      {
        method: "GET",
        headers: {
          accessToken: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let report1 = await response.json();
      setRepprt(report1);
      setviewType(false);
    }
  },[token,user])
  useEffect(() => {
    fetchReports();

    return () => {};
  }, [fetchReports]);

  const formSubmitHandler = () => {
    async function postReports() {
      const report_object = {
        metTotal: name.current.value,
        metNew: nameRef1.current.value,
        orders: nameRef3.current.value,
        metOld: nameRef2.current.value,
        text: commentRef.current.value,
      };
      await fetch(
        `https://valuemanage.herokuapp.com/api/v1/${
          user === "manager" ? "manager" : "representatives"
        }/report/new`,
        {
          method: "POST",
          body: JSON.stringify(report_object),
          headers: {
            accessToken: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
    }

    postReports();
    fetchReports();
  };
  let arr = [];

  if (user === "rep") {
    arr = [
      "Chemists met",
      "Chemists Onboarded",
      "Previous Chemists met",
      "Orders Placed",
    ];
  } else {
    arr = [
      "Distributors met",
      "Previous Distributors met",
      "Distributors Onboarded",
      "Orders Placed",
    ];
  }
  if (!viewtype) {
  }
  return (
    <div className="formflexdiv">
      <div className="formmaindiv">
        <form onSubmit={formSubmitHandler}>
          {arr.map((data, index) => (
            <div key={Math.random()} className="form-outline">
              <label className="formlabel" htmlFor="typeText">
                {data} :
              </label>
              {viewtype ? (
                <input
                  ref={ar[index]}
                  type="number"
                  id="typeText"
                  className="form-contorl forminputfeild"
                />
              ) : (
                <h6 className="forminputfeild">
                  {index === 0
                    ? report["metTotal"]
                    : index === 1
                    ? report["metNew"]
                    : index === 2
                    ? report["metOld"]
                    : report["orders"]}
                </h6>
              )}
            </div>
          ))}
          <div style={{ marginLeft: "10px" }}>
            Comment :
            {viewtype ? (
              <div className="form-outline w-100 p-2">
                <textarea
                  ref={commentRef}
                  className="form-control"
                  id="textAreaExample"
                  rows={4}
                  style={{ background: "#fff" }}
                  defaultValue={""}
                />
              </div>
            ) : (
              <h6
                className="forminputfeild"
                style={{ marginTop: "0px", maxWidth: "100%" }}
              >
                {report["comment"]["text"]}
              </h6>
            )}
          </div>
          {viewtype && (
            <button
              onClick={formSubmitHandler}
              type="button"
              className="btn btn-primary "
              style={{ marginLeft: "200px", marginTop: "20px" }}
            >
              SAVE
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
