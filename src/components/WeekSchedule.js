import React from 'react';
import WeekDay from './WeekDay';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function WeekSchedule(props){

  useFirestoreConnect([
    { collection: 'tasks' }
  ]);

  const allTasks = useSelector(state => state.firestore.ordered.tasks);

  const tasks = allTasks ? allTasks.filter(task => task.userId === props.userId) : [];

  const getTasksForDay = (dayName) => {
    let tasksForDay = [];
    tasks.forEach(task => {
      if (task.day === dayName) {
        tasksForDay.push(task);
      }
    });
    return tasksForDay;
  }

  if (isLoaded(tasks) && !isEmpty(tasks)) {
    return (
      <React.Fragment>
      <div className="row text-center">
        {props.weekDays.map((weekday, index) =>
          <WeekDay day={weekday} key={index} tasks={getTasksForDay(weekday)} color={props.colors[index]} whenTaskClicked = {props.onTaskSelection}/>
        )}
      </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <div className="row text-center">
        {props.weekDays.map((weekday, index) =>
          <WeekDay day={weekday} key={index} color={props.colors[index]} tasks={[]}/>
        )}
      </div>
      </React.Fragment>
    );
  }
}

WeekSchedule.propTypes = {
  colors: PropTypes.array,
  onTaskSelection: PropTypes.func,
  weekDays: PropTypes.array,
  userId: PropTypes.string
};

export default WeekSchedule