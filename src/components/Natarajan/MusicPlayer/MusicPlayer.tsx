import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import MusicControls from "../MusicControls/MusicControls";
import "./MusicPlayer.css"

//start: Define the structure of the data required by that feature
export type PlayingStatus = "pause" | "play";

export interface ISong {
    id: number;
    singTitle: string;
    songPath: string;
    coverPhoto: string;
}

export interface IMusicPlayer{
    playlist:ISong[];
    currentId: number;
    playingStatus: PlayingStatus;
}

// END : Define the structure of the data required by that feature

//START : 2) Provide Initial State
const initialState:IMusicPlayer = {
    playlist:[{id:1,singTitle:"hey",songPath:"",coverPhoto:""}],
    currentId: -1,
    playingStatus:"pause"
}
//ENd : 2) Provide Initial State



// END : Define the structure of the data required by that feature


//START : 3) Add Reducer function to modify state based on action
const reducer = (state:IMusicPlayer, action:any) => {
     return state;
}
//END : 3) Add Reducer function to modify state based on action

export const MusicPlayerContext = createContext<any>({
    state: initialState,
    dispatch: (data: any) => {},
})

const MusicPlayer = () => {
    // 4) Connect initial state and reducer using hook - useReducer
    const[state, dispatch] = useReducer(reducer,initialState)
    
    useEffect(()=>{
        const loadPlayList = async() =>{
            try{
                const response = await axios.get("http://localhost:4444/playlist");
                console.log(response, "response");
                //const finalData = await response.json();
                //dispatch({ type:"save", playlist:response})
            }catch(e){

            }
        }
        loadPlayList();
    }, [])

    return(
        <>
            <div> Natarajan Music's player </div>
            {/* //<MusicControls></MusicControls> */}
        </>
    ) 
}
export default MusicPlayer;