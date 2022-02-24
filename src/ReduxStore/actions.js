import { Add_PD,Add_phn,Add_VD } from "./actionTypes"

export const Phoneadd=(payload)=>({
    type:Add_phn,
    payload
})

export const Personaladd=(payload)=>({
    type:Add_PD,
    payload
})

export const Vehicleadd=(payload)=>({
    type:Add_VD,
    payload
})