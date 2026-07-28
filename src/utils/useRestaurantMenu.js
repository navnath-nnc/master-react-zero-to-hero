import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const userRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchData = async function () {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
    console.log("menu-data", json.data);
  };

  return resInfo;
};

export default userRestaurantMenu;
