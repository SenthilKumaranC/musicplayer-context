import { useCallback, useContext, useEffect, useState } from "react";
import { MusicPlayerContext } from "../MusicPlayer/MusicPlayer";
import Song from "../Song/Song";
import "./PlayList.css";

export interface ISong {
  id: number;
  songTitle: string;
  songPath: string;
  coverPhoto: string;
}
const PlayList = () => {
  const {
    state, dispatch
  } = useContext(MusicPlayerContext);


  const [serverError,setServerError] = useState(false);

  const {playlist} = state;

  return (
    <div className="PlayList">
      <button style={{backgroundColor:"orange"}}>Shuffle Songs</button>
      {serverError && <span style={{fontSize:"30px",color:"red",backgroundColor:"white"}}>Please Start Server</span>}
      {playlist?.map((song: ISong) => {
        return (
          <Song
            key={song.id}
            {...song}
          ></Song>
        );
      })}
    </div>
  );
};

export default PlayList;
