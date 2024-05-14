import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import PlayEasyBot from './pages/PlayEasyBot';
import PlayTwo from './pages/PlayTwo';
import PlayAdvancedBot from './pages/PlayAdvancedBot';


const App = () => {

  return (
		<div className="wrapper">
			<Routes>
			<Route path="/" element={<Navigate to='/home'/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/play-friend' element={<PlayTwo/>}/>
				<Route path='/play-easybot' element={<PlayEasyBot/>}/>
				<Route path='/play-advanced' element={<PlayAdvancedBot/>}/>
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</div>
	);
}

export default App;
