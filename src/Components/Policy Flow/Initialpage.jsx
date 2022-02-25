import { useState } from "react"
import { Link } from "react-router-dom";
import { PolicyStatus } from "./PolicyStatus";
import { PopularBikes } from "./PopularBikes";
import { Years } from "./Years";

export const Initialpage = () => {

    const [bike,setBike]=useState(false);
    const [policy,setPolicy]=useState(false);
    const [popbike,setPopbike]=useState(false)
    const [bb,setBb]=useState(false);
    const [hideinput,setHideinput]=useState(false);
    const [year,setYear]=useState(2009)
    const [ policydiv, setPolicydiv] = useState("Policy not Expired")
    const [priceapprove,setPriceapprove]=useState(false)
    function setpricebutton(){
        setPriceapprove(true)
    }
    function controlhideinput(){
        setHideinput((prev)=>!prev)
    }
    function setyearselected(val){
        setYear(val)
        setBike((prev)=>!prev)
    }
    function setpolicyselection(val){
        setPolicydiv(val)
        setPolicy((prev)=>!prev)
    }
    return(
    <div>
        
        <div className="inputboxstart">
            {hideinput===false?<div>
                    <div className="selectyourbike">Select your bike</div>
                    <div className="onestepinside">
                    <div className="secondstepinside">
                            <div className="thirdstepinside">
                            <input 
                                onClick={(e)=> {
                                    setPopbike((prev)=>!prev)
                                    setBb(!popbike)
                                }} 
                              
                                type="text" placeholder="" className="inputboxreached"/>
                            <span className="spanit">
                                {/* -----SVG PENDING---- */}
                            </span>
                            </div>
                            <img  src="data:image/svg+xml,%3Csvg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='41' height='41' rx='10' fill='%2337C87E'/%3E %3Cpath d='M20.3333 24.6667C23.2789 24.6667 25.6667 22.2789 25.6667 19.3333C25.6667 16.3878 23.2789 14 20.3333 14C17.3878 14 15 16.3878 15 19.3333C15 22.2789 17.3878 24.6667 20.3333 24.6667Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E %3Cpath d='M27 26.0001L24.1 23.1001' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E %3C/svg%3E" className="searchimage"></img>
                        </div>
                        </div>
                    </div>:null}
                    {(popbike===true)?<PopularBikes fun={controlhideinput} pricebtn={setpricebutton}/>:null}
                    {/* Bike Bought in */}
                    <div className="Bikeboughinouterdiv">
                        <div className="bb1 bb2">
                        
                        <img src="data:image/svg+xml,%3Csvg width='15' height='13' viewBox='0 0 15 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0)'%3E %3Cpath d='M5.03521 1.5704L5.65795 1.67871C5.65795 1.67871 6.57853 1.81409 6.63268 2.92419C6.63268 3.08665 6.79513 3.22203 6.95759 3.19495L7.79694 3.08665C7.90524 3.05957 8.01354 3.00542 8.0677 2.92419L9.25903 1.54333C9.31318 1.48918 9.34026 1.40795 9.31318 1.32672C9.23196 1.11011 9.20488 0.703977 8.55506 0.703977C7.90524 0.703977 7.71571 0.649825 7.33665 1.16427C7.01174 1.62455 6.19947 1.11011 5.54965 0.947659C5.38719 0.920584 5.25181 0.974735 5.14351 1.11011L4.98105 1.3538C4.9269 1.43502 4.95398 1.54333 5.03521 1.5704Z' fill='%238990A1'/%3E %3Cpath d='M8.77153 0.297838L9.06937 0.460293C9.12352 0.487368 9.17767 0.54152 9.20475 0.595672C9.28597 0.785202 9.47551 1.19134 9.52966 1.32672C9.55673 1.38087 9.58381 1.40795 9.63796 1.40795C9.77334 1.43502 10.0441 1.43502 10.0982 1.40795C10.1524 1.35379 10.2607 0.54152 10.1524 0.54152C10.0441 0.54152 9.61088 0.568596 9.61088 0.568596L9.47551 0.406141C9.39428 0.297838 9.28597 0.21661 9.15059 0.162459L8.93399 0.0541553C8.85276 0.0270795 8.77153 0.0541553 8.71738 0.108307C8.66323 0.162459 8.69031 0.270762 8.77153 0.297838Z' fill='%238990A1'/%3E %3Cpath d='M2.57193 7.77076C3.05929 7.77076 3.30297 7.55416 3.57373 7.31048C3.89864 7.01264 4.25063 6.68773 4.9546 6.68773C5.65857 6.68773 6.01055 7.01264 6.33546 7.31048C6.6333 7.58123 6.84991 7.77076 7.33727 7.77076C7.82463 7.77076 8.06832 7.55416 8.33907 7.31048C8.66398 7.01264 9.01597 6.68773 9.71994 6.68773C10.4239 6.68773 10.7759 7.01264 11.1008 7.31048C11.3986 7.58123 11.6152 7.77076 12.1026 7.77076C12.59 7.77076 12.8337 7.55416 13.1044 7.31048C13.2669 7.1751 13.4023 7.03972 13.6189 6.90434V5.98376C13.6189 4.87365 12.7254 3.98015 11.6152 3.98015H10.2615C10.7488 3.84477 11.1008 3.41156 11.1008 2.89712C11.1008 2.27437 10.5864 1.75993 9.96362 1.75993C9.34088 1.75993 8.82644 2.27437 8.82644 2.89712C8.82644 3.41156 9.17842 3.87185 9.66579 3.98015H5.52319C5.9564 3.84477 6.25424 3.46571 6.25424 3.00542C6.25424 2.43683 5.79395 1.97654 5.22536 1.97654C4.65676 1.97654 4.19648 2.43683 4.19648 3.00542C4.19648 3.46571 4.52139 3.87185 4.92752 3.98015H3.35713C2.24702 3.98015 1.35352 4.87365 1.35352 5.98376V7.12094C1.43474 7.1751 1.48889 7.22925 1.54305 7.2834C1.84088 7.58123 2.08456 7.77076 2.57193 7.77076ZM9.44918 2.89712C9.44918 2.59928 9.69286 2.38268 9.96362 2.38268C10.2344 2.38268 10.4781 2.62636 10.4781 2.89712C10.4781 3.16788 10.2344 3.41156 9.96362 3.41156C9.69286 3.41156 9.44918 3.19495 9.44918 2.89712ZM5.22536 2.68051C5.41489 2.68051 5.55027 2.81589 5.55027 3.00542C5.55027 3.19495 5.41489 3.33033 5.22536 3.33033C5.03583 3.33033 4.90045 3.19495 4.90045 3.00542C4.90045 2.81589 5.0629 2.68051 5.22536 2.68051Z' fill='%238990A1'/%3E %3Cpath d='M14.269 11.1552H13.6462V7.85199C13.5921 7.90615 13.5379 7.93322 13.5108 7.98737C13.1859 8.28521 12.8339 8.61012 12.13 8.61012C11.426 8.61012 11.074 8.28521 10.7491 7.98737C10.4513 7.71662 10.2347 7.52708 9.74729 7.52708C9.25993 7.52708 9.01624 7.74369 8.74549 7.98737C8.42058 8.28521 8.06859 8.61012 7.36462 8.61012C6.66065 8.61012 6.30866 8.28521 5.98375 7.98737C5.68592 7.71662 5.46931 7.52708 4.98195 7.52708C4.49458 7.52708 4.2509 7.74369 3.98014 7.98737C3.65523 8.28521 3.30325 8.61012 2.59928 8.61012C1.97653 8.58304 1.62455 8.36643 1.35379 8.12275V11.1552H0.731047C0.32491 11.1552 0 11.4802 0 11.9134C0 12.3195 0.32491 12.6444 0.731047 12.6444H14.269C14.6751 12.6444 15 12.3195 15 11.9134C15 11.4802 14.6751 11.1552 14.269 11.1552Z' fill='%238990A1'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0'%3E %3Crect width='15' height='12.6444' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E" alt="Registration icon" className="bbpic"></img>
                        <p className="bikeboughtintext">Bike Bought in</p>
                        
                        {/* Years */}
                        <div className="yeardiouter">
                            <div className="yeardiiner">
                                <div  onClick={()=> {
                                    // console.log(bike,policy)
                                  setBike((prev)=>!prev)
                                  setPolicy(false)
                                //   console.log(bike,policy)
                                }} className="yeartextdiv" >{year}</div>
                                <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M4 6L8 10L12 6' stroke='%237C47E1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E %3C/svg%3E" className="downarrow"/>
                            </div>
                           {(bike===true)?<Years yearset={setyearselected}/>:null}
                        </div>
                        
                        </div>
                    </div>

                    <div className="cps">
                        <div className="bb1 bb2">
                             <img src="data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0)'%3E %3Cpath d='M7.32886 7.04698C7.32886 5.07383 8.83221 3.47651 10.7114 3.24161C10.9463 3.19463 11.1342 3.00671 11.1342 2.77181V1.55034C11.1342 0.704698 10.4295 0 9.58389 0H1.59732C0.704698 0 0 0.704698 0 1.55034V12.4966C0 13.3893 0.704698 14.094 1.55034 14.094H9.53691C10.3826 14.094 11.0872 13.3893 11.0872 12.5436V11.2752C11.0872 11.0403 10.8993 10.8523 10.6644 10.8054C8.83222 10.6175 7.32886 9.02013 7.32886 7.04698Z' fill='%238990A1'/%3E %3Cpath d='M5.40264 3.71141C5.12076 3.71141 4.65096 3.71141 4.51002 3.66443C4.3221 3.61745 4.0872 3.52349 3.71137 3.52349C3.33553 3.52349 3.10063 3.66443 2.91271 3.71141C2.81875 3.71141 2.34895 3.71141 2.06707 3.71141C1.97311 3.71141 1.87915 3.75839 1.87915 3.85235V3.94631C1.87915 4.04027 1.92613 4.08725 2.02009 4.08725C2.48989 4.13423 2.95969 4.32215 2.95969 4.32215C3.10063 4.69799 3.33553 4.79195 3.33553 4.79195C3.33553 5.12081 3.14761 5.16779 3.14761 5.16779C2.81875 5.26175 2.44291 5.44967 2.34895 5.77852C2.16103 6.43624 2.25499 9.30202 3.28855 9.53691V10.2416C3.28855 10.4295 3.42949 10.5235 3.57043 10.5235H3.80533C3.99324 10.5235 4.0872 10.3826 4.0872 10.2416V9.53691C5.12076 9.30202 5.21472 6.43624 5.0268 5.77852C4.93284 5.40269 4.557 5.21477 4.22814 5.16779C4.22814 5.16779 4.04022 5.16779 4.04022 4.79195C4.04022 4.79195 4.27512 4.69799 4.41606 4.32215C4.41606 4.32215 4.93284 4.13423 5.35566 4.08725C5.44962 4.08725 5.4966 3.99329 5.4966 3.94631V3.85235C5.59056 3.75839 5.4966 3.71141 5.40264 3.71141Z' fill='white'/%3E %3Cpath d='M4.22817 4.13423C4.22817 4.41611 3.99327 4.60403 3.75837 4.60403C3.52347 4.60403 3.28857 4.36913 3.28857 4.13423C3.28857 3.85235 3.52347 3.71141 3.75837 3.71141C3.99327 3.71141 4.22817 3.85235 4.22817 4.13423Z' fill='%238990A1'/%3E %3Cpath d='M3.28802 9.02013H4.18063C4.27459 9.02013 4.32157 8.97315 4.32157 8.87919C4.32157 8.59731 4.22761 8.08054 3.71084 8.08054C3.19406 8.08054 3.14708 8.59731 3.1001 8.87919C3.14708 8.97315 3.24104 9.02013 3.28802 9.02013Z' fill='%238990A1'/%3E %3Cpath d='M11.1336 9.91276C12.7163 9.91276 13.9994 8.62971 13.9994 7.04699C13.9994 5.46426 12.7163 4.18121 11.1336 4.18121C9.55087 4.18121 8.26782 5.46426 8.26782 7.04699C8.26782 8.62971 9.55087 9.91276 11.1336 9.91276Z' fill='%238990A1'/%3E %3Cpath d='M10.9926 5.8255L10.053 6.43624C9.95909 6.48322 9.91211 6.62416 9.91211 6.71812C9.95909 7.04698 10.194 7.75168 10.9926 8.22148C11.0866 8.26846 11.2275 8.26846 11.3215 8.22148C12.1202 7.75168 12.3081 7.04698 12.402 6.71812C12.402 6.57718 12.3551 6.48322 12.2611 6.43624L11.3215 5.8255C11.1806 5.77852 11.0866 5.77852 10.9926 5.8255Z' fill='white'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0'%3E %3Crect width='14' height='14.094' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E" alt="Registration icon" className="bbpic"></img>
                        <p className="bikeboughtintext">Current Policy Status</p>
                        
                        {/* policy */}
                        <div className="yeardiouter">
                            <div onClick={()=> {
                                    console.log(bike,policy)
                                  setPolicy((prev)=>!prev)
                                  setBike(false)
                                  console.log(bike,policy)
                                }}  className="yeardiiner">
                                <div className="yeartextdiv">{policydiv}</div>
                                <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M4 6L8 10L12 6' stroke='%237C47E1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E %3C/svg%3E" className="downarrow"/>
                            </div>
                            {(policy===true)?<PolicyStatus policyset={setpolicyselection}/>:null}
                        </div>
                        </div>
                    </div>
                    {(priceapprove)?<Link to="/planselector"><button className="Price-btn">View Prices</button></Link>:null}
                    </div>

        </div>
    )
}