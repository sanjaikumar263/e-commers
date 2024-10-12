import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Nav/Nav';
import Home from './Pages/Home';
import ShopCatagory from './Pages/ShopCatagory';
import Card from './Pages/Card';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png'
import Product from './Pages/Protect';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<ShopCatagory  banner={men_banner} category="men"/>}  />
        <Route path='/Women' element={<ShopCatagory banner={women_banner} category="women" />} />
        <Route path='/Kids' element={<ShopCatagory banner={kid_banner} category="kid"/>}  />
        <Route path='/Product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/card' element={<Card/>} />
        <Route path="/login" element={<LoginSignUp/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
