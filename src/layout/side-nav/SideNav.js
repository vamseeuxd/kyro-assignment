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
  Logout,
  Person,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import Localization from "../../localization/LocalizedMessage";
import ChangeLanguage from "../../localization/changeLanguage";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -30,
    top: 13,
  },
}));

export function SideNav({ children }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const renderDrawHeader = () => {
    return (
      <>
        <div className="w-100 d-flex flex-row justify-content-between align-items-center px-4 pt-3">
          <img alt="Logo" src="./logo.png" className="logo" />
          <IconButton className="text-dark" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        </div>
        <ChangeLanguage />
      </>
    );
  };

  const getActiveMenuClass = (path) => {
    return splitLocation[1] === path ? "mb-2 bg-danger text-white" : "mb-2";
  };

  const getActiveMenuIconClass = (path) => {
    return splitLocation[1] === path ? "text-white" : "";
  };

  const renderHomeMenu = () => {
    return (
      <Link to="/" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("")}>
          <ListItemIcon className={getActiveMenuIconClass("")}>
            <Home fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="home" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderProjectsMenu = () => {
    return (
      <Link to="/projects" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("projects")}>
          <ListItemIcon className={getActiveMenuIconClass("projects")}>
            <PendingActions fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="Projects" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderDashboardMenu = () => {
    return (
      <Link to="/dashboard" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("dashboard")}>
          <ListItemIcon className={getActiveMenuIconClass("dashboard")}>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="Dashboard" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderMessagesMenu = () => {
    return (
      <Link to="/messages" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("messages")}>
          <StyledBadge color="error" badgeContent={6}>
            <ListItemIcon className={getActiveMenuIconClass("messages")}>
              <Forum fontSize="small" />
            </ListItemIcon>
            <ListItemText>{<Localization of="Messages" />}</ListItemText>
          </StyledBadge>
        </MenuItem>
      </Link>
    );
  };

  const renderDocumentsMenu = () => {
    return (
      <Link to="/documents" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("documents")}>
          <ListItemIcon className={getActiveMenuIconClass("documents")}>
            <TextSnippet fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="Documents" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderOrganizationsMenu = () => {
    return (
      <Link to="/organizations" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("organizations")}>
          <ListItemIcon className={getActiveMenuIconClass("organizations")}>
            <Apartment fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="Organizations" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderSettingsMenu = () => {
    return (
      <Link to="/settings" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("settings")}>
          <ListItemIcon className={getActiveMenuIconClass("settings")}>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="Settings" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderMyProfileMenu = () => {
    return (
      <Link to="/myProfile" className="text-decoration-none text-reset">
        <MenuItem className={getActiveMenuClass("myProfile")}>
          <ListItemIcon className={getActiveMenuIconClass("myProfile")}>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText>{<Localization of="MyProfile" />}</ListItemText>
        </MenuItem>
      </Link>
    );
  };

  const renderLogoutMenu = () => {
    return (
      <MenuItem disabled className="mt-auto">
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <ListItemText>{<Localization of="Logout" />}</ListItemText>
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
              width: 220,
              marginTop: "30px",
              maxWidth: "220px",
              height: "calc(100% - 90px)",
            }}
          >
            <MenuList className="h-100 d-flex flex-column">
              {renderHomeMenu()}
              {renderProjectsMenu()}
              {renderDashboardMenu()}
              {renderMessagesMenu()}
              {renderDocumentsMenu()}
              {renderOrganizationsMenu()}
              {renderSettingsMenu()}
              {renderMyProfileMenu()}
              {renderLogoutMenu()}
            </MenuList>
          </Paper>
        </Drawer>
      </React.Fragment>
    );
  };

  return (
    <div className="bg-light vw-100 vh-100 d-flex px-2">
      {renderSieNav()}
      <div
        className="w-100 main-content"
        style={{ marginLeft: open ? "220px" : "40px" }}
      >
        {children}
      </div>
    </div>
  );
}
