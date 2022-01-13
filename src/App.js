import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header'
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="not-main">
          <Carousel />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
