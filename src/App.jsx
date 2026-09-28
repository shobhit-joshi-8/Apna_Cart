import './App.css'
import AllProducts from './components/allProducts/AllProducts'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/allproducts' element={<AllProducts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
