import React, {useState} from 'react';
import WeekSchedule from './WeekSchedule';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import TaskDetail from './TaskDetails';
import ApiSticker from './ApiSticker';
import { withFirestore } from 'react-redux-firebase';

function UserControl(props){
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const colors = ["red", "orange", "yellow", "green", "light-blue", "blue", "purple"];

  const [addTaskForm, setAddTaskForm] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const toggleAddTaskForm = () => {
    setAddTaskForm(!addTaskForm);
    setSelectedTask(null);
    setEditTaskForm(false);
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
        isDone: task.get("isDone"),
        id: task.id
      }
      setSelectedTask(firestoreTask);
    });    
  }

  const handleDeletingTask = (id) => {
    props.firestore.delete({collection: 'tasks', doc: id});
    setSelectedTask(null);
  }

  const getRandomColorIndex = () => {
    return Math.floor(Math.random() * Math.floor(colors.length));
  }

  let todayIndex = new Date().getDay();
  let today = todayIndex === 0 ? weekDays[6] : weekDays[todayIndex-1]

  let currentPage = null;

  if(editTaskForm) {
    currentPage = <EditTaskForm task = {selectedTask} onEditTask = {handleEditingTaskInList} onCloseEditTaskForm = {toggleEditTaskForm} />
  } else if (selectedTask) {
    currentPage = <TaskDetail task = {selectedTask} onClickingEdit = {toggleEditTaskForm} onCloseTaskDetail = {toggleTaskDetail} onClickingDelete = {handleDeletingTask} />
  } else if (addTaskForm) {
    currentPage = <AddTaskForm onCloseAddTaskForm={toggleAddTaskForm} onNewTaskCreation={handleAddingNewTask} />
  } else {
    currentPage = <WeekSchedule onTaskSelection={handleChangingSelectedTask} weekDays = {weekDays} colors = {colors}/>
  }

  return (
    <React.Fragment>
      <div className="row text-center">
        <div className="col-md-2 col-xs-12 col-sm-6 order-md-1 order-sm-1 hello p-3 border-right border-bottom border-info light-background">
          <h2>Name</h2>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 order-md-1 order-sm-2 p-3 border-bottom border-info light-background">
          <h2>Today: {today}</h2>
        </div>
        <div className="col-md-2 col-xs-12  col-sm-6 order-sm-1 p-3 border-bottom border-info light-background">
          <button type="button" className="btn btn-info btn-lg">Sign Out</button>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-2 col-sm-12 col-xs-12 sidebar border-right border-bottom border-info light-background">
          <button type="button" className="btn btn-info btn-lg mt-3 mb-3" onClick={toggleAddTaskForm}>Add task</button>
          <ApiSticker />
        </div>
        <div className={"col-md-10 " + colors[getRandomColorIndex()]}>
          {currentPage}
        </div>
      </div>
    </React.Fragment>
  );
}
export default withFirestore(UserControl);