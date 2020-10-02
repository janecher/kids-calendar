import React from 'react';
import WeekDay from './WeekDay';
import PropTypes from "prop-types";

function WeekSchedule(props){
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const getTasksForDay = (dayName) => {
    let tasksForDay = [];
    props.tasks.forEach(task => {
      if (task.day === dayName) {
        tasksForDay.push(task);
      }
    });
    return tasksForDay;
  }

  return (
    <React.Fragment>
      <div className="row text-center rounded">
        {weekDays.map((weekday, index) =>
          <WeekDay day={weekday} key={index} tasks={getTasksForDay(weekday)} whenTaskClicked = {props.onTaskSelection}/>
        )}
      </div>
      </React.Fragment>
  );
}

WeekSchedule.propTypes = {
  tasks: PropTypes.array,
  onTaskSelection: PropTypes.func
};

export default WeekSchedule