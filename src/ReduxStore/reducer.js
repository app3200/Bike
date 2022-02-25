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
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case Add_phn:
      return { ...store, phone: payload };
    case Add_PD:
      return {
        ...store,
        personalD: {
          name: payload.name || store.personalD.name,
          email: payload.email || store.personalD.email,
          pin_code: payload.pin_code || store.personalD.pin_code,
        },
      };
    case Add_VD:
      return {
        ...store,
        vehicleD: {
          vehicle_no: payload.vehicle_no || store.vehicleD.vehicle_no,
          vehicle_name: payload.vehicle_name || store.vehicleD.vehicle_name,
          reg_year: payload.reg_year || store.vehicleD.reg_year,
          i_amt: payload.i_amt || store.vehicleD.i_amt,
        },
      };
    default:
      return store;
  }
};
