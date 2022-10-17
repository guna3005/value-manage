import React from "react";
import { useSelector } from "react-redux";
import "../Components/Retailers/AddRetailer.css"
import './Form.css'
const Form = (props) => {
  const formSubmitHandler = () => {

  };
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
              {props.type === "update" ? <input
                // ref={nameRef}
                type="number"
              
                id="typeText"
                className="form-contorl forminputfeild"
              /> : <h6 className="forminputfeild" >{data}</h6>}
            </div>
          ))}
          <div style={{"marginLeft":"10px"}}>
          Comment :
          {props.type === "update" ? <div className="form-outline w-100 p-2">
                <textarea 
                  className="form-control"
                  id="textAreaExample"
                  rows={4}
                  style={{ background: "#fff" }}
                  defaultValue={""}
                />
            </div> : <h6 className="forminputfeild" style={{"marginTop":"0px","maxWidth":"100%"}}>comment</h6>}
            </div>
            {props.type === "update" && <button
            type="button"
            className="btn btn-primary "
            style={{"marginLeft":"200px","marginTop":"20px"}}
          >
            SAVE
          </button>
              
            }


        </form>
        
      </div>
    </div>
  );
};

export default Form;
