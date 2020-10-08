import React from 'react';
import PropTypes from "prop-types";

function Task(props){

  const {task, whenTaskClicked} = props;

  const doneStyle = task.isDone ? "done" : "notDone"; 

  return (
    <React.Fragment>
      <div onClick = {() => whenTaskClicked(task.id)} className={"cursor-pointer rounded border border-secondary border-info text-center mb-2 p-1 task " + doneStyle}>
        {task.name}
      </div>
    </React.Fragment>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  whenTaskClicked: PropTypes.func
};

export default Task