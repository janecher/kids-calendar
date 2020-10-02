import React, {useState, useEffect} from 'react';
import WeekSchedule from './WeekSchedule';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import TaskDetail from './TaskDetails';

function UserControl(){
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
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

  const handleAddingNewTaskToList = (newTask) => {
    setTasks(tasks.concat(newTask));
    setAddTaskForm(false);
  }

  const handleEditingTaskInList = (taskToEdit) => {
    const editedTaskList = tasks.filter(task => task.id !== taskToEdit.id).concat(taskToEdit);
    setTasks(editedTaskList);
    setEditTaskForm(false);
    setSelectedTask(null);
  }

  const handleChangingSelectedTask = (id) => {
    const selectedTaskById = tasks.filter(task => task.id === id)[0];
    setSelectedTask(selectedTaskById);
  }

  useEffect(() => {
    console.log(tasks);
  });

  let currentPage = null;

  if(editTaskForm) {
    currentPage = <EditTaskForm task = {selectedTask} onEditTask = {handleEditingTaskInList} onCloseEditTaskForm = {toggleEditTaskForm}/>
  } else if (selectedTask) {
    currentPage = <TaskDetail task = {selectedTask} onClickingEdit = {toggleEditTaskForm} onCloseTaskDetail = {toggleTaskDetail}/>
  } else if (addTaskForm) {
    currentPage = <AddTaskForm onCloseAddTaskForm={toggleAddTaskForm} onNewTaskCreation={handleAddingNewTaskToList}/>
  } else {
    currentPage = <WeekSchedule tasks={tasks} onTaskSelection={handleChangingSelectedTask}/>
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
export default UserControl