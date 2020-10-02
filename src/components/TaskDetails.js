import React from 'react';
import PropTypes from "prop-types";

function TaskDetail(props){
  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto start-page fill">
        <div className="card">
          <div className="card-body">
            <button type="button" onClick = {() => props.onCloseTaskDetail()} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title">{props.formHeader}</h4>
            <div className="card-text">
              <p>Name: {props.task.name}</p>
              <p>Start time: {props.task.startTime}</p>
              <p>End time: {props.task.endTime}</p>
              <button type='button' className="btn btn-info" onClick={() => props.onClickingEdit()}>Edit</button>
              <button type='button' className="btn btn-info">Done</button>
              <button type='button' className="btn btn-info">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

TaskDetail.propTypes = {
  task: PropTypes.object,
  onCloseTaskDetail: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default TaskDetail