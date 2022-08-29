import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart';
import OrderForm from './pages/OrderForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderForm" element={<OrderForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App