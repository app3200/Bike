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
import{ PersonalDetails} from "./Components/Login/PersonalDetails"
import{ Paymentref} from "./Components/Login/Paymentref"
import{ MyProfile} from "./Components/Login/MyProfile"

function App() {
  return (
    <div className='App'>
       {/* <SelectBike/>  */}
      {/* <Navbar></Navbar>
     <Hero></Hero>  */}
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/otp" element={<Otp/>}></Route>
       <Route path="/myaccount" element={<Myaccount/>}></Route>
       <Route path="/selectbike" element={<SelectBike/>}></Route>
       <Route path="/planselector" element={<><Navbar2/><Planselector/></>}/>
       <Route path="/checkout" element={<><Navbar2/><Checkout/></>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
     </Routes>
     {/* <MyProfile/> */}
     {/* < PersonalDetails/>
     <Paymentref/> */}
    </div>
  );
}

export default App;
