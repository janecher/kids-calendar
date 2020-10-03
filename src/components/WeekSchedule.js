import React from 'react';
import WeekDay from './WeekDay';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function WeekSchedule(props){
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  useFirestoreConnect([
    { collection: 'tasks' }
  ]);

  const tasks = useSelector(state => state.firestore.ordered.tasks);

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
      <div className="row text-center rounded">
        {weekDays.map((weekday, index) =>
          <WeekDay day={weekday} key={index} tasks={getTasksForDay(weekday)} whenTaskClicked = {props.onTaskSelection}/>
        )}
      </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <div className="row text-center rounded">
        {weekDays.map((weekday, index) =>
          <WeekDay day={weekday} key={index} tasks={[]}/>
        )}
      </div>
      </React.Fragment>
    );
  }
}

WeekSchedule.propTypes = {
  tasks: PropTypes.array,
  onTaskSelection: PropTypes.func
};

export default WeekSchedule