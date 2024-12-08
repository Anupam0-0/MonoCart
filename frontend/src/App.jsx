import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Login from './pages/Login'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-9vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} /> 
        <Route path='/login' element={<Login />}></Route>
        <Route path='/place-order' element={<PlaceOrder />} ></Route>
        <Route path='/orders' element={<Orders />} ></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
