import React from 'react';
import PropTypes from "prop-types";

function SignIn(props){
  return (
    <React.Fragment>
      <div className="text-center start-pages">
        <h1 className="mt-10">Kids Schedule</h1>
        <p className="lead mb-5">You can plan it by yourself!</p>
        <div className="col-md-6 col-8 mx-auto">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="User name" aria-label="User name" />
            <div className="input-group-append">
              <button type="button" className="btn btn-info" id="signIn">Sign In</button>
            </div>
          </div>
        </div>
        <button type="button" onClick = {() => props.onClickingSignUp()} className="btn btn-info btn-lg mt-3" id="signUp">Sign Up</button>
      </div>
      </React.Fragment> 
  );
}

SignIn.propTypes = {
  onClickingSignUp: PropTypes.func
};

export default SignIn;