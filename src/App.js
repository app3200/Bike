import "./App.css";
import { Planselector } from "./checkoutflow/planselector";
import { Routes, Route } from "react-router-dom";
import { Checkout } from "./checkoutflow/Checkout";
import { Navbar } from "./checkoutflow/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Planselector />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
