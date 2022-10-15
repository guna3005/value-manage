import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RetailerDataActions } from '../Components/store/RetailerDataRedux';

const NewComments = () => {
    const inputRef = useRef();
    const disptach= useDispatch();
    const reqData = useSelector(state => state.activeMembers)
    const addCommentHandler = () =>{
        disptach(RetailerDataActions.addComment({id:reqData.retailer_id , comment : inputRef.current.value}))
    }
  return (
    <section style={{ backgroundColor: "#f8f9fa" }}>
        <label className="form-label p-2" htmlFor="textAreaExample">
                  Add New Comment
                </label>
          <div
            className="card-footer py-3 border-0"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="d-flex flex-start w-100">
            <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png"
            alt="avatar"
            width={50}
            height={50}
          />
               
              <div className="form-outline w-100">
                <textarea 
                ref={inputRef}
                  className="form-control"
                  id="textAreaExample"
                  rows={4}
                  style={{ background: "#fff" }}
                  defaultValue={""}
                />
                
              </div>
            </div>
            <div className="float-end mt-2 pt-1">
              <button type="button" onClick={addCommentHandler} className="btn btn-primary btn-sm mx-5 my-2">
                Post comment
              </button>
              <button type="button" className="btn btn-outline-primary btn-sm ">
                Cancel
              </button>
            </div>
          </div>
</section>


  )
}

export default NewComments