import React from 'react';
import PropTypes from "prop-types";

function Task(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTaskClicked(props.task.id)} className="rounded border-secondary">
        <p>{props.task.name}</p>
      </div>
    </React.Fragment>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  whenTaskClicked: PropTypes.func
};

export default Task