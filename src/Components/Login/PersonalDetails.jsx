 import { useState } from "react";
 import { useSelector } from "react-redux";
 
 export const PersonalDetails = () => {
  const [edit,setEdit]=useState(false)
  const user = useSelector((e) => e.personalD);

  const phone = useSelector((e) => e.phone);

    return(
        <div className="innerrightdiv">
        <div className="personal_details">
        <img onClick={()=>{
           
        }} src="https://container-app.ackoassets.com/am/myaccount_frontend/fa93e5ad221e98f3065baab21e06237f.svg" className="leftsidearrow"/>
        <p className="personaldet_text">Personal details</p>
        </div>
        <div className="detailsdiv">
          <div className="namediv">
            <div className="Namedetails">
            <p className="detailstext">Name</p>
            <p className="name_value">{user.name}</p>
            </div>
            <img src="https://container-app.ackoassets.com/am/myaccount_frontend/79b36efdd496b9748eb509ba067e70b2.svg" className="edit_icon"></img>
          
          </div>

          <div className="namediv">
            <div className="Namedetails">
            <p className="detailstext">Mobile Number</p>
            <p className="name_value">{phone}</p>
            </div>
            <img src="https://container-app.ackoassets.com/am/myaccount_frontend/79b36efdd496b9748eb509ba067e70b2.svg" className="edit_icon"></img>

          </div>

          <div className="namediv">
            <div className="Namedetails">
            <p className="detailstext">Email</p>
            <p className="name_value">{user.email}</p>
            </div>
            <img src="https://container-app.ackoassets.com/am/myaccount_frontend/79b36efdd496b9748eb509ba067e70b2.svg" className="edit_icon"></img>

          </div>

        </div>
      </div>

    )
}