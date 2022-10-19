import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import NewComments from "./NewComments";
const CommentsList = (props) => {
  const { retailerid } = useParams();
  const [comments, setComments] = useState(props.data);
  const token = useSelector((state) => state.users.token);
  const addCommentHandler = (comment) => {
    const addComment = async () => {
      await fetch(
        "https://valuemanage.herokuapp.com/api/v1/representatives/comment/" +
          retailerid,
        {
          method: "POST",
          headers: {
            accessToken: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: comment }),
        }
      );
    };
    addComment();
    setComments((state) => {
      return [
        ...state,
        { text: comment, date: new Date().toLocaleDateString("en-CA") },
      ];
    });
  };
  return (
    <div className="App">
      <section style={{ backgroundColor: " #bdddff" }}>
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div
                className="card text-dark"
                style={{ backgroundColor: "white" }}
              >
                <h4 className="mb-0  p-4">Recent comments</h4>
                {comments.map((data) => {
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
                <NewComments fun={addCommentHandler} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentsList;
