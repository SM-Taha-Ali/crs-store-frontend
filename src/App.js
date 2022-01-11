import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header'
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <div className="not-main">
        <Carousel />
      </div>
      <div className='main'>
        <Home />
      </div>
    </>
  );
}

export default App;
