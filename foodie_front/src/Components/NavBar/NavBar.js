import React, { useState } from "react";
import "./NavBar.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import dp from "../../images/dp6.png";
import config from "../../config";
import { useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import { Button } from "antd";

const NavBar = ({ dp }) => {
  const [state, setState] = useState({});

  const navigate = useNavigate();
  const _id = localStorage.getItem("uid");
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding : "0 16px"
        }}
        className="navbar__barContent"
      >
        <Title
          onClick={(e) => {
            navigate("/");
          }}
          className="navbar_logo"
          level={1}
          style={{
            color: "yellow",
          }}
        >
          Food Zaga
        </Title>
        <div style={{flex : 1}}/>
        <Avatar
          onClick={() => {
            navigate(`/profile/${_id}`);
          }}
          src={dp ?? config.noDp}
          className="navbar__img"
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
