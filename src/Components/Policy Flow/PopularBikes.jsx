import { useState } from "react"
import { SelectedBike } from "./selectedbike"
import {useDispatch} from "react-redux"
import {Vehicleadd} from "../../ReduxStore/actions"


export const PopularBikes = ({fun}) => {
    let [show,setShow]=useState(false)
    let [text,setText]=useState("");
    const dispatch =useDispatch();


   function handler(e){
       let val = e.target.innerText
    //    console.log(val)
       setText(val)
      setShow((prev)=>!prev)
      console.log(text)
      fun()
      dispatch(Vehicleadd({vehicle_name:val}))
      
   }
    return (show===true)?<SelectedBike val={text}/>: (
            <div className="popularbikeouter">
                    <div className="popinner">
                        <div className="popinner2">
                     
                            <p className="popularbikestext">Popular Bikes</p>
                            <div onClick={handler} className="bikename">Bajaj Pulsar 150 150CC</div>
                            <div onClick={handler} className="bikename">Honda Activa 109CC</div>
                            <div onClick={handler} className="bikename">Honda Activa 5G 110CC</div>
                            <div onClick={handler} className="bikename">Honda CB Shine 125CC</div>
                            <div onClick={handler} className="bikename">Honda Dio 109CC</div>
                            <div onClick={handler} className="bikename">Suzuki Access 125CC</div>
                            <div  onClick={handler} className="bikename">TVS Jupiter 110CC</div>
                            <div onClick={handler} className="bikename">Yamaha FZS 150CC</div>
                        </div>
                    </div>
            </div>
    )
}