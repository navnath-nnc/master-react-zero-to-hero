import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [reactBtnName, setReactBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);

  // console.log("header rendered");
  //if no dependency array- useEffect called on every render
  //if empty depdency array- useEffect called initially(once)
  //if reactbtn updates useEffect called on reactBtn update
  // useEffect(() => {
  //   console.log("useEffect call");
  // }, []);
  return (
    <div className="flex justify-between bg-green-100 shadow-lg sm:bg-amber-200 lg:bg-pink-100">
      <div className="logo-container">
        <img alt="logo" className="w-34" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart"> Cart - ({cartItems.length} Items) </Link>
          </li>
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
          <li className="px-4"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
