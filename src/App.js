import './App.css';
import Hero from './components/hero/hero';
import Category from "./components/category/category.jsx"
import Sellings from "./components/sellings/sellings.jsx"
import Carousel from "./components/carousel/carousel.jsx"
import Sponsors from "./components/sponsors/sponsors.jsx"
import Subscription from "./components/subscription/subscriptiom.jsx"
import Footer from "./components/foot/foot.jsx"

function App() {
  return (
    <div className="App">
    <Hero/>
    {/* <div className='category'><Category/></div><br/>
    <div className='sellings'><Sellings/></div>
    <div className='carousel'><Carousel/></div>
    <div className='sponsors'><Sponsors/></div>
    <div className='subscription'><Subscription/></div>
    <div className='footer'><Footer/></div> */}
    </div>
  );
}

export default App;
