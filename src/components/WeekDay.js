import React from 'react';
import PropTypes from "prop-types";
import Task from './Task';

function WeekDay(props){

  return (
    <React.Fragment>
      <div className={"col-md-12 col-lg fill border-right border-info weekday " + props.color}>
        <p className="rounded border-secondary border-info mt-3"><strong>{props.day}</strong></p>
        {props.tasks.map((task, index) =>
          <Task task={task} key={index} whenTaskClicked ={props.whenTaskClicked}/>
        )}
      </div>
    </React.Fragment>
  );
}

WeekDay.propTypes = {
  day: PropTypes.string,
  tasks: PropTypes.array,
  whenTaskClicked: PropTypes.func,
  color: PropTypes.string
};

export default WeekDay