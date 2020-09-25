import React from 'react';
import PropTypes from "prop-types";

function WeekDay(props){
  return (
    <React.Fragment>
      <div className="col col-xs-12 fill">
        <p>{props.day}</p>
        <div className="tasks">
        </div>
      </div>
    </React.Fragment>
  );
}

WeekDay.propTypes = {
  day: PropTypes.string
};

export default WeekDay