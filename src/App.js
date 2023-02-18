import './App.css';
import {useEffect, useState} from "react";

import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: 'Mai mult de-o viata',
      artist: 'Smiley',
      img_src: 'smiley.jpg',
      src: 'mai-mult-de-o-viata.mp3'
    },
    {
      title: 'I see fire',
      artist: 'Ed Sheran',
      img_src: 'fire.jpg',
      src: 'i-see-fire.mp3'
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentIndex + 1
      }
    })
  }, [currentIndex]);

  return (
    <div className="App">
      <Player currentSongIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
      />
    </div>
  );
}

export default App;
