import './App.css';
import Contests from './component/Contests';
import Features from './component/Features';
import Footer from './component/Footer';
import HomeHero from './component/HomeHero';

import Navbar from './component/Navbar';
function App() {
  return (
    <>
      <Navbar/>
      <HomeHero/>
      <Features/>
      <Contests/>
      <Footer/>
    </>
  );
}

export default App;
