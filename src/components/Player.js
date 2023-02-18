import React, {useEffect, useState, useRef} from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import PropTypes from "prop-types";

const Player = ({currentSongIndex, setCurrentIndex, nextSongIndex, songs}) => {
  const audio = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const nextSong = songs[nextSongIndex];


  useEffect(() => {
    const audio = songs[currentSongIndex];
    if (audio) {
      import('../music/' + audio.src).then(file => {
        setAudioFile(file.default)
      });
    }
  }, [currentSongIndex])

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  });

  const skipSong = (forward = true) => {
    if (forward) {
      setCurrentIndex(() => {
        currentSongIndex++;

        if (currentSongIndex > songs.length - 1) {
          return 0;
        }

        return currentSongIndex;
      })
    } else {
      setCurrentIndex(() => {
        currentSongIndex--;

        if (currentSongIndex < 0) {
          return songs.length - 1;
        }

        return currentSongIndex;
      })
    }
  }

  const onPlay = () => {
    audio.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="c-player">
      <audio ref={audio} src={audioFile}></audio>
      <h4>Playing now</h4>
      <PlayerDetails song={songs[currentSongIndex]}/>
      <PlayerController onPlay={onPlay} isPlaying={isPlaying} skipSong={skipSong} />
      <p><strong>Next up:</strong> {nextSong.title} by {nextSong.artist}</p>
    </div>
  );
}

Player.propTypes = {
  currentSongIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
  nextSongIndex: PropTypes.number,
  songs: PropTypes.array
}

export default Player