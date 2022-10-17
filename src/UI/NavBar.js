import {  useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { UserActions } from "../Components/store";
import {AiFillDashboard} from 'react-icons/ai'
import {BiLogOut,BiMessageSquareAdd,BiGroup} from 'react-icons/bi'
import { BsFillCalendarCheckFill,BsFillBarChartFill,BsCircleHalf}  from 'react-icons/bs'
// import './NavBar.css'
const NavBar = (props) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const state = useSelector((state) => state);
  // console.log(user, state, " in navbar");
  const logoutHandler = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    dispatch(UserActions.setUser(""))
    history.replace("/login")
  }
  return (
    <main className="d-flex flex-nowrap" style={{"height":"100vh",backgroundColor:"#bdddff"}}>
    <div
  className="d-flex flex-column flex-shrink-0 p-3 text-dark bg-light"
  style={{ width: 280 ,backgroundColor:"lightgrey"}}
>
  <NavLink to="/dashboard" activeClassName="active"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
  >
    <BsCircleHalf  className="bi me-2" width={500} height={500}/>
    <span className="fs-4">VALUE MANAGE</span>
  </NavLink>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li>
      <NavLink to="/dashboard" activeClassName="active" className="nav-link text-dark">
      <AiFillDashboard className="bi me-2" width={40} height={32}/>
        Dashboard
      </NavLink>
    </li>
    {user === "rep" && 
     <>
     <li>
      <NavLink to="/all-retailers" activeClassName="active" className="nav-link text-dark">
        <BiGroup className="bi me-2" width={16} height={16} />

        All Retailers
      </NavLink>
    </li>
    <li>
      <NavLink to="/add-retailer" activeClassName="active" className="nav-link text-dark">
        <BiMessageSquareAdd className="bi me-2" width={16} height={16}/>
        Add Retailer
      </NavLink>
    </li></>}

    {user === "manager" && 
     <>
     <li>
      <NavLink to="/all-representatives" activeClassName="active" className="nav-link text-dark">
        <BiGroup className="bi me-2" width={16} height={16} />

        All Representatives
      </NavLink>
    </li>
    <li>
      <NavLink to="/all-distributors" activeClassName="active" className="nav-link text-dark">
        <BiGroup className="bi me-2" width={16} height={16} />

        All distributors
      </NavLink>
    </li>
    <li>
      <NavLink to="/add-distributor" activeClassName="active" className="nav-link text-dark">
        <BiMessageSquareAdd className="bi me-2" width={16} height={16}/>
        Add distributors
      </NavLink>
    </li></>
    }
    <li>
      <NavLink to="/attendence" activeClassName="active" className="nav-link text-dark">
        <BsFillCalendarCheckFill className="bi me-2" width={16} height={16} />
        Attendence
      </NavLink>
    </li>
    <li>
      <NavLink to="/report" activeClassName="active" className="nav-link text-dark">
        <BsFillBarChartFill className="bi me-2" width={16} height={16} />
        Report
      </NavLink>
    </li>
    <li>
      <button to="/" onClick={logoutHandler} className="nav-link text-dark">
      <BiLogOut className="bi me-2" width={16} height={16} />
        Log Out
      </button>
    </li>
  </ul>
  <hr />
</div>
</main>
  );
};

export default NavBar;
