import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render ");
    return (
      <div>
        <h1>Welecome on the About Us</h1>
        <UserClass name={"Kyllian Mabappe"} location={"France"} />
      </div>
    );
  }
}

export default About;
