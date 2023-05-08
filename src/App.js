import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Product from './component/product/Product';
import Contact from './component/contact/Contact';
import Subscription from './component/subscription/Subscription';
import Cart from './component/cart/Cart';
import Order from './component/order/Order';
import SignUp from './component/signup/SignUp';
import SignIn from './component/signin/SignIn';
import Description from './component/description/Description';
import ResetPassword from './component/resetPassword/ResetPassword';
import Sales from './component/sell/sales';
import Sell from './component/sell/Sell';


function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/subscription' element={<Subscription />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/sales' element={<Sales/>}/>
      <Route path='/sell' element={<Sell/>}/>
      <Route path='/description' element={<Description/>} />
      <Route path='/reset-password' element={<ResetPassword/>}/>
    </Routes>
  </>
}

export default App;
