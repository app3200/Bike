import { createStore } from "redux";

import {reducer} from "./reducer"

export const store=createStore(reducer);

console.log(store.getState());


store.subscribe(()=>{
    console.log(store.getState());
    localStorage.setItem("store",JSON.stringify(store.getState()))
})