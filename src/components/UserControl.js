import React, {useState} from 'react';
import WeekSchedule from './WeekSchedule';
import AddTaskForm from './AddTaskForm';

function UserControl(){
  const [addTaskForm, setAddTaskForm] = useState(false);

  const toggleTaskForm = () => {
    setAddTaskForm(!addTaskForm);
  }

  let currentPage = null;

  if(addTaskForm) {
    currentPage = <AddTaskForm onCloseAddTaskForm={toggleTaskForm}/>
  } else {
    currentPage = <WeekSchedule />
  }

  return (
    <React.Fragment>
      <div className="row text-center">
        <div className="col-2 col-xs-12 hello p-3 rounded">
          <p>Hello, user</p>
        </div>
        <div className="col-8 col-xs-12 p-3 rounded">
          <p>Weekly loader</p>
        </div>
        <div className="col-2 col-xs-12 p-3 rounded">
          <button type="button" className="btn btn-info btn-lg mt-3">Sign Out</button>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-2 col-xs-12 sidebar rounded">
          <p>SideBar</p>
          <button type="button" className="btn btn-info btn-lg mt-3" onClick={toggleTaskForm}>Add task</button>
        </div>
        <div className="col-10">
          {currentPage}
        </div>
      </div>
    </React.Fragment>
  );
}
export default UserControl