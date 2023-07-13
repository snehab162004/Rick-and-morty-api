import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.js'
import Dashboard from './pages/dashboard.js'
import Profile from './pages/profile.js'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile/:id" element={<Profile />} />

     </Routes>
          
    </div>
  );
}

export default App;
