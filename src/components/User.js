import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: France</h2>
      <h2>Contact: @mbappe10</h2>
    </div>
  );
};

export default User;
