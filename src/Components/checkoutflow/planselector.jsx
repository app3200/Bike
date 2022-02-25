import { useState } from "react";
import "./planselector.css";
import { Plancards1 } from "./Plancards1";
import { Plancards2 } from "./Plancards2";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {Vehicleadd} from "../../ReduxStore/actions"

export const Planselector = () => {
  const [d1prc3, setd13prc] = useState(2256);
  const [d1prc2, setd12prc] = useState(1504);
  const [d1prc1, setd11prc] = useState(752);
  const [d2prc3, setd23prc] = useState(2451);
  const [d2prc2, setd22prc] = useState(1657);
  const [d2prc1, setd21prc] = useState(863);
  const [accmon, setacc] = useState(1050);

  const dispatch = useDispatch();

  const [add, toggle] = useState(false);
  const [tp, setTp] = useState();

  function remove() {
    toggle(!add);
  }
  function addval() {
    setd13prc(d1prc3 + accmon);
    setd12prc(d1prc2 + accmon);
    setd11prc(d1prc1 + accmon);
    setd23prc(d2prc3 + accmon);
    setd22prc(d2prc2 + accmon);
    setd21prc(d2prc1 + accmon);
  }
  function removeval() {
    setd13prc(d1prc3 - accmon);
    setd12prc(d1prc2 - accmon);
    setd11prc(d1prc1 - accmon);
    setd23prc(d2prc3 - accmon);
    setd22prc(d2prc2 - accmon);
    setd21prc(d2prc1 - accmon);
  }

  function acc3yr() {
    setacc(1050);
  }
  function acc2yr() {
    setacc(700);
  }
  function acc1yr() {
    setacc(350);
  }

  function setValue(nam) {
    setTp(nam);
  }

  function final() {
    dispatch(Vehicleadd({i_amt:tp}))
  }

  const Vname = useSelector((e) => e.vehicleD);
  return (
    <div>
      <div id="maindiv">
        <div id="div1">
          <p>Plans for your {Vname.vehicle_name}</p>
          <div id="vinfo">
            <div className="vdet">
              <p>{Vname.vehicle_name}</p>
            </div>
            <div className="pointer">.</div>
            <div className="vdet">
              <p>Bike Bought in {Vname.reg_year}</p>
            </div>
            <div className="pointer">.</div>
            <div className="vdet">
              <p>Current Policy Expired</p>
            </div>
            <Link to="/selectbike">Edit</Link>
          </div>
        </div>
        <div id="div2">
          <Plancards1
            prc3={d1prc3}
            prc2={d1prc2}
            prc1={d1prc1}
            accmon={accmon}
            remove={remove}
            addval={addval}
            add={add}
            acc3yr={acc3yr}
            acc2yr={acc2yr}
            acc1yr={acc1yr}
            setValue={setValue}
            removeval={removeval}
            final={final}
          />
          <Plancards2
            prc3={d2prc3}
            prc2={d2prc2}
            prc1={d2prc1}
            accmon={accmon}
            remove={remove}
            addval={addval}
            add={add}
            acc3yr={acc3yr}
            acc2yr={acc2yr}
            acc1yr={acc1yr}
            setValue={setValue}
            removeval={removeval}
            final={final}
          />
        </div>
      </div>
    </div>
  );
};
