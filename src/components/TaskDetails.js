import React from 'react';
import PropTypes from "prop-types";

function TaskDetail(props){
  return (
    <React.Fragment>
        <p>{props.task}</p>
        <p>{props.startTime}</p>
        <button type='button'>Edit</button>
        <button type='button'>Done</button>
        <button type='button'>Delete</button>
    </React.Fragment>
  );
}

TaskDetail.propTypes = {
  task: PropTypes.string,
  startTime: PropTypes.string
};
export default TaskDetail