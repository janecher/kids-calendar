import React from 'react';
import PropTypes from "prop-types";
import Sticker from './Sticker';

function StickersPage(props){

  const {stickers, onClickingStickersPageClose} = props; 

  if (stickers.length !== 0) {
    return (
      <React.Fragment>
        <div className="p-5 fill">
          <button type="button" onClick = {() => onClickingStickersPageClose()} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="text-center mb-5">Your treasures</h4>
          <div className="row">
            {stickers.map((sticker, index) =>
              <Sticker url={sticker.stickerUrl} key={index} />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="p-5 fill">
          <button type="button" onClick = {() => onClickingStickersPageClose()} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="text-center">Your don't have treasures yet.</h4>
        </div>
      </React.Fragment>
    );
  }
}

StickersPage.propTypes = {
  stickers: PropTypes.array,
  onClickingStickersPageClose: PropTypes.func
};

export default StickersPage