import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comments from "./Comments";
import NewComments from "./NewComments";
const CommentsList = (props) => {

  // const [content, setContent] = useState([]);

  
  
  return (
    <div className="App"  >
      <section style={{ backgroundColor:" #bdddff"}}>
        <div className="container my-5 py-5" >
          <div className="row d-flex justify-content-center" >
            <div className="col-md-12 col-lg-10" >
              <div className="card text-dark" style={{ backgroundColor: "white" }}>
                <h4 className="mb-0  p-4" >Recent comments</h4>
                {props.data.map((data) => {
                  return (
                    <Comments
                      key={data.id}
                      date={data.date}
                      text={data.text}
                      name={data.name}
                      id={data.id}
                    />
                  );
                })}
                <NewComments />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CommentsList;
