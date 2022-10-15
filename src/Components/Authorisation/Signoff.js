import { Route } from "react-router-dom";
import CommentsList from "../../UI/CommentsList";

const Signin = (props) =>{
    <Route path="/comments">
        <CommentsList />
    </Route>
    
    return (
        <div 
        className="tab-pane fade"
        id="pills-register"
        role="tabpanel"
        aria-labelledby="tab-register"
      >
        <form>
          <p className="text-center">or:</p>
          <div className="form-outline mb-4">
            <input type="text" id="registerName" className="form-control" />
            <label className="form-label" htmlFor="registerName">
              Name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" id="registerUsername" className="form-control" />
            <label className="form-label" htmlFor="registerUsername">
              Username
            </label>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="registerEmail" className="form-control" />
            <label className="form-label" htmlFor="registerEmail">
              Email
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerPassword"
              className="form-control"
            />
            <label className="form-label" htmlFor="registerPassword">
              Password
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerRepeatPassword"
              className="form-control"
            />
            <label className="form-label" htmlFor="registerRepeatPassword">
              Repeat password
            </label>
          </div>
          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              defaultValue=""
              id="registerCheck"
              defaultChecked=""
              aria-describedby="registerCheckHelpText"
            />
            <label className="form-check-label" htmlFor="registerCheck">
              I have read and agree to the terms
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-3">
            Log in
          </button>
        </form>
        </div>
    )
}

export default Signin;