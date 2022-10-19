import "./Comments.css";

const Comments = (props) => {
  return (
    <>
      <div
        className="card-body p-4 justify-content-start"
        style={{ border: "1px solid black" }}
      >
        <div className="d-flex justify-content-start">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png"
            alt="avatar"
            width={50}
            height={50}
          />
          <div>
            <p
              className="fw-bold mb-1 justify-content-center"
              style={{ textAlign: "left", marginLeft: "35px" }}
            >
              {props.name}
            </p>
            <div className="d-flex align-items-start mb-3">
              <p className="mb-0" style={{ marginLeft: "35px" }}>
                {new Date(props.date).toLocaleDateString("en-CA")}
              </p>
            </div>
            <p className="mb-0" style={{ marginLeft: "35px" }}>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
