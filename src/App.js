import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/Pages/Homepage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter basename='portfolio'>
        <div className="black-bg">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
        </Routes>
        <div className="grey-bg">
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
