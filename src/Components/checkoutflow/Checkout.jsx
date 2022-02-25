import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Personaladd } from "../../ReduxStore/actions";
import { Pricingdiv } from "./pricing_div";
import "./Summary_purchased.css";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sepr",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  const output = month + " " + (Number(day) + 3) + "  " + year;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState();

  const dispatch = useDispatch();

  const gatherD = () => {
    dispatch(Personaladd({ name: name, email: email, pin_code: pin }));
  };
  const phone = useSelector((e) => e.phone);
  const vehicle = useSelector((e) => e.vehicleD);

  return (
    <div id="mdiv">
      <div id="Dcomp">
        <div id="ctask">
          <div>
            <div className="num1">1</div>
            <p className="Cp">Enter Details</p>
          </div>
          <div>
            <div className="rnum">2</div>
            <p className="Cp">Verify Phone</p>
          </div>
          <div>
            <div className="rnum">3</div>
            <p className="Cp">Review &amp; pay</p>
          </div>
        </div>

        <div id="frmd">
          <div id="form">
            <p id="flab">Answer a few more questions</p>
            <div className="txtf">
              <input
                type="text"
                id="name"
                className="form__field"
                placeholder="Full Name (as per RC)"
                onInput={(e) => {
                  setName(e.target.value);
                }}
              />
              <label className="lbl" htmlFor="name" className="form__label">
                Full name (as per RC)
              </label>
            </div>
            <div className="txtf">
              <input
                type="text"
                id="email"
                className="form__field"
                placeholder="Email"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="lbl" htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="txtf">
              <input
                type="text"
                id="mobile"
                className="form__field"
                placeholder="Mobile"
                value={phone}
                disabled
              />
              <label className="lbl" htmlFor="mobile" className="form__label">
                Mobile
              </label>
              <p id="otpp">Otp will be sent to this number</p>
            </div>

            <div className="txtf">
              <input
                type="text"
                id="bike_no"
                className="form__field"
                placeholder="Bike Number"
                value={vehicle.vehicle_no}
                disabled
              />
              <label className="lbl" htmlFor="bike_no" className="form__label">
                Bike Number
              </label>
            </div>
            <div className="txtf">
              <input
                type="text"
                id="pin_code"
                className="form__field"
                placeholder="Pin Code"
                onInput={(e) => {
                  setPin(e.target.value);
                }}
              />
              <label className="lbl" htmlFor="pin_code" className="form__label">
                Pin Code
              </label>
            </div>

            <div className="dOkAqz">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.567 11.1c0-.697-.275-1.363-.77-1.858a2.633 2.633 0 00-1.858-.77H6.02a2.63 2.63 0 00-1.854.77 2.627 2.627 0 00-.774 1.859v15.39c0 .697.279 1.368.774 1.858.49.495 1.16.774 1.854.774h18.918c.697 0 1.368-.279 1.858-.774.495-.49.77-1.16.77-1.858V11.1z"
                  fill="#351CB0"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.588 11.1c0-.697-.279-1.363-.77-1.858a2.641 2.641 0 00-1.858-.77H8.042c-.697 0-1.363.28-1.858.77a2.641 2.641 0 00-.77 1.859v15.39a2.633 2.633 0 002.628 2.632H26.96a2.633 2.633 0 002.628-2.633V11.1z"
                  fill="#5A68E7"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.567 10.52a2.624 2.624 0 00-2.56-2.047H8.039c-.796 0-1.552.364-2.052.985a2.634 2.634 0 00-.508 2.223c.805 3.569 2.088 9.234 2.767 12.25a2.629 2.629 0 002.565 2.047h18.963a2.627 2.627 0 002.565-3.204c-.81-3.573-2.088-9.234-2.772-12.254z"
                  fill="#AEE2FF"
                ></path>
                <path
                  d="M9.176 8.114v-.208c0-.305.121-.598.337-.818.216-.216.513-.338.82-.338h.008c.64 0 1.157.518 1.157 1.157v.836c0 .505-.41.914-.914.914M13.957 8.114v-.208c0-.305.121-.598.337-.818a1.17 1.17 0 01.82-.338h.008c.64 0 1.157.518 1.157 1.157v.836c0 .505-.41.914-.913.914M18.756 8.114v-.208c0-.305.121-.598.342-.818.216-.216.508-.338.819-.338h.004c.644 0 1.161.518 1.161 1.157v.836c0 .505-.41.914-.918.914M23.555 8.114v-.208a1.162 1.162 0 011.161-1.157h.009c.639.001 1.156.519 1.156 1.158v.836c0 .505-.41.914-.913.914"
                  stroke="#5A68E7"
                  strokeWidth="0.4"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.336 14.625h17.658M11.76 19.934h17.662M15.135 11.918l2.74 11.524M21.955 11.918l2.74 11.524"
                  stroke="#47AFFA"
                  strokeWidth="0.4"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3.795 6.324a.666.666 0 100-1.332.666.666 0 000 1.332z"
                  fill="#FFA69F"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.568 11.285l-.216 1.647L.123 12.1l1.445-.815z"
                  fill="#74CE63"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.324 16.668l-1.557-.531-.527 1.557 1.553.526.53-1.552z"
                  fill="#FFE662"
                ></path>
              </svg>
              <div width="80%" className=" cVJvWX">
                <p
                  size="xxxs"
                  fontWeight="400"
                  color="#555A68"
                  className=" eUZkiY"
                >
                  As your policy has expired, your new policy will start 3 days
                  from today, i.e. {output}. However, you'll still get your
                  policy instantly.
                </p>
              </div>
            </div>
            <div id="descd">
              <div id="cld">
                Previous year policy document is required in case of claim
                within 30 days of the Acko Policy start date
              </div>
              <div id="tnc">
                By tapping on continue I declare that I have provided correct
                details and have read Acko's T&C
              </div>
            </div>
            <div id="btnd">
              <Link to="/verify">
                <button
                  id="cbtn"
                  onClick={() => {
                    gatherD();
                  }}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="prcComp">
        <Pricingdiv price={vehicle.i_amt} />
      </div>
    </div>
  );
};
