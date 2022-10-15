import React from "react";
import { useSelector } from "react-redux";
import "../Components/Retailers/AddRetailer.css"
import './Form.css'
const Form = () => {
  const formSubmitHandler = () => {};
  const user = useSelector(state => state.users.user)
  let arr =[];
  if (user === "rep"){
   arr = [
    "Chemists met",
    "Chemists Onboarded",
    "Previous Chemists met",
    "Orders Placed"
  ];
}
  else {
    arr = [
        "Distributors met",
        "Previous Distributors met",
        "Distributors Onboarded",
        "Orders Placed"
    ]
}
  return (
    <div className="formflexdiv">
      <div className="formmaindiv">
        <form onSubmit={formSubmitHandler}>
          {arr.map((data) => (
            <div key={Math.random()} className="form-outline">
              <label className="formlabel" htmlFor="typeText">
                {data } :
              </label>
              <input
                // ref={nameRef}
                type="number"
                id="typeText"
                className="form-contorl forminputfeild"
              />
            </div>
          ))}
          Comment :
          <div className="form-outline w-100 p-2">
                <textarea 
                  className="form-control"
                  id="textAreaExample"
                  rows={4}
                  style={{ background: "#fff" }}
                  defaultValue={""}
                />
            </div>
        </form>
        
      </div>
    </div>
  );
};

export default Form;
