import React from "react";
import { Container, Typography, Button, Grid, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { emptyCart } from "../../store/MainSlice";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
const CartItem = React.lazy(() => import("./Cartitem/Cartitem.jsx"))
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
  const { cartData } = useSelector((state) => state.MainSlice);
  const Dispatch = useDispatch();
  const handleEmptyCart = () => {
    Dispatch(emptyCart());
  };
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You Have no items in your shopping cart,
      <Link to="/E-Commerce/" style={{ textDecoration: "none" }}>
        start adding some!
      </Link>
    </Typography>
  );
  if (!cartData.line_items) return <Loading />;

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartData.line_items.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <DivCardDetails>
        <Typography variant="h4">
          Subtotal: {cartData.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <ButtonEmptyButton
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            EMPTY CART
          </ButtonEmptyButton>
          <Link
            to="/E-Commerce/checkout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ButtonCheckoutButton
              size="large"
              type="button"
              variant="contained"
            >
              CHECKOUT
            </ButtonCheckoutButton>
          </Link>
        </div>
      </DivCardDetails>
    </>
  );
  return (
    <Container>
      <Toolbar />
      <Typography style={{ marginTop: "5%" }} variant="h3" gutterBottom>
        Your ShoppingCart
      </Typography>
      {!cartData.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
