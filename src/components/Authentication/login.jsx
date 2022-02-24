import "./login.css"
import { useState,useEffect } from "react"
import {Otp} from "./otp.jsx"
import { Link,useNavigate } from "react-router-dom"
export const Login=()=>{
    const [text,setText]=useState("")
    const [no,setNo]=useState(0);
    const navigate=useNavigate();
    const [checkbox,setCheckbox]=useState(false)
    const [OTP,setOtp]=useState("")

    let k;
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
    alert(  OTP)
    navigate("/otp")
    }
    }
    useEffect(() => {
        storedata()
    }, [text]);
    const storedata=()=>{

            localStorage.setItem("phoneno",JSON.stringify(text))


        return text
    }
    return (
        <div id="login" className="login">
            <div className="loginnav">
                <img src="https://th.bing.com/th/id/OIP.bUQCSzp8qVRj750U4IeOoQHaCY?w=328&h=112&c=7&r=0&o=5&dpr=1.25&pid=1.7" width="82px" height="26px"/>
               <span className="span"> Help</span>
            </div>
            <div className="logcontent">
                <div><img src="https://container-app.ackoassets.com/am/myaccount_frontend/92201f8bb8b3b9820539e248c8bd3401.svg"/></div>
               <div> <p className="p">Login with your Mobile number</p></div>
              <div>  <p className="p2">Claim,edit or renew your policy</p></div>
                <div className="number">+91<input onChange={(e)=>{
                    setNo(e.target.value.length)
                    setText(e.target.value)
                    storedata()
                }} className="input" required maxLength="10 " type="tel"/></div>
                <div><input className="checkbox" type="checkbox"/><p className="rimuw">Receive important updates on WhatsApp</p></div>
                <div  >
                    <button disabled={no<=9?true:false} className= { `${no==10?"green":"gray"}`} onClick={()=>{
                        getotp(4)
                    }}>Get OTP</button></div>
                {/* <div id="Otp"><Otp text={text}/></div> */}
              
                <div><p className="policy">By logging in, I agree to the <span className="span">Privacy Policy</span></p></div>
            </div>
        </div>
    )
}