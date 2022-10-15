import { useRef} from "react";
import { NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserActions } from "../store";
// import NavBar from "../../UI/NavBar";
// import CommentsList from "../../UI/CommentsList";
import styles from "./Login.module.css";
const Login = (props) => {
    const dispatch = useDispatch();
    const userRef = useRef();
    
// useEffect(() => {
//   dispatch(UserActions.setUser(localStorage.getItem("user")))

// }, [dispatch])

const inputHandler =() =>{
        dispatch(UserActions.setUser(userRef.current.value))
        
}
  return (
    <>
      <div className={styles.maindiv}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="loginName">
            Email or username
          </label>
          <input ref={userRef} type="email" id="loginName" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <input type="password" id="loginPassword" className="form-control" />
        </div>
        <NavLink
          type="submit"
          className="btn btn-primary btn-block mb-4"
          style={{ marginLeft: "43%", padding: "20x" }}
          onClick={inputHandler}
          to="/dashboard"
        >
          Log in
        </NavLink>
      </div>
      
    </>
  );
};

export default Login;
