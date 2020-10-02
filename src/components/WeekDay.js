import React from 'react';
import PropTypes from "prop-types";
import Task from './Task';

function WeekDay(props){
  return (
    <React.Fragment>
      <div className="col col-xs-12 fill rounded">
        <p className="rounded border-secondary "><strong>{props.day}</strong></p>
        <div className="tasks">
          {props.tasks.map((task, index) =>
            <Task task={task} key={index}/>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

WeekDay.propTypes = {
  day: PropTypes.string,
  tasks: PropTypes.array
};

export default WeekDay