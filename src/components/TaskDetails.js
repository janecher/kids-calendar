import React from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function TaskDetail(props){

  const {task, onCloseTaskDetail, onClickingEdit, onClickingDelete} = props;

  const doneUndoneButton = task.isDone ? <button type='button' className="btn btn-success mr-1" onClick={() => onClickingUndone()}>Undone</button> : <button type='button' className="btn btn-success mr-1" onClick={() => onClickingDone()}>Done</button>

  const firestore = useFirestore();

  function onClickingDone() {
    onCloseTaskDetail();
    const propertiesToUpdate = {
      isDone: true
    }
    return firestore.update({collection: 'tasks', doc: task.id }, propertiesToUpdate)
  }

  function onClickingUndone() {
    onCloseTaskDetail();
    const propertiesToUpdate = {
      isDone: false
    }
    return firestore.update({collection: 'tasks', doc: task.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto fill">
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
              <button type='button' className="btn btn-info mr-1" onClick={() => onClickingEdit()}>Edit</button>
              {doneUndoneButton}
              {/* <button type='button' className="btn btn-success mr-1" onClick={() => onClickingDone()}>Done</button> */}
              <button type='button' className="btn btn-danger" onClick={() => onClickingDelete(task.id)}>Delete</button>
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