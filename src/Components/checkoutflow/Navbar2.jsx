import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <div className="navbar">
      <div className="ndiv">
        <div>
          <Link to="/">
            <div>
              <img
                src="https://container-app.ackoassets.com/am/myaccount_frontend/4972dde433c8123ca0821f57ef2e9a5c.svg"
                alt="logo"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
