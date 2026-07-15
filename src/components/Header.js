import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [reactBtnName, setReactBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // console.log("header rendered");
  //if no dependency array- useEffect called on every render
  //if empty depdency array- useEffect called initially(once)
  //if reactbtn updates useEffect called on reactBtn update
  // useEffect(() => {
  //   console.log("useEffect call");
  // }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              reactBtnName === "Login"
                ? setReactBtnName("Logout")
                : setReactBtnName("Login");
            }}
          >
            {reactBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
