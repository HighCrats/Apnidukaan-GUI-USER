import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Product from './component/product/Product';
import Contact from './component/contact/Contact';
import Subscription from './component/subscription/Subscription';
import Cart from './component/cart/Cart';
import Order from './component/order/Order';
import SignIn from './component/signin/SignIn';
import Sales from './component/sell/sales';
import Sell from './component/sell/Sell';

import MyProduct from './component/sell/MyProduct';
import New from './component/description/newDescription';
import CategorySecond from './component/category/NewCategory';
import SignUp from './component/signup/SignUp-HARSHITA';
import MyProductDescription from './component/description/MyProductDescription-HARSHITA';
import ForgetPassword from './component/forgotPassword/forgotPassword';
import ChangePassword from './component/forgotPassword/changePassword';
import ProductByCategory from './component/productByCategory/productByCategory';
import Request from './component/request/Request';


function App() {
  return <>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/subscription' element={<Subscription />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
      <Route path='/categoryClick' element={<ProductByCategory/>} />
      <Route path='/request' element={<Request/>}/>
      <Route path='/signup' element={<SignUp />} />
      
     
      <Route path='/signin' element={<SignIn />} />
      <Route path='/myproduct' element={<MyProduct />} />
      <Route path='/myproductdescription' element={<MyProductDescription/>}/>
      <Route path='/sales' element={<Sales />} />
      <Route path='/sell' element={<Sell />} />
      <Route path='/new' element={<New />} />
      <Route path='/categorySecond' element={<CategorySecond/>}/>

      <Route path='/forgotPassword' element={<ForgetPassword/>}/>
      <Route path='/changePassword' element={<ChangePassword/>}/>
      

    </Routes>
  </>
}

export default App;
