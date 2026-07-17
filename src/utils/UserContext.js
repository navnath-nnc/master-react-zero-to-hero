import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Defualt User",
});

export default UserContext;
