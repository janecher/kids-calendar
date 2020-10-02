import React from "react";
import PropTypes from "prop-types";

function AddTaskForm(props) {
  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto start-page fill">
        <div className="card">
          <div className="card-body">
            <button type="button" onClick = {() => props.onCloseAddTaskForm()} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title">{props.formHeader}</h4>
            <div className="card-text">
              <form className="" onSubmit={props.formSubmissionHandler}>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg"
                    type='text'
                    name='name'
                    required
                  />
                </div>
                <div className ="form-group">
                  <label>Time</label>
                  <input className="form-control form-control-lg"
                    type="time"
                    name="time"
                    min="09:00" 
                    max="18:00" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Day</label>
                  <select class="form-control form-control-lg">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </div>
                <button type='submit' className="btn btn-info">Add Task</button>
              </form>
            </div>
          </div>
        </div>
			</div>
    </React.Fragment>
  );
}

AddTaskForm.propTypes = {
  onCloseAddTaskForm: PropTypes.func
};

export default AddTaskForm;