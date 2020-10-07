import React from 'react';
import SignIn from './SignIn';
import SignUpForm from './SignUpForm';
import UserControl from './UserControl';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <UserControl />
        </Route>
      </Switch>
    </Router>
  );
  // const [signUpForm, setSignUpForm] = useState(false);

  // const toggleSignUp = () => {
  //   setSignUpForm(!signUpForm);
  // }

  // let currentPage = null;

  // if(signUpForm) {
  //   currentPage = <SignUpForm onCloseSignUpForm={toggleSignUp}/>
  // } else {
  //   currentPage = <SignIn onClickingSignUp={toggleSignUp}/>
  // }

  // currentPage = <UserControl />
  // return (
  //   <React.Fragment>
  //     {currentPage}
  //   </React.Fragment>
  // );
}

export default App;