import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import MusicControls from "../MusicControls/MusicControls";
import PlayList from "../PlayList/PlayList";
import "./MusicPlayer.css";

//START : 1) Define the structure of the data required by that feature
export type PlayingStatus = "pause" | "play";

export interface ISong {
  id: number;
  songTitle: string;
  songPath: string;
  coverPhoto: string;
}

export interface IMusicPlayer {
  playlist: ISong[];
  currentId: number;
  playingStatus: PlayingStatus;
}
//END : 1) Define the structure of the data required by that feature

//START : 2) Provide Initial State
const initialState: IMusicPlayer = {
  playlist: [],
  currentId: -1,
  playingStatus: "pause",
};
//END : 2) Provide Initial State

//START : 3) Add Reducer function to modify state based on action
const reducer = (state: IMusicPlayer, action: any) => {
  const newState = { ...state };
  if (action.type === "updatePlaylist") {
    newState.playlist = action.playlist;
    return newState;
  }
  if (action.type === "play") {
    if(newState.currentId===-1){
        newState.currentId = newState.playlist[0].id;
    }
    newState.playingStatus="play";
    return newState;
  }
  if (action.type === "pause") {
    newState.playingStatus="pause";
    return newState;
  }
  return state;
};
//END : 3) Add Reducer function to modify state based on action

export const MusicPlayerContext = createContext<any>({
  state: initialState,
  dispatch: (data: any) => {
    console.log("dummy call")
  },
});

const MusicPlayer = () => {
  // 4) Connect initial state and reducer using hook - useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadPlayList = async () => {
      try {
        const { data: playlist } = await axios.get(
          "http://localhost:4444/playlist"
        );
        dispatch({ type: "updatePlaylist" ,playlist });
        console.log(playlist);
      } catch (e) {
        //setServerError(true)
      }
    };
    loadPlayList();
  }, []);

  return (
    <MusicPlayerContext.Provider value={{state,dispatch}}>
      <div>Senthil Kumaran Music Player</div>
      <PlayList></PlayList>
      <MusicControls/>
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayer;
