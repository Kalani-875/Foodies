import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import config from "../../config";
class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button
          style={{ cursor: "pointer" }}
          className="login__button"
          onClick={(e) => {
            e.preventDefault();
            console.log("ÄSdajsd");
            window.location.href = `${config.baseUrl}/users`;
          }}
        >
          Log In
        </button>
      </div>
    );
  }
}

export default SignIN;
