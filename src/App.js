import logo from './logo.svg';
import './App.css';
import { SelectBike } from './Components/Policy Flow/SelectBike';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/HeroSection/Hero';

function App() {
  return (
    <div className="App">
     {/* <SelectBike/> */}
     <Navbar></Navbar>
     <Hero></Hero>
    </div>
  );
}

export default App;
