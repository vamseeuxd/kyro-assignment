import React, { useEffect, useState } from "react";
import * as moment from "moment";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import {
  Person,
  AssignmentInd,
  Email,
  LocalPhone,
  LocationOn,
  Add,
  ArrowDropDown,
  CameraAlt,
} from "@mui/icons-material";
import "./MyProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, selectMyProfile } from "./MyProfileSlice";

function MyProfile() {
  const dispatch = useDispatch();
  const myProfile = useSelector(selectMyProfile);

  const formOptions = [
    { id: "firstName", label: "First Name", type: "text", icon: <Person /> },
    { id: "lastName", label: "Last Name", type: "text", icon: <Person /> },
    {
      id: "displayName",
      label: "Display Name",
      type: "text",
      icon: <AssignmentInd />,
    },
    { id: "email", label: "Email", type: "email", icon: <Email /> },
    {
      id: "phoneNoWork",
      label: "Phone No(work)",
      type: "tel",
      icon: <LocalPhone />,
    },
    {
      id: "phoneNoHome",
      label: "Phone No(Home)",
      type: "tel",
      icon: <LocalPhone />,
    },
    { id: "location", label: "Location", type: "text", icon: <LocationOn /> },
  ];

  const [formData, setFormData] = useState(myProfile);

  useEffect(() => {
    dispatch(getProfile("1"));
  }, []);

  useEffect(() => {
    setFormData(myProfile);
  }, [myProfile]);

  const updateFormData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const getTimeOfTheTime = () => {
    const [hour, am_pm] = moment().format("h,A").split(",");
    let dateOut;
    if (am_pm.toLowerCase() === "am") {
      dateOut = `Good Morning`;
    } else {
      if (hour === 12 || hour < 6) {
        dateOut = `Good Afternoon`;
      } else {
        dateOut = `Good Evening`;
      }
    }
    return dateOut;
  };

  const renderForm = () => {
    return (
      <div className="d-flex flex-row">
        <div className="d-flex flex-column w-75">
          <h5 className="ps-3 mt-3">My Profile</h5>
          <Paper
            className="w-100 p-3 d-flex flex-column"
            style={{ minHeight: "calc(100vh - 123px)" }}
          >
            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
            <div className="row">
              {formOptions.map(({ label, type, icon, id }) => {
                return (
                  <div className="col-md-6 mb-4" key={id}>
                    <TextField
                      id={id}
                      label={label}
                      onChange={updateFormData}
                      defaultValue={formData[id]}
                      type={type}
                      sx={{ m: 1, width: "100%" }}
                      InputProps={{
                        startAdornment: icon,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-auto text-center">
              <Button color="error" variant="contained">
                SAVE CHANGES
              </Button>
            </div>
          </Paper>
        </div>
        <div className="d-flex bg-light w-25">
          <div className="d-flex mx-auto my-auto flex-column justify-content-start align-items-center">
            <span className="position-relative">
              <img
                width="140"
                className="rounded shadow border"
                src="./Profile-Pic-square.jpg"
                alt="Profile-Pic-square"
              />
              <IconButton
                aria-label="CameraAlt"
                style={{ bottom: "10px", right: "0px" }}
                className="position-absolute bg-white"
              >
                <CameraAlt />
              </IconButton>
            </span>
            <h5 className="m-0 p-0 fw-bold mt-3">{formData.displayName}</h5>
            <p className="m-0 p-0 text-muted">{formData.email}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderMainContent = () => {
    return (
      <div className="d-flex flex-column w-100">
        {renderMainContentHeader()}
        {renderForm()}
      </div>
    );
  };

  const renderProfileDropDown = () => {
    return (
      <div className="d-flex flex-row justify-content-start align-items-center">
        <Button color="error" variant="contained" size="small">
          <Add /> ADD PROJECT
        </Button>
        <div>
          <div
            className="d-flex flex-row justify-content-start border shadow-sm align-items-center mx-2 px-1 py-1 position-relative rounded"
            role="button"
          >
            <img
              width="40"
              className="border border-secondary rounded shadow-sm me-2"
              src="./Profile-Pic-square.jpg"
              alt="Profile-Pic-square"
            />
            <div className="d-flex flex-column me-2">
              <span style={{ fontSize: "12px" }} className="m-0 p-0 fw-bold">
              {formData.displayName}
              </span>
              <span style={{ fontSize: "12px" }} className="m-0 p-0 text-muted">
                Project Manager
              </span>
            </div>
            <ArrowDropDown />
          </div>
        </div>
      </div>
    );
  };

  const renderMainContentHeader = () => {
    return (
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <div className="d-flex flex-column">
          <h6 className="m-0 p-0">{getTimeOfTheTime()}, Adam</h6>
          <p className="text-muted m-0 p-0">
            {moment().format("MMMM DD, YYYY")}
          </p>
        </div>
        {renderProfileDropDown()}
      </div>
    );
  };

  return <div className="d-flex flex-row">{renderMainContent()}</div>;
}

export default MyProfile;
