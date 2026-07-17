import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log(props);
    console.log(props.name, "child constructor");
    super(props);
    // console.log(props);

    this.state = {
      count1: 1,
      count2: 2,
      userInfo: {
        name: "dummy",
        location: "location",
      },
    };
  }
  async componentDidMount() {
    console.log(this.props.name, "child component did mount");
    // debugger;
    const response = await fetch(
      "https://api.github.com/users/jonasschmedtmann",
    );
    const data = await response.json();
    console.log(data);

    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("compoent will unmount");
  }
  render() {
    console.log(this.props.name, "child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count1: {count1}</h1> */}
        {/* <h1>Count2:{count2}</h1> */}

        {/* <button
          onClick={() =>
            this.setState({
              count1: this.state.count1 + 1,
            })
          }
        >
          increaseCount
        </button> */}
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Contact: @messi10</h2>
      </div>
    );
  }
}

export default UserClass;
