import './Stylesheets/App.css';
// import './master.css'
import Header from './components/Header'
import Home from './components/User/Home';
import Shop from './components/User/Shop';
import About from './components/User/About';
import Contact from './components/User/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin/Admin';
import Cart from './components/User/Cart'
import Checkout from './components/User/Checkout';
import Orderuser from './components/User/Orderuser';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductState from './context/products/ProductState';
import CartState from './context/products/CartState';
import OrderState from './context/products/OrderState';
import PaymentState from './context/products/PaymentState';
import WishState from './context/products/WishState';
import UserState from './context/products/UserState';
import ProductDesc from './components/User/ProductDesc';
import Wishlist from './components/User/Wishlist';

function App() {
  return (
    <>
      <WishState>
      <UserState>
        <PaymentState>
          <OrderState>
            <CartState>
              <ProductState>
                <BrowserRouter>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="orders" element={<Orderuser />} />
                    <Route path="productdesc" element={<ProductDesc />} />
                    <Route path="wishlist" element={<Wishlist />} />
                  </Routes>
                </BrowserRouter>
              </ProductState>
            </CartState>
          </OrderState>
        </PaymentState>
      </UserState>
      </WishState>

    </>
  );
}

export default App;
