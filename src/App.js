import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Product from './component/product/Product';
import Contact from './component/contact/Contact';
import Subscription from './component/subscription/Subscription';
import Wishlist from './component/wishlist/Wishlist';
import Cart from './component/cart/Cart';
import Order from './component/order/Order';

function App() {
  return <>

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/subscription' element={<Subscription />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />

    </Routes>

  </>
}

export default App;
