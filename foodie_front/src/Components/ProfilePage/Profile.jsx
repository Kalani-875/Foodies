import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Backdrop,
} from "@mui/material";
import CircleAvatar from "./CircleAvatar";
import User from "../../model/User";
import Loading from "../Loading";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";
import { Grid } from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const id = localStorage.getItem("uid");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setMobileNumber(response.data.mobileNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = new User(
      user.id,
      user.username,
      email,
      firstName,
      lastName,
      user.profilePictureImageUrl,
      address,
      mobileNumber
    );
    axios
      .put(`http://localhost:8080/api/users/${id}`, updatedUser)
      .then((response) => {
        setUser(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setMobileNumber(response.data.mobileNumber);
        alert("User data updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/users/${id}`)
      .then((response) => {
        alert("User data deleted successfully");
        localStorage.clear();
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <NavBar />
        <div className="profile-container">
          <Card
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: "64px",
              borderRadius: "32px",
              color: "white",
            }}
            className="profile-card"
          >
            <CardContent
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                Backdrop: "blur(8px);",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: "32px",
                  padding: "16px"
                }}
              >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Grid item xs={12}>
                    <CircleAvatar
                      imageUrl={user.profilePictureImageUrl}
                      size={100}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      gutterBottom
                    >
                      {user.email}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      gutterBottom
                    >
                      {user.address}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      gutterBottom
                    >
                      {user.mobileNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            style={{
                              margin: "8px 0",
                            }}
                            sx={{ color: "white" }}
                            label="First Name"
                            value={firstName}
                            onChange={(event) =>
                              setFirstName(event.target.value)
                            }
                            className="profile-input"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            style={{
                              margin: "8px 0",
                            }}
                            label="Last Name"
                            value={lastName}
                            onChange={(event) =>
                              setLastName(event.target.value)
                            }
                            className="profile-input"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            style={{
                              margin: "8px 0",
                            }}
                            label="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="profile-input"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            style={{
                              margin: "8px 0",
                            }}
                            label="Address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            className="profile-input"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        label="Mobile Number"
                        value={mobileNumber}
                        onChange={(event) =>
                          setMobileNumber(event.target.value)
                        }
                        className="profile-input"
                        fullWidth
                      />
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div style={{ flex: 1 }} />
                        <div style={{ flex: 1 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="profile-submit-btn"
                            fullWidth
                          >
                            Update
                          </Button>
                        </div>
                        <div style={{ flex: 1 }} />
                        <div style={{ flex: 1 }}>
                          <Button
                            onClick={handleDelete}
                            variant="outlined"
                            className="profile-delete-btn"
                            fullWidth
                          >
                            Delete
                          </Button>
                        </div>
                        <div style={{ flex: 1 }} />
                      </div>
                    </form>
                  </Grid>
                </Grid>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
