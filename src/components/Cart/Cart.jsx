import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useTheme } from "@material-ui/core/styles";
import Cartitem from "./Cartitem/Cartitem";
import { emptyCart } from "../../store/MainSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const classes = useStyles();
  const { cartData } = useSelector((state) => state.MainSlice);
  const Dispatch = useDispatch();
  const handleEmptyCart = () => {
    Dispatch(emptyCart());
  };
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You Have no items in your shopping cart,
      <Link to="/" className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );
  if (!cartData.line_items) return "Loading";

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartData.line_items.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Cartitem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cartData.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            onClick={handleEmptyCart}
          >
            EMPTY CART
          </Button>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
            >
              CHECKOUT
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your ShoppingCart
      </Typography>
      {!cartData.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
