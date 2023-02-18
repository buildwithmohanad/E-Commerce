import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography
} from "@mui/material";
import { useSelector } from "react-redux";

import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation, Outlet } from "react-router-dom";
import Logo from "../../../assets/commerce.png";
import useStyles from "./styles";
function Navbar( ) {
  const classes = useStyles();
  const Location = useLocation();
  const {cartData} = useSelector(state => state.MainSlice)

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/" style={{ textDecoration: "none", color:"inherit" }}>
              <img
                src={Logo}
                alt="Commerce.js"
                height="25px"
                className={classes.image}
              />
              Commerce.js
            </Link>
          </Typography>

          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                LinkComponent={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={cartData.total_items} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Navbar;
