import { Add_PD, Add_phn, Add_VD } from "./actionTypes";

const init = JSON.parse(localStorage.getItem("store")) || {
  phone: "",
  vehicleD: {
    vehicle_no: "",
    vehicle_name: "",
    reg_year: "",
    i_amt: "",
  },
  personalD: {
    name: "",
    email: "",
    pin_code: "",
  },
} 

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case Add_phn:
      return { ...store, phone: payload };
    case Add_PD:
      return {
        ...store,
        personalD: {
          name: payload.name,
          email: payload.email,
          pin_code: payload.pin_code,
        },
      };
    case Add_VD:
      return {
        ...store,
        vehicleD: {
          vehicle_no: payload.vehicle_no,
          vehicle_name: payload.vehicle_name,
          reg_year: payload.reg_year,
          i_amt: payload.i_amt,
        },
      };
    default:
      return store;
  }
};
