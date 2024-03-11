import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Homepage'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import ShoppingCart from './pages/ShoppingCart'
import Wishlist from './pages/WishList'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist/:category" element={<ProductList />} />
        <Route path="/product/:product_id" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<div>Route does not exist</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App