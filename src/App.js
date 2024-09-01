import './App.css';
import Skills from './pages/skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './pages/navbar';

 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
