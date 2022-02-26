

import { Link } from "react-router-dom"
import { Initialpage } from "./Initialpage"
import { useSelector } from "react-redux"
import "./SelectBike.css"


export const SelectBike = () => {
    const vehicle = useSelector((e) => e.vehicleD);
     return <div id="_next">
        <div className="ackologo">
            <div className="flexlogo">
                <div className="ackologoimage">
                    <a href="https://www.acko.com">
                        <div className="actualogo">
                        <img src="https://container-app.ackoassets.com/am/myaccount_frontend/4972dde433c8123ca0821f57ef2e9a5c.svg" alt="logo" className="logoimage"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        {/* Below box */}
        <div className="maininputbox">
            <div className="innermaininputbox">
                <div className="bikenumberedit">
                {vehicle.vehicle_no}
                
                <span role="button" ><Link to="/">EDIT</Link></span>
                </div>

                
                    {/* -----Render 1---- */}
                      <Initialpage/>
                   
          

           
            </div>


            {/* Second div */}
            <div className="seconddivouter">
                <div className="seconddivinner">
                    <div className="whyacko">
                        Why Acko Bike Insurance?
                    </div>
                    <div className="outerwrap">
                    <img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M22.6667 32H9.33333C4.13332 32 0 27.8667 0 22.6667V9.33333C0 4.13333 4.13332 0 9.33333 0H22.6667C27.8667 0 32 4.13333 32 9.33333V22.6667C32 27.8667 27.8667 32 22.6667 32Z' fill='%23ECE4F9'/%3E %3Cpath d='M15.8102 28.492C22.6745 28.492 28.2391 22.8954 28.2391 15.9918C28.2391 9.08806 22.6745 3.49152 15.8102 3.49152C8.94595 3.49152 3.38135 9.08806 3.38135 15.9918C3.38135 22.8954 8.94595 28.492 15.8102 28.492Z' fill='white'/%3E %3Cpath d='M18.0622 20.9846H13.708V15.8154C13.708 14.5991 14.7011 13.6108 15.9233 13.6108C17.1455 13.6108 18.1386 14.5991 18.1386 15.8154V20.9846H18.0622Z' fill='%2370D4F9'/%3E %3Cpath d='M13.0971 20.9837H8.6665V17.3348C8.6665 16.1185 9.65957 15.1303 10.8818 15.1303C12.104 15.1303 13.0971 16.1185 13.0971 17.3348V20.9837Z' fill='%239364ED'/%3E %3Cpath d='M23.3334 20.9848H18.9028V18.1721C18.9028 16.9558 19.8959 15.9676 21.1181 15.9676C22.3404 15.9676 23.3334 16.9558 23.3334 18.1721V20.9848Z' fill='%23A892F7'/%3E %3Cpath d='M21.1182 14.8272C21.8776 14.8272 22.4932 14.2146 22.4932 13.4588C22.4932 12.7031 21.8776 12.0905 21.1182 12.0905C20.3588 12.0905 19.7432 12.7031 19.7432 13.4588C19.7432 14.2146 20.3588 14.8272 21.1182 14.8272Z' fill='%23A892F7'/%3E %3Cpath d='M15.9234 12.5468C16.6827 12.5468 17.2984 11.9342 17.2984 11.1785C17.2984 10.4228 16.6827 9.81018 15.9234 9.81018C15.164 9.81018 14.5483 10.4228 14.5483 11.1785C14.5483 11.9342 15.164 12.5468 15.9234 12.5468Z' fill='%2370D4F9'/%3E %3Cpath d='M10.8814 14.2191C11.6408 14.2191 12.2564 13.6065 12.2564 12.8508C12.2564 12.095 11.6408 11.4824 10.8814 11.4824C10.122 11.4824 9.50635 12.095 9.50635 12.8508C9.50635 13.6065 10.122 14.2191 10.8814 14.2191Z' fill='%239364ED'/%3E %3C/svg%3E" className="smalllogo"/>
                    <div className="textdiv1">
                        <span>Trustworthy</span>
                        <span>Valued by 1 Million+ coustmers</span>
                    </div>
                    </div>

                    <div className="outerwrap">
                    <img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M22.0009 32H9.99901C4.47161 32 0 27.515 0 22.0058V9.99418C0 4.46945 4.48713 0 9.99901 0H22.0009C27.5283 0 32 4.48497 32 9.99418V21.9903C32.0155 27.5306 27.5283 32 22.0009 32Z' fill='%23ECE4F9'/%3E %3Cpath d='M16.0001 28.5119C22.9138 28.5119 28.5183 22.91 28.5183 15.9997C28.5183 9.08948 22.9138 3.48761 16.0001 3.48761C9.08652 3.48761 3.48193 9.08948 3.48193 15.9997C3.48193 22.91 9.08652 28.5119 16.0001 28.5119Z' fill='white'/%3E %3Cpath d='M12.6851 21.23H19.1752C19.672 21.23 20.0912 20.8265 20.0912 20.3144V14.3241H20.0602C18.3057 14.3241 16.8928 12.9118 16.8928 11.1582H12.6851C12.1883 11.1582 11.769 11.5617 11.769 12.0738V20.3144C11.7846 20.8265 12.1883 21.23 12.6851 21.23Z' fill='%239364ED'/%3E %3Cpath d='M14.4238 17.7228L15.0449 18.3436L15.9454 17.4435L16.8304 18.3436L17.4515 17.7228L16.551 16.8227L17.467 15.9226L16.846 15.3174L15.9454 16.2175L15.0294 15.3174L14.4238 15.9226L15.3244 16.8227L14.4238 17.7228Z' fill='white'/%3E %3Cpath d='M19.7962 9.49738C18.7093 9.49738 17.8398 10.3664 17.8398 11.4528C17.8398 12.5391 18.7093 13.4081 19.7962 13.4081C20.883 13.4081 21.7525 12.5391 21.7525 11.4528C21.7525 10.3664 20.8675 9.49738 19.7962 9.49738Z' fill='%2316C2F8'/%3E %3Cpath d='M20.541 11.8408C20.6031 11.8408 20.6497 11.9029 20.6186 11.965C20.541 12.1667 20.3082 12.5547 19.7961 12.5547C19.2374 12.5547 19.0357 12.1667 18.9581 11.965C18.9425 11.9029 18.9736 11.8563 19.0357 11.8563L20.4769 11.8447L20.541 11.8408Z' fill='white'/%3E %3Cpath d='M20.619 11.3904C20.7646 11.3904 20.8826 11.2724 20.8826 11.1268C20.8826 10.9813 20.7646 10.8633 20.619 10.8633C20.4735 10.8633 20.3555 10.9813 20.3555 11.1268C20.3555 11.2724 20.4735 11.3904 20.619 11.3904Z' fill='white'/%3E %3Cpath d='M18.9574 11.3904C19.1029 11.3904 19.2209 11.2724 19.2209 11.1268C19.2209 10.9813 19.1029 10.8633 18.9574 10.8633C18.8118 10.8633 18.6938 10.9813 18.6938 11.1268C18.6938 11.2724 18.8118 11.3904 18.9574 11.3904Z' fill='white'/%3E %3C/svg%3E" className="smalllogo"/>
                    <div className="textdiv1">
                        <span>Zero Hassle</span>
                        <span>Instance Policy issuance with no paperwork</span>
                    </div>
                    </div>

                    <div className="outerwrap">
                    <img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M22.6667 32H9.33333C4.13332 32 0 27.8667 0 22.6667V9.33333C0 4.13333 4.13332 0 9.33333 0H22.6667C27.8667 0 32 4.13333 32 9.33333V22.6667C32 27.8667 27.8667 32 22.6667 32Z' fill='%23ECE4F9'/%3E %3Cpath d='M15.8102 28.492C22.6745 28.492 28.2391 22.8954 28.2391 15.9918C28.2391 9.08806 22.6745 3.49152 15.8102 3.49152C8.94595 3.49152 3.38135 9.08806 3.38135 15.9918C3.38135 22.8954 8.94595 28.492 15.8102 28.492Z' fill='white'/%3E %3Cpath d='M18.0622 20.9846H13.708V15.8154C13.708 14.5991 14.7011 13.6108 15.9233 13.6108C17.1455 13.6108 18.1386 14.5991 18.1386 15.8154V20.9846H18.0622Z' fill='%2370D4F9'/%3E %3Cpath d='M13.0971 20.9837H8.6665V17.3348C8.6665 16.1185 9.65957 15.1303 10.8818 15.1303C12.104 15.1303 13.0971 16.1185 13.0971 17.3348V20.9837Z' fill='%239364ED'/%3E %3Cpath d='M23.3334 20.9848H18.9028V18.1721C18.9028 16.9558 19.8959 15.9676 21.1181 15.9676C22.3404 15.9676 23.3334 16.9558 23.3334 18.1721V20.9848Z' fill='%23A892F7'/%3E %3Cpath d='M21.1182 14.8272C21.8776 14.8272 22.4932 14.2146 22.4932 13.4588C22.4932 12.7031 21.8776 12.0905 21.1182 12.0905C20.3588 12.0905 19.7432 12.7031 19.7432 13.4588C19.7432 14.2146 20.3588 14.8272 21.1182 14.8272Z' fill='%23A892F7'/%3E %3Cpath d='M15.9234 12.5468C16.6827 12.5468 17.2984 11.9342 17.2984 11.1785C17.2984 10.4228 16.6827 9.81018 15.9234 9.81018C15.164 9.81018 14.5483 10.4228 14.5483 11.1785C14.5483 11.9342 15.164 12.5468 15.9234 12.5468Z' fill='%2370D4F9'/%3E %3Cpath d='M10.8814 14.2191C11.6408 14.2191 12.2564 13.6065 12.2564 12.8508C12.2564 12.095 11.6408 11.4824 10.8814 11.4824C10.122 11.4824 9.50635 12.095 9.50635 12.8508C9.50635 13.6065 10.122 14.2191 10.8814 14.2191Z' fill='%239364ED'/%3E %3C/svg%3E" className="smalllogo"/>
                    <div className="textdiv1">
                        <span>Super fast</span>
                        <span>90%* claims settled under 24 hours</span>
                    </div>
                    </div>
                </div>
            </div>


        </div>



    </div>
}