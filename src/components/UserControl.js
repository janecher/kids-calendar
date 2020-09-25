import React from 'react';
import WeekSchedule from './WeekSchedule'

function UserControl(){
  return (
    <React.Fragment>
      <div className="row text-center">
        <div className="col-2 col-xs-12 hello p-5">
          <p>Hello, user</p>
        </div>
        <div className="col-8 col-xs-12 p-5">
          <p>Weekly loader</p>
        </div>
        <div className="col-2 col-xs-12 p-5">
          <button type="button" className="btn btn-info btn-lg mt-3" aria-labelledby="signUpModel" data-toggle="modal" data-target="#signUp">Sign Out</button>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-2 col-xs-12 sidebar">
          <p>SideBar</p>
        </div>
        <div className="col-10">
          <WeekSchedule />
        </div>
      </div>
    </React.Fragment>
  );
}
export default UserControl