import React, { Component } from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
import CreatePost from "../CreatePost/CreatePost";
import AdvertisementCarausel from "../Advertisement/AdvertisementCarausel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
            width : "100vw",
            display : "flex",
            flexDirection : "column",
            backgroundColor : "black",
        }}
      >
        <NavBar />
        <AdvertisementCarausel />
        <CreatePost />
        <MainContent />
      </div>
    );
  }
}

export default Home;
