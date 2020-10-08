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
}

export default App;