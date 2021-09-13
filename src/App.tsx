import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Gallery from './components/Gallery';
import Floorplans from './components/Floorplans';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Gallery />
      <Floorplans />
    </div>
  );
}

export default App;
