import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from './component/Footer'
import Sign from './pages/Sign'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Navbar2 from './component/Navbar2'
import Wishlist from './pages/Wishlist'
import NotFound from './component/NotFound'

function AppWrapper() {
  const location = useLocation();
  const isAccountPage = location.pathname === '/Account';
  const isWishlistPage = location.pathname === '/Wishlist';

  return (
    <>
      {(isAccountPage || isWishlistPage) ? <Navbar2 /> : <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
   <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App
