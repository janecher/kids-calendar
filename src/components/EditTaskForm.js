import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditTaskForm(props) {

  const {task} = props;

  const firestore = useFirestore();

  function handleEditTaskFormSubmission(event) {
    event.preventDefault();
    props.onEditTask();
    const propertiesToUpdate = {
      name: event.target.name.value,
      description: event.target.description.value,
      startTime: event.target.startTime.value, 
      endTime: event.target.endTime.value,
      day: event.target.day.value
    }
    return firestore.update({collection: 'tasks', doc: task.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto start-page fill">
        <div className="card">
          <div className="card-body">
            <button type="button" onClick = {() => props.onCloseEditTaskForm()} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title">{props.formHeader}</h4>
            <div className="card-text">
              <form className="" onSubmit={handleEditTaskFormSubmission}>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg"
                    type='text'
                    name='name'
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input className="form-control form-control-lg"
                    type='text'
                    name='description'
                    required
                  />
                </div>
                <div className="row">
                  <div className ="form-group col-6">
                    <label>Start Time</label>
                    <input className="form-control form-control-lg"
                      type="time"
                      name="startTime"
                      required
                    />
                  </div>
                  <div className ="form-group col-6">
                    <label>End Time</label>
                    <input className="form-control form-control-lg"
                      type="time"
                      name="endTime"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Day</label>
                  <select className="form-control form-control-lg" name="day">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </div>
                <button type='submit' className="btn btn-info">Edit Task</button>
              </form>
            </div>
          </div>
        </div>
			</div>
    </React.Fragment>
  );
}

EditTaskForm.propTypes = {
  onCloseEditTaskForm: PropTypes.func,
  onEditTask: PropTypes.func
};

export default EditTaskForm;