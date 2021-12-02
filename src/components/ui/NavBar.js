import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import green from "@material-ui/core/colors/green";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./nav.css";
import { Box, Button } from "@material-ui/core";
export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav style={{ width: "100%" }}>
      <Box display="flex" p={1}>
        <Box p={1} flexGrow={1}>
          <NavLink exact to="/pokedex">
            <Button>
              <HomeIcon style={{ fontSize: 35, color: green[900] }} />
            </Button>
          </NavLink>
        </Box>
        <Box p={2}>
          <Button>
            <span className="name-nav">{name}</span>
          </Button>
        </Box>
        <Box p={2}>
          <AccountCircleIcon style={{ fontSize: 35, color: green[900] }} />
        </Box>
        <Box p={1}>
          <Button onClick={handleLogout}>
            <ExitToAppIcon style={{ fontSize: 35, color: green[900] }} />
          </Button>
        </Box>
      </Box>
    </nav>
  );
};
