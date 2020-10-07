import React from 'react';
import PropTypes from "prop-types";

function Sticker(props){ 
  return (
    <React.Fragment>
      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <img src={props.url} alt="sticker"/>
      </div>
    </React.Fragment>
  );
}

Sticker.propTypes = {
  url: PropTypes.string
};

export default Sticker