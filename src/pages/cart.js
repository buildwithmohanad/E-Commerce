'use client';
import React,{useContext, useState} from "react";
import { Container, Typography, Button, Grid, Toolbar } from "@mui/material";
import { CircularProgress } from "@mui/material";
import useSWR from "swr";

import Link from "next/link";
import { cartContext } from "../components/ContextProvider";
import { styled } from "@mui/material/styles";
import CartItem from "../components/Cart/CartItem/CartItem"
import Loading from "../components/Loading";
import commerce from "../lib/commerce"
const ButtonEmptyButton = styled(Button)(({ theme }) => ({
  minWidth: "150px",
  marginBottom: "5px !important",
  marginRight: "20px  !important"
}));

const ButtonCheckoutButton = styled(Button)(({ theme }) => ({
  minWidth: "150px",
  marginBottom: "5px !important",
  backgroundColor: "#2e4ca5 !important"
}));

const DivCardDetails = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "10%",
  width: "100%",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }
}));

const Cart = () => {
  const [spinner, setSpinner] = useState(false);
  const { cart, setCart,cartFetcher } = useContext(cartContext);

  const handleClearCart = () => {
    setSpinner(true);
    commerce.cart.empty().then(() => cartFetcher()).then(() => setSpinner(false))
    .catch((err) => {
      setSpinner(false);
    });
  };
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You Have no items in your shopping cart,
      <Link href="/" style={{ textDecoration: "none" }}>
        start adding some!
      </Link>
    </Typography>
  );
  const FilledCart = ({data}) => {console.log(data);return (
    <>
      <Grid container spacing={3}>
        {data.line_items.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <DivCardDetails>
        <Typography variant="h4" sx={{marginBottom: 2}}>
          Subtotal: {data.subtotal.formatted_with_symbol}
        </Typography>
        <div>
       
              <ButtonEmptyButton
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleClearCart}
            >
               {spinner ? (
              <CircularProgress sx={{width: "30px !important", height: "30px !important", color: "white"}}/>
            ) : 
              "Clear cart" }
            </ButtonEmptyButton> 
          <Link
            href="/E-Commerce/checkout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ButtonCheckoutButton
              size="large"
              type="button"
              variant="contained"
            >
              Checkout
            </ButtonCheckoutButton>
          </Link>
        </div>
      </DivCardDetails>
    </>
  )};
  console.log(cart.line_items)
  return (
    <Container>
      <Toolbar />
      <Typography style={{ marginTop: "5%" }} variant="h3" gutterBottom>
        Your ShoppingCart
      </Typography>
      { cart.line_items ? !cart.line_items.length ? <EmptyCart /> : <FilledCart data={cart} /> :  <Loading height="50vh"/>}
    </Container>
  );
};
export default Cart;