import React from "react";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function SignUpForm() {

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredentials => {
      console.log(userCredentials.user);
      if(userCredentials.user){
        userCredentials.user.updateProfile({displayName: name});
      }
    }).then(function(){
      window.location = 'home.html';
    }).catch(function(error) {
      alert(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="start-pages">
        <div className="col-md-8 col-lg-6 mt-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <Link to="/signin">
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </Link>
              <h4 className="card-title">Registration Form</h4>
              <div className="card-text">
                <form className="" onSubmit={doSignUp}>
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control form-control-lg"
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className ="form-group">
                    <label>Email</label>
                    <input className="form-control form-control-lg"
                      type='text'
                      name='email'
                      required
                    />
                  </div>
                  <div className ="form-group">
                    <label>Password</label>
                    <input className="form-control form-control-lg"
                      type='password'
                      name='password'
                      required
                    />
                  </div>
                  <button type='submit' className="btn btn-info">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUpForm;