import './App.css'
import AllProducts from './components/allProducts/AllProducts'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { useState } from 'react'
import Layout from './components/layout/Layout'

function App() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        const isProductExist = cart.find((item) => item.id === product.id);
        if (isProductExist) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

    }

    const handleItemIncrement = (itemId) => {
        const updatedCart = cart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
        setCart(updatedCart);
    }

    const handleItemDecrement = (itemId) => {
        const updatedCart = cart.map((item) => (item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
        setCart(updatedCart);
    }

    const handleRemove = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }

    return (
        <>
            <div>
                <BrowserRouter>
                    <Layout cart={cart}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/cart' element={<Cart cart={cart} handleItemIncrement={handleItemIncrement} handleItemDecrement={handleItemDecrement} handleRemove={handleRemove} />} />
                            <Route path='/allproducts' element={<AllProducts addToCart={addToCart} />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<SignUp />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>

            </div>
        </>
    )
}

export default App
