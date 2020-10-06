import React from 'react';
import PropTypes from "prop-types";
import Sticker from './Sticker';

function StickersPage(props){

  const {stickers, onClickingStickersPageClose} = props; 

  return (
    <React.Fragment>
      <div className="p-5">
        <button type="button" onClick = {() => onClickingStickersPageClose()} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 className="text-center">Your treasurs</h4>
        <div className="row">
          {stickers.map((sticker, index) =>
            <Sticker url={sticker} key={index} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

StickersPage.propTypes = {
  stickers: PropTypes.array,
  onClickingStickersPageClose: PropTypes.func
};

export default StickersPage