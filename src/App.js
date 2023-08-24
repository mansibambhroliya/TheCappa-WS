import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Restaurant from './Componets/Restaurant';
import Spa from './Componets/Spa';
import Button from 'react-bootstrap/Button';
import css from './css/style.css';
import mycss from './css/Mediaquery.css';

function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='rastaurant' element={<Restaurant/>}></Route>
        <Route path='spa' element={<Spa/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      
      </Routes>
    
    </>
  );
}

export default App;
