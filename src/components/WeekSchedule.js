import React from 'react';
import WeekDay from './WeekDay'

function WeekSchedule(){
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <React.Fragment>
      <div className="row text-center">
        {weekDays.map((weekday) =>
          <WeekDay day={weekday} />
        )}
      </div>
      </React.Fragment>
  );
}
export default WeekSchedule