 import { useState } from "react"
 export const PersonalDetails = () => {
  const [edit,setEdit]=useState(false)
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
            <p class="name_value">Keshav Manuja</p>
            </div>
            <img src="https://container-app.ackoassets.com/am/myaccount_frontend/79b36efdd496b9748eb509ba067e70b2.svg" className="edit_icon"></img>
            {/* {edit ?<div className="details_edit">
                    <div>Edit Name</div>
                    <img onClick={()=>{
                    setEdit(false)
                    console.log(edit)
                  }} src="	https://container-app.ackoassets.com/am/myaccount_frontend/adb08c58f24c41d40f9b73282987c3ae.svg" alt=""/>
                  <div>
                    <img src="	https://container-app.ackoassets.com/am/myaccount_frontend/bf7e30d3c47c342d3e0027b0b6c00831.svg" alt=""/>
                    <p>To change the policyholder name for a policy, please edit the same through My Policies using Edit Policy option.</p>
                
                  </div>
                  <div>
                    <div>
                      <input  type="text" placeholder="First Name"/>
                      <p className="edit_pname">
                        First Name
                      </p>
                    </div>
                  </div>
                  </div>: false} */}
          </div>

          <div className="namediv">
            <div className="Namedetails">
            <p className="detailstext">Mobile Number</p>
            <p class="name_value">7210702727</p>
            </div>
            <img src="https://container-app.ackoassets.com/am/myaccount_frontend/79b36efdd496b9748eb509ba067e70b2.svg" className="edit_icon"></img>

          </div>

          <div className="namediv">
            <div className="Namedetails">
            <p className="detailstext">Email</p>
            <p class="name_value"></p>
            </div>
            <img src="https://container-app.ackoassets.com/am/myaccount_frontend/79b36efdd496b9748eb509ba067e70b2.svg" className="edit_icon"></img>

          </div>

        </div>
      </div>

    )
}