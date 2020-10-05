import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

function ApiSticker(){

  const [sticker, setSticker] = useState(null);

  const makeApiCall = () => {
    fetch(`http://api.giphy.com/v1/stickers/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=disney&rating=g&limit=2`)
    .then(response => {console.log(response); return response.json()})
    .then(data => {
        console.log(data);
        setSticker(data);
      })
  } 

  makeApiCall();

  // useEffect(() => {
  //   makeApiCall();
  //   console.log(sticker);
  // });

  const src = sticker ? sticker.data[0].images.fixed_width_small.url : null

  return (
    <React.Fragment>
      <div className="">
        <img src={src} alt="disney"/>
      </div>
    </React.Fragment>
  );
}

ApiSticker.propTypes = {

};

export default ApiSticker