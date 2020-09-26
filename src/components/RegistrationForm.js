import React from "react";
import PropTypes from "prop-types";

function RegistrationForm(props) {
  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto start-pages">
        <div className="card">
          <div className="card-body">
            <button type="button" onClick = {() => props.onCloseForm()} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title">Registration Form</h4>
            <div className="card-text">
              <form className="" onSubmit={props.formSubmissionHandler}>
                <div className="form-group">
                  <label>User Name</label>
                  <input className="form-control form-control-lg"
                    type='text'
                    name='userName'
                    required
                  />
                </div>
                <div className ="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg"
                    type='text'
                    name='name'
                    required
                  />
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
    </React.Fragment>
  );
}

RegistrationForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  onCloseForm: PropTypes.func
};

export default RegistrationForm;