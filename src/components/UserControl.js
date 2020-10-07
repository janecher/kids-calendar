import React, {useState} from 'react';
import WeekSchedule from './WeekSchedule';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import TaskDetail from './TaskDetails';
import { withFirestore, useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import StickersPage from './StickersPage';
import firebase from "firebase/app";
import SignIn from './SignIn';

function UserControl(props){

  const auth = props.firebase.auth();

  const name = auth.currentUser ? auth.currentUser.displayName : "Name";

  const userId = auth.currentUser ? auth.currentUser.uid : null;

  //array for weekday names
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  //array for weekday background styles
  const colors = ["red", "orange", "yellow", "green", "light-blue", "blue", "purple"];
  //inspire quotes
  const quotes = ["Well done!", "Good job!", "Brilliant!", "Fantastic!", "Wonderfull!", "Great job!", "Outstanding!", "Great work!", "Good work!", "Perfect!", "Excellent!"];
  
  const [quote, setQuote] = useState("");

  const showQuotes = () => {
    setQuote(quotes[getRandomNumber(quotes.length)]);
    const myShow = setInterval(() => setQuote(quotes[getRandomNumber(quotes.length)]), 10000);
    console.log(quote);
    setTimeout(() => {
      clearInterval(myShow);
      setQuote("");
    }, 10000);
  }

  //states for toggling forms and selected task
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [stickersPage, setStickersPage] = useState(false);

  //toggling form and other components
  const toggleAddTaskForm = () => {
    setAddTaskForm(true);
    setSelectedTask(null);
    setEditTaskForm(false);
    setStickersPage(false);
  }

  const closeAddTaskForm = () => {
    setAddTaskForm(false);
  }

  const toggleEditTaskForm = () => {
    setEditTaskForm(!editTaskForm);
  }

  const toggleTaskDetail = () => {
    setSelectedTask(null);
  }

  const toggleStickersPage = () => {
    setStickersPage(!stickersPage);
    setAddTaskForm(false);
    setSelectedTask(null);
    setEditTaskForm(false);
  }

  const handleAddingNewTask = () => {
    setAddTaskForm(false);
  }

  const handleEditingTaskInList = () => {
    setEditTaskForm(false);
    setSelectedTask(null);
  }

  //getting selected task data from firestore
  const handleChangingSelectedTask = (id) => {
    props.firestore.get({collection: 'tasks', doc: id}).then((task) => {
      const firestoreTask = {
        name: task.get("name"),
        description: task.get("description"),
        startTime: task.get("startTime"), 
        endTime: task.get("endTime"),
        day: task.get("day"),
        isDone: task.get("isDone"),
        id: task.id,
        userId: task.userId
      }
      setSelectedTask(firestoreTask);
    });    
  }

  //deleting selected task from firestore
  const handleDeletingTask = (id) => {
    props.firestore.delete({collection: 'tasks', doc: id});
    setSelectedTask(null);
  }

  //function for getting random index in colors array and later add this style class for components backgroud, and also to get random quote
  const getRandomNumber = (border) => {
    return Math.floor(Math.random() * Math.floor(border));
  }

  //signOut
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      window.location = 'home.html';
    }).catch(function(error) {
      alert(error.message);
    });
  }

  //calculation what is the day of the week
  let todayIndex = new Date().getDay();
  let today = todayIndex === 0 ? weekDays[6] : weekDays[todayIndex-1]

  //get stickers from FireStore
  useFirestoreConnect([
    { collection: 'stickers' }
  ]);
  
  const allStickers = useSelector(state => state.firestore.ordered.stickers);
  //get only stickers of auth user
  const stickers = allStickers ? allStickers.filter(sticker => sticker.userId === userId) : [];

  //set which component to show
  let currentPage = null;

  if(stickersPage) {
    currentPage = <StickersPage stickers = {stickers} onClickingStickersPageClose = {toggleStickersPage}/>
    // if(isLoaded(stickers) && !isEmpty(stickers)) {
    //   currentPage = <StickersPage stickers = {stickers} onClickingStickersPageClose = {toggleStickersPage}/>
    // } else {
    //   currentPage = <StickersPage stickers = {[]} onClickingStickersPageClose = {toggleStickersPage}/>
    // }
  } else if(editTaskForm) {
    currentPage = <EditTaskForm 
                    task = {selectedTask} 
                    onEditTask = {handleEditingTaskInList} 
                    onCloseEditTaskForm = {toggleEditTaskForm} />
  } else if(selectedTask) {
    currentPage = <TaskDetail 
                    task = {selectedTask} 
                    onClickingEdit = {toggleEditTaskForm} 
                    onCloseTaskDetail = {toggleTaskDetail} 
                    onClickingDelete = {handleDeletingTask} 
                    onClickingDoneQuote = {showQuotes}
                    numberOfStickers = {stickers ? stickers.length : 0} 
                    userId = {userId}
                    />
  } else if(addTaskForm) {
    currentPage = <AddTaskForm onCloseAddTaskForm={closeAddTaskForm} onNewTaskCreation={handleAddingNewTask} userId={userId}/>
  } else {
    currentPage = <WeekSchedule onTaskSelection={handleChangingSelectedTask} weekDays = {weekDays} colors = {colors} userId={userId}/>
  }

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <SignIn />
      </React.Fragment>
    )
  } 
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <React.Fragment>
        <div className="row text-center">
          <div className="col-md-2 col-xs-12 col-sm-6 order-md-1 order-sm-1 hello p-3 border-right border-bottom border-info light-background">
            <h4>{name}</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 order-md-1 order-sm-2 p-3 border-bottom border-info light-background">
            <h2>Today: <span className="pl-3">{today}</span></h2>
          </div>
          <div className="col-md-2 col-xs-12  col-sm-6 order-sm-1 p-3 border-bottom border-info light-background">
            <button type="button" onClick={doSignOut} className="btn btn-info btn-lg">Sign Out</button>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-2 col-sm-12 col-xs-12 sidebar border-right border-bottom border-info light-background">
            <button type="button" className="btn btn-info btn-lg mt-3 mb-3" onClick={toggleAddTaskForm}>Add task</button>
            <button type="button" className="btn btn-info btn-lg mt-3 mb-3" onClick={toggleStickersPage}>Treasures</button>
            <h4>{quote}</h4>
          </div>
          <div className={"col-md-10 " + colors[getRandomNumber(colors.length)]}>
            {currentPage}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withFirestore(UserControl);