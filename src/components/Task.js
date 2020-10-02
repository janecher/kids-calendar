import React from 'react';
import PropTypes from "prop-types";

function Task(props){
  return (
    <React.Fragment>
      <div>
        <p>{props.task.name}</p>
      </div>
    </React.Fragment>
  );
}

Task.propTypes = {
  task: PropTypes.object
};

export default Task