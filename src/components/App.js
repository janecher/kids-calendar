import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUpForm from './SignUpForm';
import UserControl from './UserControl';


function App() {
  const [signUpForm, setSignUpForm] = useState(false);

  const toggleSignUp = () => {
    setSignUpForm(!signUpForm);
  }

  let currentPage = null;

  if(signUpForm) {
    currentPage = <SignUpForm onCloseSignUpForm={toggleSignUp}/>
  } else {
    currentPage = <SignIn onClickingSignUp={toggleSignUp}/>
  }

  currentPage = <UserControl />
  return (
    <React.Fragment>
      {currentPage}
    </React.Fragment>
  );
}

export default App;