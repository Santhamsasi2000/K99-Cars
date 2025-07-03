import './App.css';
// Blur.css
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import MainInstant from './InstantOffer/main.instant';
import InstantOffer from './Pages/InstantOffer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/instant-offer" element={<InstantOffer/>}/>
      </Routes>
    </>
  )
}

export default App
