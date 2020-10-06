import React from "react";
import PropTypes from "prop-types";

function SignUpForm(props) {
  return (
    <React.Fragment>
      <div className="start-pages">
        <div className="col-md-8 col-lg-6 mt-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <button type="button" onClick = {() => props.onCloseSignUpForm()} className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="card-title">Registration Form</h4>
              <div className="card-text">
                <form className="" onSubmit={props.formSubmissionHandler}>
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
                  <div className="form-group">
                    <label>Theme</label>
                    <select class="form-control form-control-lg">
                      <option>Marvel</option>
                      <option>Disney</option>
                      <option>Star Wars</option>
                      <option>Pokemon</option>
                      <option>Lol Dolls</option>
                      <option>Lego</option>
                      <option>Animals</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Grade</label>
                    <select class="form-control form-control-lg">
                      <option>K</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
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

SignUpForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  onCloseSignUpForm: PropTypes.func
};

export default SignUpForm;