import logo from "./logo.svg";
// import "./App.css";
// import { SelectBike } from "./Components/Policy Flow/SelectBike";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/HeroSection/Hero";
import {Login} from "./components/Authentication/login"
import {Routes,Route} from "react-router-dom"
import { Otp } from "./components/Authentication/otp";
import {Myaccount} from "./components/Authentication/myaccount"

function App() {
  return (
    <div className='App'>
       {/* <SelectBike/>  */}
      {/* <Navbar></Navbar>
     <Hero></Hero>  */}
     <Routes>
       <Route path="/" element={<><Navbar/> < Hero/></>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/otp" element={<Otp/>}></Route>
       <Route path="/myaccount" element={<Myaccount/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
