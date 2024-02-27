import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Homepage'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import ShoppingCart from './pages/ShoppingCart'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductList />} />
        <Route path="/productDetails" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App