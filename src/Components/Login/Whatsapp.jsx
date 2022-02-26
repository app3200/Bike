import { useSelector } from "react-redux";
export const Whats=({ isOn, handleToggle, set })=>{
    const phone = useSelector((e) => e.phone);
    // console.log(set)
    return (
        <div className="innerrightdiv">
            <div className="payment_text_flexdiv">
                <img src="https://container-app.ackoassets.com/am/myaccount_frontend/fa93e5ad221e98f3065baab21e06237f.svg" className="left_side_arrow"/>
                <p className="wa_p">WhatsApp preference</p>
                </div>
            
            <div className="switch">
            <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className={set? "react-on": "react-switch-label"}
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
            
            <div className="switch_text">
                <p className="wa_policy">Receive policy and claim updates on WhatsApp
                    <span className="span_img"><img src="https://container-app.ackoassets.com/am/myaccount_frontend/5a46f9baa65effac237c55234cb803a0.svg"/></span>
                </p>
             {set?   <p className="wa_set">You are not subscribed to recieve important updates we send on WhatsApp.Please subscribe.<br/> We Promise not to spam you</p>:
                <p className="wa_set">You will recieve updates on the registered number <span className="span_phone">{phone}</span>.<br/> We Promise not to spam you </p>}
            </div>
            </div>
        </div>
    )
}