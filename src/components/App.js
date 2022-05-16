import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import MainScreen from './pages/MainScreen'
import Cart from './Cart'
import UserContext from "../contexts/userContext";
import ItemComponent from './ItemComponent'
const cartOrderInitialValue = JSON.parse(localStorage.getItem('order')) || [];



function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState(cartOrderInitialValue);
  useEffect(() => localStorage.setItem("order", JSON.stringify(cartItems)), [cartItems])



  return (
    <UserContext.Provider value={{ user, setUser, cartItems, setCartItems }}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signUp' element={<RegisterScreen />} />
          <Route path='/' element={<MainScreen />} />
          <Route path='/test' element={<ItemComponent />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;