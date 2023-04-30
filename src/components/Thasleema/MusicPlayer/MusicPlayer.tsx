import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import MusicControls from "../MusicControls/MusicControls";
import "./MusicPlayer.css";

//Start : 1.Define the structure of the data required by the feature
export type PlayingStatus = "play" | "pause";

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
//END : 1.Define the structure of the data required by the feature

//2.Provide initial state
const initialState: IMusicPlayer = {
  playlist: [],
  currentId: -1,
  playingStatus: "pause",
};
//END : 2) Provide Initial State

//START : 3) Add Reducer function to modify state based on action
const reducer = (state: IMusicPlayer, action: any) => {

  return state;
};

export const MusicPlayerContext = createContext<any>({
  state: initialState,
  dispatch: (data: any) => {},
});
const MusicPlayer = () => {
  //4.Connect initial state and reducer using useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    const loadPlayList = async () => {
        try {
            const {data:playlist} = await axios.get("http://localhost:4444/playlist");
            dispatch({type:"updatePlayList",playlist});
        } 
        catch(e) {

        }
    }
    loadPlayList();
  },[]);

  return (
    <>
      <div>Thasleema Music-Player</div>
     
    </>
  );
};
export default MusicPlayer;
