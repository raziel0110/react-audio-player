import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

const PlayerDetails = ({song}) => {
  const [picture, setPicture] = useState(null)

  useEffect(() => {
    import("../images/" + song.img_src).then((image) => {
      setPicture(image.default);
    });
  }, [song.img_src]);


  return (
    <div className="c-player-details">
      <div className="details-img">
        <img src={picture} alt="" />
      </div>
      <h3 className="details-title">
        {song.title}
      </h3>
      <h4 className="details-artist">{song.artist  }</h4>
    </div>
  )
}

PlayerDetails.propType ={
  song: PropTypes.object
}

export default PlayerDetails;