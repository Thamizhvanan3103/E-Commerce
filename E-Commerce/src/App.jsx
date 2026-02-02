import React from 'react'
import  ProductList from './components/ProductList'
import  Cart  from './components/Cart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

function App() {
  return (
    
      <Router>
        < Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
                      
        </Routes>
      </Router>
    
  )
}

export default App