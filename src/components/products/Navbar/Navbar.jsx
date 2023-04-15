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
import { styled } from '@mui/material/styles';

const drawerWidth = 0;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",

  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const TypographyTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
}));

const ImgImage = styled("img")(({ theme }) => ({
  marginRight: "10px",
}));

const DivGrow = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));
function Navbar( ) {
  let location = useLocation();
  const {cartData} = useSelector(state => state.MainSlice)
  let badgeContent = cartData.total_items ? cartData.total_items : null
  return (
    <>
    <StyledAppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar>
        <TypographyTitle variant="h6" color="inherit">
          <StyledLink to="/E-Commerce/">
            <ImgImage src={Logo} alt="Commerce.js" height="25px" />
            Commerce.js
          </StyledLink>
        </TypographyTitle>
  
        <DivGrow />
        {location.pathname === "/E-Commerce/" && (
          <div >
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
    </StyledAppBar>
    <Outlet />
  </>
  );
}

export default Navbar;
