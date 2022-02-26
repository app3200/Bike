import "./MyProfile.css";
import { useState } from "react";
import { Paymentref } from "./Paymentref";
import { PersonalDetails } from "./PersonalDetails";
import { Cards } from "./Cards";
import { Whats } from "./Whatsapp";
export const MyProfile = () => {
  const [personal, setPersonal] = useState(true);
  const [payment, setPayment] = useState(false);
  const [cards, setCards] = useState(false);
  const [whats, setWhats] = useState(false);
  const [value, setValue] = useState(false);
 
  return (
    <div id="_next">
      <div className="stack">
        <div className="foo-bar">
          <div>
            <div className="navbardivstart">
              <div className="navbarresponsive">
                <div className="logoplusaccountdiv">
                  <div className="flexlogoandaccountdiv">
                    <div className="ackologoouterdiv">
                      <a href="/#" className="gotohometag_ackologo">
                        <span className="spanofackologo" >
                          <svg
                            width="82"
                            height="26"
                            viewBox="0 0 82 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0"
                              masktype="alpha"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="82"
                              height="26"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.375 0H81.625V26H0.375L0.375 0Z"
                                fill="white"
                              ></path>
                            </mask>
                            <g mask="url(#mask0)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M68.6268 0H13.3733C6.1943 0 0.375 5.8542 0.375 13.0758C0.375 20.2974 6.04319 26.0004 13.2221 26.0004H68.4757C75.6543 26.0004 81.6251 20.2974 81.6251 13.0758C81.6251 5.8542 75.8058 0 68.6268 0Z"
                                fill="#7C47E1"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M68.1168 22.7872C62.7751 22.7872 58.4297 18.4157 58.4297 13.042C58.4297 7.66838 62.7751 3.29688 68.1168 3.29688C73.458 3.29688 77.8038 7.66838 77.8038 13.042C77.8038 18.4157 73.458 22.7872 68.1168 22.7872Z"
                                fill="white"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M68.1188 19.6879C64.4696 19.6879 61.5117 16.7118 61.5117 13.0412C61.5117 9.3702 64.4696 6.39453 68.1188 6.39453C71.7675 6.39453 74.7258 9.3702 74.7258 13.0412C74.7258 16.7118 71.7675 19.6879 68.1188 19.6879Z"
                                fill="#44CB86"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.8705 19.6491C10.248 19.6491 7.30148 16.6845 7.30148 13.0407C7.30148 9.39657 10.248 6.43195 13.8705 6.43195C17.4925 6.43195 20.4395 9.39657 20.4395 13.0407C20.4395 16.6845 17.4925 19.6491 13.8705 19.6491ZM23.5459 13.0404C23.5459 7.67224 19.2048 3.30469 13.8687 3.30469C8.53253 3.30469 4.19141 7.67224 4.19141 13.0404C4.19141 18.4081 8.53253 22.7757 13.8687 22.7757C16.4023 22.7757 18.7106 21.7909 20.4377 20.1822V21.2124C20.4377 22.0756 21.1336 22.7757 21.992 22.7757C22.85 22.7757 23.5459 22.0756 23.5459 21.2124V13.3527C23.5459 13.3219 23.5447 13.2927 23.5432 13.265C23.5447 13.1904 23.5459 13.1154 23.5459 13.0404Z"
                                fill="white"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M35.319 22.7861C29.946 22.7861 25.5742 18.3881 25.5742 12.9829C25.5742 7.57686 29.946 3.17969 35.319 3.17969C37.7286 3.17969 40.042 4.07128 41.8323 5.69061C42.4744 6.27145 42.527 7.26571 41.95 7.9117C41.3726 8.55808 40.3839 8.6106 39.7422 8.02976C38.5262 6.93047 36.9554 6.32515 35.319 6.32515C31.6699 6.32515 28.7009 9.31148 28.7009 12.9829C28.7009 16.6539 31.6699 19.6406 35.319 19.6406C36.9565 19.6406 38.5281 19.0345 39.7441 17.9337C40.3859 17.3524 41.3746 17.4049 41.952 18.0505C42.5297 18.6961 42.4775 19.6904 41.8362 20.2716C40.0448 21.8929 37.7306 22.7861 35.319 22.7861Z"
                                fill="white"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M58.5652 19.9322L50.1789 12.8544L58.5652 5.92298C59.2262 5.37215 59.3177 4.38658 58.7697 3.72163C58.2218 3.05708 57.2417 2.96508 56.5811 3.5163L47.495 11.096V4.71984C47.495 3.85628 46.7991 3.15659 45.9407 3.15659C45.0826 3.15659 44.3867 3.85628 44.3867 4.71984V21.1354C44.3867 21.9989 45.0826 22.699 45.9407 22.699C46.7991 22.699 47.495 21.9989 47.495 21.1354V14.7592L56.5811 22.3389C56.8716 22.581 57.2229 22.699 57.5726 22.699C58.0189 22.699 58.4624 22.5063 58.7697 22.1336C59.3177 21.469 59.2262 20.4835 58.5652 19.9322Z"
                                fill="white"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </a>
                      <div className="ackologoforresponsive">
                      </div>
                    </div>
                   

                    <div className="account_help_outerdiv">
                      <a href="/#" className="Helptext">
                        Help
                      </a>
                      <div className="accountlogodiv">
                        <div className="accountlogoinnerdiv" >
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
                      </div>
                      
                    </div>
                    
                            
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
       
        

        <div className="second_personaldetails_div">
          <div className="second_personal_inner">
            <div className="flexlayoutdiv">
              <div className="leftsideheading">
                <div
                  className="personaldetailsouter"
                  onClick={() => {
                    setPersonal(true);
                    setPayment(false);
                    setCards(false);
                    setWhats(false);
                  }}
                >
                  <div className="logo_and_text">
               {personal?     <img
                      alt="logo"
                      src="https://container-app.ackoassets.com/am/myaccount_frontend/032f4d7efb2b10e4f7261c934f4b2f39.svg"
                      className="left_text_logo"
                    /> :
                    <img
                      alt="logo"
                      src="https://container-app.ackoassets.com/am/myaccount_frontend/5b9a9b8b3a9f826c15509a6cd34cb71b.svg"
                      className="left_text_logo"
                    /> }
                    <p className={personal ? "dark" : "text_with_logo"}>
                      Personal details
                    </p>
                  </div>
                  <img 
                    height="16px"
                    width="16px"
                    src="https://container-app.ackoassets.com/am/myaccount_frontend/0690e3f365bf0bfee33fc9e533af326b.svg"
                    className="arrow_at_left_text"
                  ></img>
                 
                </div>

                <div
                  className="personaldetailsouter"
                  onClick={() => {
                    setPayment(true);
                    setPersonal(false);
                    setCards(false);
                    setWhats(false);
                  }}
                >
                  <div className="logo_and_text">
                {payment?    <img
                      src="	https://container-app.ackoassets.com/am/myaccount_frontend/c1a8cd97d82f973b207360a999395699.svg"
                      className="left_text_logo"
                    /> :
                    <img
                      src="https://container-app.ackoassets.com/am/myaccount_frontend/9449cc3c1c1bb4e4787e84284d184aa4.svg"
                      className="left_text_logo"
                    />}
                    <p className={payment ? "dark" : "text_with_logo"}>
                      Add Payment Prefernce
                    </p>
                  </div>
                  <img
                    height="16px"
                    width="16px"
                    src="https://container-app.ackoassets.com/am/myaccount_frontend/0690e3f365bf0bfee33fc9e533af326b.svg"
                    className="arrow_at_left_text"
                  ></img>
                </div>

                <div
                  className="personaldetailsouter"
                  onClick={() => {
                    setPayment(false);
                    setPersonal(false);
                    setCards(true);
                    setWhats(false);
                  }}
                >
                  <div className="logo_and_text">
            {cards?       <img
                      src="	https://container-app.ackoassets.com/am/myaccount_frontend/3734c5305fd1f70550e76a62b37dd227.svg"
                      className="left_text_logo"
                    />:
                    <img
                      src="https://container-app.ackoassets.com/am/myaccount_frontend/485dd98f70369e83c1ab21befb73a1b0.svg"
                      className="left_text_logo"
                    />}
                    <p className={cards ? "dark" : "text_with_logo"}>
                      Saved Cards
                    </p>
                  </div>
                  <img
                    height="16px"
                    width="16px"
                    src="https://container-app.ackoassets.com/am/myaccount_frontend/0690e3f365bf0bfee33fc9e533af326b.svg"
                    className="arrow_at_left_text"
                  ></img>
                </div>

                <div
                  className="personaldetailsouter"
                  onClick={() => {
                    setPayment(false);
                    setPersonal(false);
                    setCards(false);
                    setWhats(true);
                  }}
                >
                  <div className="logo_and_text">
                {whats?   
                <img
                      alt=""
                      src="	https://container-app.ackoassets.com/am/myaccount_frontend/2ddda60ab49aabd35806010658f7a3c0.svg"
                      className="left_text_logo"
                    /> :
                    <img
                      src="https://container-app.ackoassets.com/am/myaccount_frontend/7230f94614c39773d7d3609073dd6e97.svg"
                      alt="	https://container-app.ackoassets.com/am/myaccount_frontend/2ddda60ab49aabd35806010658f7a3c0.svg"
                      className="left_text_logo"
                    />}
                    
                  {value?  <p className={whats ? "dark" : "text_with_logo"}>
                      WhatsApp perference
                    </p>:
                    <p className={whats ? "dark" : "text_with_logo"}>
                      Receive updates on Whatsapp
                    </p>}
                    
                  </div>
                  <img
                    height="16px"
                    width="16px"
                    src="https://container-app.ackoassets.com/am/myaccount_frontend/0690e3f365bf0bfee33fc9e533af326b.svg"
                    className="arrow_at_left_text"
                  ></img>
                </div>
              </div>

              <div className="outerdivrightside ">
                {personal ? <PersonalDetails /> : false}
                {payment ? <Paymentref /> : false}
                {cards ? <Cards /> : false}
                {whats ? (<Whats set={value} isOn={value} handleToggle={() => setValue(!value)} /> ) : ( false )}
              </div>
            
            </div>
            <div className="respo_outerdiv" >
            {personal ? <PersonalDetails  /> : false}
                {payment ? <Paymentref /> : false}
                {cards ? <Cards /> : false}
                {whats ? (<Whats set={value} isOn={value} handleToggle={() => setValue(!value)} /> ) : ( false )}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
