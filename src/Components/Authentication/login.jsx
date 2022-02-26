import "./login.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Otp } from "./otp.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Phoneadd } from "../../ReduxStore/actions";
export const Login = () => {
  const [text, setText] = useState("");
  const [no, setNo] = useState(0);
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  let k;
  const getotp = () => {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    let a = Math.ceil(getRandomArbitrary(1000, 9999));
    console.log(a);

    localStorage.setItem("OTP", JSON.stringify(a));
    k = JSON.parse(localStorage.getItem("OTP"));
    //   console.log(OTP);
    alert(a);
    navigate("/otp");
  };
  useEffect(() => {
    storedata();
  }, [text]);
  const storedata = () => {
    localStorage.setItem("phoneno", JSON.stringify(text));

    return text;
  };
  return (
    <div id="login" className="login">
      <div className="loginnav">
        <img
          src="https://th.bing.com/th/id/OIP.bUQCSzp8qVRj750U4IeOoQHaCY?w=328&h=112&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          width="82px"
          height="26px"
        />
        <span className="span"> Help</span>
      </div>
      <div className="logcontent">
        <div>
          <img src="https://container-app.ackoassets.com/am/myaccount_frontend/92201f8bb8b3b9820539e248c8bd3401.svg" />
        </div>
        <div>
          {" "}
          <p className="p">Login with your Mobile number</p>
        </div>
        <div>
          {" "}
          <p className="p2">Claim,edit or renew your policy</p>
        </div>
        <div className="number">
          +91
          <input
            onChange={(e) => {
              setNo(e.target.value.length);
              setText(e.target.value);
              storedata();
            }}
            className="input"
            required
            maxLength="10 "
            type="number"
          />
        </div>
        <div>
          <input className="checkbox" type="checkbox" />
          <p className="rimuw">Receive important updates on WhatsApp</p>
        </div>
        <div>
          <button
            disabled={no <= 8 ? true : false}
            className={`${no == 10 ? "green" : "gray"}`}
            onClick={() => {
              dispatch(Phoneadd(text));
              getotp(4);
            }}
          >
            Get OTP
          </button>
        </div>
        {/* <div id="Otp"><Otp text={text}/></div> */}

        <div>
          <p className="policy">
            By logging in, I agree to the{" "}
            <span className="span">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
