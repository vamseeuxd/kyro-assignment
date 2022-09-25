import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import "./SideNav.css";
import React, { useState } from "react";
import {
  Apartment,
  Settings,
  TextSnippet,
  Forum,
  PendingActions,
  Dashboard,
  Home,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -30,
    top: 13,
  },
}));

export function SideNav({ children }) {
  const [open, setOpen] = useState(true);

  const renderDrawHeader = () => {
    return (
      <div className="w-100 d-flex flex-row justify-content-between align-items-center px-4 pt-3">
        <img alt="Logo" src="./logo.png" className="logo" />
        <IconButton className="text-dark" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </IconButton>
      </div>
    );
  };

  const renderHomeMenu = () => {
    return (
      <MenuItem className="mb-2">
        <ListItemIcon>
          <Home fontSize="small" />
        </ListItemIcon>
        <ListItemText>Home</ListItemText>
      </MenuItem>
    );
  };

  const renderProjectsMenu = () => {
    return (
      <MenuItem className="mb-2">
        <ListItemIcon>
          <PendingActions fontSize="small" />
        </ListItemIcon>
        <ListItemText>Projects</ListItemText>
      </MenuItem>
    );
  };

  const renderDashboardMenu = () => {
    return (
      <MenuItem className="mb-2">
        <ListItemIcon>
          <Dashboard fontSize="small" />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </MenuItem>
    );
  };

  const renderMessagesMenu = () => {
    return (
      <MenuItem className="mb-2">
        <StyledBadge color="error" badgeContent={6}>
          <ListItemIcon>
            <Forum fontSize="small" />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </StyledBadge>
      </MenuItem>
    );
  };

  const renderDocumentsMenu = () => {
    return (
      <MenuItem className="mb-2">
        <ListItemIcon>
          <TextSnippet fontSize="small" />
        </ListItemIcon>
        <ListItemText>Documents</ListItemText>
      </MenuItem>
    );
  };

  const renderOrganizationsMenu = () => {
    return (
      <MenuItem className="mb-2">
        <ListItemIcon>
          <Apartment fontSize="small" />
        </ListItemIcon>
        <ListItemText>Organizations</ListItemText>
      </MenuItem>
    );
  };

  const renderSettingsMenu = () => {
    return (
      <MenuItem className="mb-2">
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
    );
  };

  const renderSieNav = () => {
    return (
      <React.Fragment>
        <IconButton
          className="text-dark toggle-menu-button"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          {renderDrawHeader()}
          <Paper
            sx={{
              width: 250,
              marginTop: "30px",
              maxWidth: "100%",
              height: "calc(100% - 90px)",
            }}
          >
            <MenuList>
              {renderHomeMenu()}
              {renderProjectsMenu()}
              {renderDashboardMenu()}
              {renderMessagesMenu()}
              {renderDocumentsMenu()}
              {renderOrganizationsMenu()}
              {renderSettingsMenu()}
            </MenuList>
          </Paper>
        </Drawer>
      </React.Fragment>
    );
  };

  return (
    <div className="bg-light vw-100 vh-100 d-flex">
      {renderSieNav()}
      <div
        className="w-100 main-content"
        style={{ marginLeft: open ? "270px" : "40px" }}
      >
        {children}
      </div>
    </div>
  );
}
