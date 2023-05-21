import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@mui/material/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import SignIN from "../SignIn/SignIN";
import SignUp from "../SignUp/SignUp";
import { useNavigate } from "react-router-dom";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    const navigate = useNavigate();
    localStorage.setItem("users", "asd");
    navigate("/");
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
                  }
                  width="450px"
                />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img
                    className="loginpage__logo"
                    src={
                      "https://yt3.googleusercontent.com/ytc/AGIKgqN2mSr-5HfhYdQLSj_KYpgpxy8hijd8PZbRmkW5=s900-c-k-c0x00ffffff-no-rj"
                    }
                  />
                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIN /> : <SignUp />}

                    <div className="login__ordiv">
                      <div className="login__dividor"></div>

                      <div className="login__dividor"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}
export default LoginPage;
