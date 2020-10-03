import React from 'react';
import PropTypes from "prop-types";

function TaskDetail(props){

  const {task, onCloseTaskDetail, onClickingEdit, onClickingDelete} = props;

  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto start-page fill">
        <div className="card">
          <div className="card-body">
            <button type="button" onClick = {() => onCloseTaskDetail()} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title">Name: {task.name}</h4>
            <div className="card-text">
              <p>Description: {task.description}</p>
              <p>Start time: {task.startTime}</p>
              <p>End time: {task.endTime}</p>
              <button type='button' className="btn btn-info" onClick={() => onClickingEdit()}>Edit</button>
              <button type='button' className="btn btn-info">Done</button>
              <button type='button' className="btn btn-info" onClick={() => onClickingDelete(task.id)}>Delete</button>
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
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};
export default TaskDetail