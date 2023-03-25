import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Navbar from './components/navbar';
import Signup from './pages/signup';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Homepage/>} />
         
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
