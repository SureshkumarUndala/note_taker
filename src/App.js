import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Navbar from "./components/navbar"
import Signup from './pages/signup';
import Homepage from './pages/Homepage';
import Addnote from './pages/Addnote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/addnote" element={<Addnote/>} />
         
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
