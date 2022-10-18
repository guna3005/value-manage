import { useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserActions } from "../store";
// import NavBar from "../../UI/NavBar";
// import CommentsList from "../../UI/CommentsList";
import styles from "./Login.module.css";
import ErrorModal from "../errormodel/ErrorModal";
const Login = (props) => {
  const dispatch = useDispatch();
  const userRef = useRef("rep0");
  const passwordRef = useRef("admin");

  const [showError, setShowError] = useState(false);
  const history = useHistory();
  // useEffect(() => {
  //   dispatch(UserActions.setUser(localStorage.getItem("user")))

  // }, [dispatch])
  let error_string = "enter valid credentials";
  const dataChangeHandler = () => {
    console.log("data changed");
    setShowError(false);
  };
  const inputHandler = (event) => {
    event.preventDefault();
    if (
      userRef.current.value.trim().length === 0 ||
      passwordRef.current.value.trim().length === 0
    ) {
      if (userRef.current.value.trim().length === 0){
        error_string = "Enter Valid UserName"

      }
      else{
        error_string = "Enter Vlaid Password"
      }
      setShowError(true);
      return;
    }
    console.log("post from here");
    const authorise = async () => {
      const response = await fetch("http://localhost:8080/api/v1/auth", {
        method: "POST",

        body: JSON.stringify({
          username: userRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        setShowError(true);
        return;
      }
      const data = await response.json();
      console.log(data.role.toString().length === 7, data,data.accessToken);
      if (data.role.toString() === "MANAGER") {
        dispatch(UserActions.setUser("manager"));
        localStorage.setItem("user","manager")
      } else {
        dispatch(UserActions.setUser("rep"));
        localStorage.setItem("user","rep")
      }
      localStorage.setItem("token",data.accessToken)
      dispatch(UserActions.setToken(data.accessToken))
      history.replace("/dashboard");
    };
    authorise();
  };
  const errorOkHandler = () => {
    setShowError(false);
  };
  const classn = `form-control ${showError ? "inputerror" : ""}`;
  console.log(classn);
  return (
    <>
      <div className={styles.maindiv}>
        <div className="form-outline mb-4">
          <form onSubmit={inputHandler} className={styles.formclassininput}>
            <label className="form-label" htmlFor="loginName">
              Email or username
            </label>
            <input
              ref={userRef}
              type="text"
              id="loginName"
              className={`form-control ${showError ? "inputerror" : ""}`}
              onChange={dataChangeHandler}
            />
            <label className="form-label" htmlFor="loginPassword">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="loginPassword"
              className="form-control"
              onChange={dataChangeHandler}
            />

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              style={{ marginLeft: "43%", padding: "20x", marginTop: "20px" }}
              to="/dashboard"
            >
              Log in
            </button>
          </form>
          {showError && (
            <p style={{ textAlign: "center", color: "red" }}>
              {error_string}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
