import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function ChangeTheme(props) {

  const firestore = useFirestore();

  function handleChangingTheme(event) {
    event.preventDefault();
    props.onChangeTheme();
    if (props.theme) {
      const propertiesToUpdate = {
        theme: event.target.theme.value
      }
      return firestore.update({collection: 'themes', doc: props.theme.id }, propertiesToUpdate);  
    } else {
      return firestore.collection('themes').add(
        {
          theme: event.target.theme.value,
          userId: props.userId
        }
      );
    }
  }

  return (
    <React.Fragment>
      <div className="col-md-8 col-lg-6 mt-5 mx-auto fill-large">
        <div className="card">
          <div className="card-body">
            <button type="button" onClick = {() => props.onCloseThemeForm()} className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title">Choose your theme</h4>
            <div className="card-text">
              <form className="" onSubmit={handleChangingTheme}>
                <div className="form-group">
                <select className="form-control form-control-lg" name='theme'>
                    <option>Marvel</option>
                    <option>Disney</option>
                    <option>Star Wars</option>
                    <option>Pokemon</option>
                    <option>Lol Dolls</option>
                    <option>Lego</option>
                    <option>Animals</option>
                  </select>
                </div> 
                <button type='submit' className="btn btn-info">Choose theme</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ChangeTheme.propTypes = {
  onCloseThemeForm: PropTypes.func,
  onChangeTheme: PropTypes.func,
  userId: PropTypes.string,
  theme: PropTypes.object
};

export default ChangeTheme;