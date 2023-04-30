import './App.css';
import SenthilMusicPlayer from './components/Senthil/MusicPlayer/MusicPlayer';
import NatarajanMusicPlayer from './components/Natarajan/MusicPlayer/MusicPlayer';
import ThasleemaMusicPlayer from './components/Thasleema/MusicPlayer/MusicPlayer';

function App() {
  return (
    <div className="App">
        <SenthilMusicPlayer></SenthilMusicPlayer>
        {/* <NatarajanMusicPlayer></NatarajanMusicPlayer>
        <ThasleemaMusicPlayer></ThasleemaMusicPlayer> */}
    </div>
  );
}

export default App;
