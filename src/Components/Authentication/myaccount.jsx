import "./login.css";
import "./myaccount.css"

import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { Link } from "react-router-dom";
export const Myaccount = () => {
  const navigate =useNavigate()
  const [pro, setPro] = useState(false);
  const k = JSON.parse(localStorage.getItem("phoneno"));
  return (
    <div id="myaccount" className="myaccount">
      <div className="accountnav">
        <div className="navimd">
          <Link to="/">
            <img
              src="https://th.bing.com/th/id/OIP.bUQCSzp8qVRj750U4IeOoQHaCY?w=328&h=112&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              width="82px"
              height="26px"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        <div className="help">
          <span className="span1"> Help</span>
          <div
            className="profile"
            onClick={() => {
              setPro(!pro);
              console.log(pro);
            }}
            >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.625 30.6668C24.7252 30.6668 31.2917 24.1003 31.2917 16.0002C31.2917 7.89999 24.7252 1.3335 16.625 1.3335C8.52486 1.3335 1.95837 7.89999 1.95837 16.0002C1.95837 24.1003 8.52486 30.6668 16.625 30.6668Z"
                fill="#F6F7FB"
              ></path>
              <path
                d="M20.6461 11.7554C20.6461 13.9894 18.859 16.1116 16.6251 16.1116C14.3911 16.1116 12.604 13.9894 12.604 11.7554C12.604 9.52152 14.3911 7.73438 16.6251 7.73438C18.859 7.73438 20.6461 9.52152 20.6461 11.7554Z"
                fill="#9364ED"
              ></path>
              <path
                d="M23.2046 22.5781C23.3163 23.1365 22.9812 23.695 22.311 23.9184C21.194 24.2535 18.9601 24.7003 16.6145 24.7003C14.2689 24.7003 12.0349 24.1418 10.918 23.8067C10.3595 23.695 10.0244 23.1365 10.0244 22.4664C10.4712 19.3389 12.5173 17.6064 16.6145 17.6064C20.6094 17.6064 22.7578 19.4506 23.2046 22.5781Z"
                fill="#9364ED"
              ></path>
            </svg>
          </div>

          {pro ? (
            <div className="logout">
              <p className="line">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.625 30.6668C24.7252 30.6668 31.2917 24.1003 31.2917 16.0002C31.2917 7.89999 24.7252 1.3335 16.625 1.3335C8.52486 1.3335 1.95837 7.89999 1.95837 16.0002C1.95837 24.1003 8.52486 30.6668 16.625 30.6668Z"
                    fill="#F6F7FB"
                  ></path>
                  <path
                    d="M20.6461 11.7554C20.6461 13.9894 18.859 16.1116 16.6251 16.1116C14.3911 16.1116 12.604 13.9894 12.604 11.7554C12.604 9.52152 14.3911 7.73438 16.6251 7.73438C18.859 7.73438 20.6461 9.52152 20.6461 11.7554Z"
                    fill="#9364ED"
                  ></path>
                  <path
                    d="M23.2046 22.5781C23.3163 23.1365 22.9812 23.695 22.311 23.9184C21.194 24.2535 18.9601 24.7003 16.6145 24.7003C14.2689 24.7003 12.0349 24.1418 10.918 23.8067C10.3595 23.695 10.0244 23.1365 10.0244 22.4664C10.4712 19.3389 12.5173 17.6064 16.6145 17.6064C20.6094 17.6064 22.7578 19.4506 23.2046 22.5781Z"
                    fill="#9364ED"
                  ></path>
                </svg>
                {k}
              </p>

             <Link to="/myprofile">
             <p className="line">
                <img src="	https://myaccount.ackoassets.com/static/images/header-icons/my-profile-v2.svg" />
                My Profile
              </p></Link>

              <p>Logout</p>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
      <div className="accountdiv">
        <div className="maindiv">
          <div className="mypolicy">
            <p className="newp1">My Policies</p>
            <div>
              <div className="li">
                <div className="liimg">
                  <img
                    className="srcimg"
                    src="https://acko-public.s3.ap-south-1.amazonaws.com/partnership/logos/Rapido_jan_2021.svg"
                  />
                </div>
                <div className="pdiv">
                  <p className="pdiv1">Rapido Rides</p>
                  <p className="pdiv2">40 policies</p>
                </div>
                <div className="divimg">
                  <img src="https://container-app.ackoassets.com/am/myaccount_frontend/b25da31bc8e540f7f951b5dcd8d65de3.svg" />
                </div>
              </div>
            </div>
            <div>
              <div className="li">
                <div className="liimg">
                  <img
                    className="srcimg"
                    src="https://acko-public.s3.ap-south-1.amazonaws.com/partnership/logos/Oyo_jan_2021.svg"
                  />
                </div>
                <div className="pdiv">
                  <p className="pdiv1">OYO Stays</p>
                  <p className="pdiv2">4 policies</p>
                </div>
                <div className="divimg">
                  <img src="https://container-app.ackoassets.com/am/myaccount_frontend/b25da31bc8e540f7f951b5dcd8d65de3.svg" />
                </div>
              </div>
            </div>
            <div>
              <div className="li">
                <div className="liimg">
                  <img
                    className="srcimg"
                    src="https://acko-public.s3.ap-south-1.amazonaws.com/partnership/logos/Ola_jan_2021.svg"
                  />
                </div>
                <div className="pdiv">
                  <p className="pdiv1">OLA Trips</p>
                  <p className="pdiv2">2 policies</p>
                </div>
                <div className="divimg">
                  <img src="https://container-app.ackoassets.com/am/myaccount_frontend/b25da31bc8e540f7f951b5dcd8d65de3.svg" />
                </div>
              </div>
              <div className="li">
                <div className="liimg liimg1">
                  <img src="https://container-app.ackoassets.com/am/myaccount_frontend/1385c1cbb19d9f70252d3fbce4d86fff.svg" />
                </div>
                <div className="pdiv">
                  <p className="pdiv3">
                    Have a Corporate Health Policy from ACKO?
                  </p>
                  <p className="pdiv2">
                    Install the ACKO to access your benifits
                  </p>
                </div>
              </div>
              <div className="li none">
                <p className="request">
                  How to raise repair request for your mobile or appliance:
                </p>
                <div className="appliances">
                  <div className="raiserepair">
                    <img src="https://myaccount.ackoassets.com/static/images/screen_spanner_cell.svg" />
                    <p>
                      Register a repair request by selecting mobile or appliance
                      plan
                    </p>
                  </div>
                  <div className="arrow">
                    <img src="https://container-app.ackoassets.com/am/myaccount_frontend/560861c475dacf39e7d2d923b24b89e2.svg" />
                  </div>
                  <div className="raiserepair">
                    <img src="https://myaccount.ackoassets.com/static/images/repairpaper_index.svg" />
                    <p>
                      Click on 'Repair on the policy page & follow the steps'
                    </p>
                  </div>
                  <div className="arrow">
                    <img src="https://container-app.ackoassets.com/am/myaccount_frontend/560861c475dacf39e7d2d923b24b89e2.svg" />
                  </div>
                  <div className="raiserepair">
                    <img src="https://myaccount.ackoassets.com/static/images/hand_coin.svg" />
                    <p>
                      Submit your request after selecting mode of settlement
                    </p>
                  </div>
                  <div className="arrow">
                    <img src="https://container-app.ackoassets.com/am/myaccount_frontend/560861c475dacf39e7d2d923b24b89e2.svg" />
                  </div>
                  <div className="raiserepair">
                    <img src="	https://myaccount.ackoassets.com/static/images/letter_bell.svg" />
                    <p>request registered! Check email for further updates</p>
                  </div>
                </div>
              </div>
              <div className="li1">
                <div className="liimg liimg1 liimg2">
                  <img src="https://container-app.ackoassets.com/am/myaccount_frontend/608eca5bbd4a5b668eb6d6aed4c028cc.svg" />
                </div>
                <div className="pdiv">
                  <p className="pdiv3">Download Acko App on your phone</p>
                  <p className="pdiv2">
                    Manage your policies & claims on the go
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="newpolicy">
            <div id="fixed">
              <p className="newp1 none ">Looking for a new policy?</p>
              
             <div className="newpolicy">
               <div id="fixed">
                 <p className="newp1 none ">Looking for a new policy?</p>
                 <div className="newdiv1 looking">
                     <div className="cardiv bc1">
                         <div className="carimg"><img src="https://myaccount.ackoassets.com/static/images/Car-new.svg"/></div>
                         <div className="title"><span className="pname">Car</span><img className="divimg" src="https://container-app.ackoassets.com/am/myaccount_frontend/a83406a207ef2c319d378f4768343308.svg"/></div>
                     </div>
                     {/* <Link to="/myaccount"> */}
                     <div className="cardiv bc2" onClick={()=>{
                       navigate("/new-bike")
                     }}>
                         <div className="carimg"><img src="https://myaccount.ackoassets.com/static/images/Bike-new.svg"/></div>
                         <div className="title"><span className="pname">Bike</span><img className="divimg" src="https://container-app.ackoassets.com/am/myaccount_frontend/a83406a207ef2c319d378f4768343308.svg"/></div>
                     </div>
                     {/* </Link> */}
                     <div className="cardiv bc3">
                         <div className="carimg"><img src="https://myaccount.ackoassets.com/static/images/ic_health_home_new.svg"/></div>
                         <div className="title"><span className="pname">Health</span><img className="divimg" src="https://container-app.ackoassets.com/am/myaccount_frontend/a83406a207ef2c319d378f4768343308.svg"/></div>
                     </div>
                 </div>
                 <div className="newdiv1">
                     <div className="section">
                       <img src="https://myaccount.ackoassets.com/static/images/car-new.svg"/>
                     </div>
                     <div className="section1">
                       <p className="sp1">Got a car?</p>
                       <p className="sp2">Save big on your car insurance.</p>
                       <div className="sp3">Insure</div>
                     </div>
                 </div>
                 <div className="newdiv1">
                     <div className="section">
                       <img src="https://myaccount.ackoassets.com/static/images/scooter-shield-front.svg"/>
                     </div>
                     <div className="section1">
                       <p className="sp1">Got a bike?</p>
                       <p className="sp2">We've got a sweet deal for your bike!</p>
                       <Link to="/myaccount"><div className="link"><div className="sp3 ">Insure</div></div></Link>
                     </div>
                 </div>
                 <div className="newdiv1">
                     <div className="section">
                       <img src="https://myaccount.ackoassets.com/static/images/golden-shield.svg"/>
                     </div>
                     <div className="section1">
                       <p className="sp1">Understand different covers of a Car insurance policy</p>
                       <div className="sp33 sp3">Read More</div>
                     </div>
                 </div>
             </div>
             </div>
          </div>
        </div>
      </div>
      <div className="flexdiv">
        <p className="footer">CIN: U66000MH2016PLC287385</p>
        <p className="footer">IRDAI Registration No: 157</p>
        <p className="footer none">Category: Non-Life Insurance</p>
      </div>
    </div>
    </div>
  );
}
