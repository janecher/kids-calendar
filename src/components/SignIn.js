import React from 'react';
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function SignIn(){

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      window.location = 'home.html';
    }).catch(function(error) {
      alert(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="text-center start-pages">
        <h1 className="mt-10 display-3">Kids Schedule</h1>
        <p className="lead mb-5">You can plan it by yourself!</p>
        <div className="col-md-6 col-8 mx-auto">         
          <form onSubmit={doSignIn} className="input-group">
            <input type="text" name='signinEmail' className="form-control" placeholder="Email" aria-label="Email" />
            <input type="password" name='signinPassword' className="form-control" placeholder="Password" aria-label="Password" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-info" id="signIn">Sign In</button>
            </div>
          </form>          
        </div>
        <Link to="/signup"><button type="button" className="btn btn-info btn-lg mt-3" id="signUp">Sign Up</button></Link>
      </div>
      </React.Fragment> 
  );
}

export default SignIn;