import React, { Component } from "react";
import "./MainContent.css";
import MainPage from "../MainPage/MainPage";

import Suggestions from "../Suggestions/Suggestions";
import { Col, Row } from "antd";
import GroupsListView from "../../Groups/GroupsListView";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <Row>
      //   <Col span={15}>
      //     <div style={{ margin: "64px" }}>
      //       <MainPage />
      //     </div>
      //   </Col>
      //   <Col span={2} />
      //   <Col span={7}>
      //     <Suggestions />
      //   </Col>
      // </Row>
      <div
        style={{
          width: "90vw",
          height: "auto",
          display: "flex",
          padding: "16px",
        }}
      >
        <div
          style={{
            flexx: 3,
          }}
        >
          <MainPage />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
    
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default MainContent;
