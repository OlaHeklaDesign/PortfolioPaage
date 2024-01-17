import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/Pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="black-bg">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
