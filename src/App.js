import logo from "./logo.svg";
// import "./App.css";
// import { SelectBike } from "./Components/Policy Flow/SelectBike";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/HeroSection/Hero";
import {Login} from "./components/Authentication/login"
import {Routes,Route} from "react-router-dom"
import { Otp } from "./components/Authentication/otp";
import {Myaccount} from "./components/Authentication/myaccount"
import {SelectBike} from "./components/Policy Flow/SelectBike"
import {Navbar2} from "./components/checkoutflow/Navbar2"
import {Planselector} from "./components/checkoutflow/planselector"
import {Checkout} from "./components/checkoutflow/Checkout"
import { Home } from "./components/Home/Home";
import { NewBike } from "./components/Authentication/NewBike";
import { Summary_purchsed } from "./components/checkoutflow/Summary_purchased";
import{ PersonalDetails} from "./components/Login/PersonalDetails"
import{ Paymentref} from "./components/Login/Paymentref"
import{ MyProfile} from "./components/Login/MyProfile"


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
       <Route path="/verify" element={<Summary_purchsed/>}></Route>
       <Route path="/new-bike" element={<NewBike></NewBike>}/>
       <Route path="/myprofile" element={<MyProfile/>}/>
     </Routes>
     {/* <MyProfile/> */}
     {/* < PersonalDetails/>
     <Paymentref/> */}
    </div>
  );
}

export default App;
