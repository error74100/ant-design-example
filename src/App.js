import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import General from './pages/General';
import Utill from './pages/Utill';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/general" element={<General />} />
      <Route path="/utill" element={<Utill />} />
    </Routes>
  );
}

export default App;
