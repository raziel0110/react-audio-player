import PropTypes from "prop-types";

const PlayerController = (props) => {
  return (
    <div className="c-player-controls">
      <button className="skip-btn" onClick={() => props.skipSong(false)}>
        <i className="fa-solid fa-backward"></i>
      </button>
      <button className="play-btn" onClick={props.onPlay}>
        <i className={`fa-solid ${props.isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </button>
      <button className="skip-btn" onClick={props.skipSong}>
        <i className="fa-solid fa-forward"></i>
      </button>
    </div>
  )
}

PlayerController.propTypes = {
  onPlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  skipSong: PropTypes.func
}

export default PlayerController;