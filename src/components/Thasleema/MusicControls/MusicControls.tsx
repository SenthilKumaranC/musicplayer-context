import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { ISong, MusicPlayerContext } from "../MusicPlayer/MusicPlayer";

import "./MusicControls.css";
const MusicControls = () => {
  const { state, dispatch } = useContext(MusicPlayerContext);

  const { playlist, currentId, playingStatus: ps } = state;

  //Trigger Automatically and No
  const songMp3Path = useMemo(() => {
    const songData = playlist.find((song: ISong) => song.id === currentId);
    if (songData) {
      return songData.songPath;
    } else {
      return "";
    }
  }, [playlist, currentId]);

  const playPercentage = 0.5;

  const songRelativePath = "assets/music/";

  const playSong = useCallback(() => {
    dispatch({ type: "play" });
  }, [dispatch]);

  const pauseSong = useCallback(() => {
    dispatch({ type: "pause" });
  }, [dispatch]);

  const prevSong = useCallback(() => {
    dispatch({type:"prev"})
  },[dispatch])

  const nextSong = useCallback(() => {
    dispatch({type:"next"})
  },[dispatch])

  const audioElement = useRef<any>();

  useEffect(() => {
    if (audioElement.current) {
      if (ps === "play") {
        if (currentId > -1) audioElement.current?.play();
      } else audioElement.current?.pause();
    }
  }, [ps, currentId]);

  return (
    <div className="MusicControls">
      <div style={{ width: "250px", height: "10px", backgroundColor: "black" }}>
        <div
          style={{
            width: `${playPercentage * 100}%`,
            height: "100%",
            backgroundColor: "pink",
          }}
        ></div>
      </div>

      {currentId !== -1 && (
        <audio
          ref={audioElement}
          src={`${songRelativePath}${songMp3Path}`}
        ></audio>
      )}
      <button onClick={prevSong}>Prev</button>
      {ps === "play" && <button onClick={pauseSong}>pause</button>}
      {ps === "pause" && <button onClick={playSong}>play</button>}
      <button onClick={nextSong}>Next</button>
    </div>
  );
};

export default MusicControls;
