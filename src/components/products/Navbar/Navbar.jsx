import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography
} from "@mui/material";
import { useSelector } from "react-redux";
import { ShoppingCart } from "@mui/icons-material";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../../../assets/commerce.svg";
import useStyles from "./styles";
function Navbar( ) {
  const classes = useStyles();
  let location = useLocation();
  const {cartData} = useSelector(state => state.MainSlice)
  let badgeContent = cartData.total_items ? cartData.total_items : null
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
            <Link to="/E-Commerce/" className={classes.Link}>
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
          {location.pathname === "/E-Commerce/" && (
            <div className={classes.button}>
              <IconButton
                LinkComponent={Link}
                to="/E-Commerce/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={badgeContent} color="error">
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
