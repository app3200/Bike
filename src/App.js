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
import {Navbar2} from "./Components/checkoutflow/Navbar2"
import {Planselector} from "./Components/checkoutflow/planselector"
import {Checkout} from "./Components/checkoutflow/Checkout"
import { Home } from "./Components/Home/Home";
import { NewBike } from "./Components/Authentication/NewBike";
import { Summary_purchsed } from "./Components/checkoutflow/Summary_purchased";



function App() {
  return (
    <div className='App'>
       {/* <SelectBike/>  */}
      {/* <Navbar></Navbar>
     <Hero></Hero>  */}
     <Routes>
       {/* <Route path="/" element={<Summary_purchsed/>}></Route> */}
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/otp" element={<Otp/>}></Route>
       <Route path="/myaccount" element={<Myaccount/>}></Route>
       <Route path="/selectbike" element={<SelectBike/>}></Route>
       <Route path="/planselector" element={<><Navbar2/><Planselector/></>}/>
       <Route path="/checkout" element={<><Navbar2/><Checkout/></>}/>
       <Route path="/new-bike" element={<NewBike></NewBike>}/>
     </Routes>
    </div>
  );
}

export default App;
