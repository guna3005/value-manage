import React from "react";
import './ErrorModal.css'

const ErrorModal = (props) => {
    const errorOkHandler = () =>{
        props.onOk()
    }
  return (
    <div className="errormodeldiv">
      <div>{props.header}</div>
      <div>{props.body}</div>
      <div>
        <button
          type="button"
          className="btn btn-primary "
          onClick={errorOkHandler}

        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
