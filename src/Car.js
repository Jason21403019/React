import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  buttonHandler() {
    this.setState({ color: "white" });
  }
  render() {
    return (
      <div>
        {" "}
        <h2>
          I am a {this.props.brand}
          {this.state.color} CAR.
        </h2>
        <button onClick={this.buttonHandler}>click me</button>
      </div>
    );
  }
}
export default Car;
