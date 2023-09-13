import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componets/home/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import Restaurant from './componets/Restaurant';
import Button from 'react-bootstrap/Button';
import css from './css/style.css';
import mycss from './css/Mediaquery.css';
import Spa from './componets/Spa';

function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/spa' element={<Spa/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      
      </Routes>
    
    </>
  );
}

export default App;
