import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Makeup from './Makeup.js';
import Skincare from './Skincare.js';
import Haircare from './Haircare.js';
import About from './About.js';
import Contactus from './Contactus.js';
import Shopone from './Shopone.js';
import Shop from './Shop.js';
import Shopallone from './Shopallone.js';
import Makeupone from './Makeupone.js';
import Skincareone from './Skincareone.js';
import Haircareone from './Haircareone.js';
import Register from './Register.js';
import Login from './Login.js';
import Cart from './Cart.js';
import Checkout from './Checkout.js';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/makeup' element={<Makeup/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/haircare' element={<Haircare/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/shopone/:eid' element={<Shopone/>}></Route>
        <Route path='/shopallone/:eid' element={<Shopallone/>}></Route>
        <Route path='/makeupone/:eid' element={<Makeupone/>}></Route>
        <Route path='/skincareone/:eid' element={<Skincareone/>}></Route>
        <Route path='/haircareone/:eid' element={<Haircareone/>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
