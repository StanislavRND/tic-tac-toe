import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import PlayBot from './pages/PlayBot';
import PlayTwo from './pages/PlayTwo';

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/play-friend" element={<PlayTwo />} />
        <Route path="/play-bot" element={<PlayBot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
