import "./login.css"
import { useState ,useEffect, version} from "react"
import { Route, useNavigate } from "react-router-dom"
import { Login } from "./login"
import { Link } from "react-router-dom"
// import OTPInput, { ResendOTP } from "otp-input-react";

export const Otp=()=>{
    const [OTP,setOtp]=useState("")
    const navigate=useNavigate();
    const [ver,setVer]=useState({
      1:"",
      2:"",
      3:"",
      4:""
    })
   

    const otpver=(e)=>{
    const  {name,value}=e.target
    setVer({...ver,[name]:value})
    }
    // useEffect(()=>{

    // },[nex])
    let k;
    let phone=(JSON.parse(localStorage.getItem("phoneno")))
    const getotp=(length)=>{
        const digits = '0123456789';
  
    let OTPvalue = '';
    for (let i = 0; i < length; i++) {
      OTPvalue += digits[Math.floor(Math.random() *10)];
    }
    setOtp(OTPvalue);
    if(OTP.length>3){
        localStorage.setItem("OTP",JSON.stringify(OTP))
     k=JSON.parse(localStorage.getItem("OTP"))
     console.log(OTP)
    return alert(  OTP)
    }
    }
    const handlechange=(ver)=>{
      k=JSON.parse(localStorage.getItem("OTP"))
      let data="";
      for(var keys in ver){
        data=data+(ver[keys])
      }
     if(k==data){
      
    navigate( "/myaccount" )
       alert("User is verified")
      
      // console.log(nex)
     }else{
        alert("Wrong OTP")
     }
    
    }
  
    return (
        <div id="otpnav" className="otp">
           <div className="loginnav">
                <img src="https://th.bing.com/th/id/OIP.bUQCSzp8qVRj750U4IeOoQHaCY?w=328&h=112&c=7&r=0&o=5&dpr=1.25&pid=1.7" width="82px" height="26px"/>
               <span className="span"> Help</span>
            </div>
            <div className="logcontent">
            <div><img src="https://container-app.ackoassets.com/am/myaccount_frontend/92201f8bb8b3b9820539e248c8bd3401.svg"/></div>
            <div> <p className="p">OTP has been sent to</p></div>
              <div>  <p className="p2">+91{phone}
             <Link to="/login"> <span >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.17505 9.0749L10.5001 3.7499C10.8001 3.4499 10.8001 2.9999 10.5001 2.6999L9.30005 1.4999C9.00005 1.1999 8.55005 1.1999 8.25005 1.4999L2.92505 6.8249L5.17505 9.0749Z" stroke="#373737" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
  <path d="M3.3751 10.275L1.5751 10.725C1.4251 10.725 1.3501 10.65 1.3501 10.5L1.8001 8.69998C1.8001 8.54998 2.0251 8.47498 2.1001 8.62498L3.4501 9.97498C3.5251 10.05 3.4501 10.2 3.3751 10.275Z" fill="#373737"></path>
  </svg></span></Link>
              </p></div>
              <form className="otp" onSubmit={(e)=>{
                e.preventDefault()
                // if(e.key =="Enter"){
                  handlechange(ver)
                // }
               
              }}>
                  <input onChange={ otpver} name="1"  maxLength="1" className="otp1" type="tel"/>
                  <input onChange={ otpver} name="2" maxLength="1" className="otp1" type="tel"/>
                  <input onChange={ otpver} name="3" maxLength="1" className="otp1" type="tel"/>
                  <input onChange={ otpver} name="4" maxLength="1" className="otp1" type="tel"/>
                  <br/>
                  <input className="gray" type= "submit"/>
              </form>
               <div className="rotp"><span className=" resent" onClick={()=>{
                   getotp(4)
               }}>Resent OTP</span></div>
            </div>
        {/* <div>OTP:{text}</div> */}
       
        </div>

    )
}