import React, { useState } from "react";
import NavBar from "../../UI/NavBar";
import "./AddRetailer.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
const AddRetailer = () => {
  const nameRef = useRef();
  const businessnameref = useRef();
  const ownerRef = useRef();
  const phoneNoRef = useRef();
  const houseNoRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const pinCodeRef = useRef();
  const stateRef = useRef();
  const retailersData = useSelector((state) => state.retailers);
  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);
  const ERPRef = useRef();
  const [inputEmptyError, setinputEptyError] = useState(false);
  const formSubmitHandler = (event) => {
    let userDataObject = {
      id: retailersData.length + 1,
      name: nameRef.current.value,
      businessName: businessnameref.current.value,
      phoneNumber: phoneNoRef.current.value,
      owner: ownerRef.current.value,
      houseNo: houseNoRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      pinCode: pinCodeRef.current.value,
      state: stateRef.current.value,
    };
    if (user === "rep") {
      event.preventDefault();

      for (const i in userDataObject) {
        if (userDataObject[i].length === 0) {
          setinputEptyError(true);
          return;
        }
      }
      if (inputEmptyError === true) {
        setinputEptyError(false);
      }
      const postNewRetailer = async () => {
        await fetch(
          "https://valuemanage.herokuapp.com/api/v1/representatives/retailers/new",
          {
            method: "POST",
            body: JSON.stringify(userDataObject),
            headers: {
              accessToken: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
      };
      postNewRetailer();
    }
    if (user === "manager") {
      userDataObject = { ...userDataObject, ERP: ERPRef.current.value };
      event.preventDefault();

      for (const i in userDataObject) {
        if (userDataObject[i].length === 0) {
          setinputEptyError(true);
          return;
        }
      }
      if (inputEmptyError === true) {
        setinputEptyError(false);
      }
      const postNewRetailer = async () => {
        await fetch(
          "https://valuemanage.herokuapp.com/api/v1/manager/distributors/new",
          {
            method: "POST",
            body: JSON.stringify(userDataObject),
            headers: {
              accessToken: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
      };
      postNewRetailer();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div className="flexdiv">
        <div className="maindiv1">
          <form onSubmit={formSubmitHandler}>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                Name :
              </label>
              <input
                ref={nameRef}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                Business Name :
              </label>
              <input
                ref={businessnameref}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                Owner :
              </label>
              <input
                ref={ownerRef}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            {user === "manager" && (
              <div className="form-outline">
                <label className="form-label" htmlFor="typeText">
                  ERP :
                </label>
                <input
                  ref={ERPRef}
                  type="text"
                  id="typeText"
                  className="form-contorl inputfeild"
                />
              </div>
            )}
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                Phone No :
              </label>
              <input
                ref={phoneNoRef}
                type="number"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                House Number :
              </label>
              <input
                ref={houseNoRef}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                Street :
              </label>
              <input
                ref={streetRef}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                City :
              </label>
              <input
                ref={cityRef}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                Pin Code :
              </label>
              <input
                ref={pinCodeRef}
                type="number"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeText">
                State :
              </label>
              <input
                ref={stateRef}
                type="text"
                id="typeText"
                className="form-contorl inputfeild"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary button">
                Submit
              </button>
            </div>
            {inputEmptyError && (
              <p style={{ marginLeft: "120px", color: "red", padding: "20px" }}>
                Please Fill All Feilds
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRetailer;
