import React, {useState} from 'react';
import WeekSchedule from './WeekSchedule';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import TaskDetail from './TaskDetails';
import { withFirestore } from 'react-redux-firebase';

function UserControl(props){
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const toggleAddTaskForm = () => {
    setAddTaskForm(!addTaskForm);
  }
  const toggleEditTaskForm = () => {
    setEditTaskForm(!editTaskForm);
  }
  const toggleTaskDetail = () => {
    setSelectedTask(null);
  }

  const handleAddingNewTask = () => {
    setAddTaskForm(false);
  }

  const handleEditingTaskInList = () => {
    setEditTaskForm(false);
    setSelectedTask(null);
  }

  const handleChangingSelectedTask = (id) => {
    props.firestore.get({collection: 'tasks', doc: id}).then((task) => {
      const firestoreTask = {
        name: task.get("name"),
        description: task.get("description"),
        startTime: task.get("startTime"), 
        endTime: task.get("endTime"),
        day: task.get("day"),
        id: task.id
      }
      setSelectedTask(firestoreTask);
    });    
  }

  let currentPage = null;

  if(editTaskForm) {
    currentPage = <EditTaskForm task = {selectedTask} onEditTask = {handleEditingTaskInList} onCloseEditTaskForm = {toggleEditTaskForm}/>
  } else if (selectedTask) {
    currentPage = <TaskDetail task = {selectedTask} onClickingEdit = {toggleEditTaskForm} onCloseTaskDetail = {toggleTaskDetail}/>
  } else if (addTaskForm) {
    currentPage = <AddTaskForm onCloseAddTaskForm={toggleAddTaskForm} onNewTaskCreation={handleAddingNewTask}/>
  } else {
    currentPage = <WeekSchedule onTaskSelection={handleChangingSelectedTask}/>
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
          <button type="button" className="btn btn-info btn-lg mt-3" onClick={toggleAddTaskForm}>Add task</button>
        </div>
        <div className="col-10">
          {currentPage}
        </div>
      </div>
    </React.Fragment>
  );
}
export default withFirestore(UserControl);