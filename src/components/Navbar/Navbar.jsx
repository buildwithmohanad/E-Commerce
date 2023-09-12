"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/commerce.svg";
import { styled } from "@mui/material/styles";
import commerce from "../../lib/commerce";
import { cartContext } from "../ContextProvider.js";

const drawerWidth = 0;
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",

  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  }
}));

const TypographyTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  textDecoration: "none"
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center"
}));

const LogoImage = styled(Image)(({ theme }) => ({
  marginRight: "10px",
  height: "25px",
  width: "fit-content"
}));

const DivGrow = styled("div")(({ theme }) => ({
  flexGrow: 1
}));

export default function Navbar() {
  const { cart, setCart, cartFetcher } = React.useContext(cartContext);


  
  let Router = useRouter();
  useSWR(cartFetcher);
 
  // if data is fetched > if cart has elements > return the number
  let badgeContent = cart ? (cart.total_items ? cart.total_items : null) : null;
  return (
    <>
      <StyledAppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <TypographyTitle variant="h6" color="inherit">
            <StyledLink href="/">
              <LogoImage src={Logo} alt="Commerce.js" />
              Commerce.js
            </StyledLink>
          </TypographyTitle>

          <DivGrow />
          {Router.pathname === "/" && (
            <div>
              <IconButton
                LinkComponent={Link}
                href="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge
                  badgeContent={
                   badgeContent
                  }
                  color="error"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </StyledAppBar>
    </>
  );
}
