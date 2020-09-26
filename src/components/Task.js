import React from 'react';
import PropTypes from "prop-types";

function Task(props){
  return (
    <React.Fragment>
      <div>
        <p>{props.startTime} - {props.task}</p>
      </div>
    </React.Fragment>
  );
}

TaskDetail.propTypes = {
  task: PropTypes.string,
  startTime: PropTypes.string
};

export default Task