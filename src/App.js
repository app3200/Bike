import logo from "./logo.svg";
// import "./App.css";
// import { SelectBike } from "./Components/Policy Flow/SelectBike";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/HeroSection/Hero";
import {Login} from "./Components/Authentication/login"
import {Routes,Route} from "react-router-dom"
import { Otp } from "./Components/Authentication/otp";
import {Myaccount} from "./Components/Authentication/myaccount"
import {SelectBike} from "./Components/Policy Flow/SelectBike"

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
       <Route path="/selectbike" element={<SelectBike/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
