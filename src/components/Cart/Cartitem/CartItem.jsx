import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@mui/material";
import {removeFromCart ,updateCartQty} from "../../../store/MainSlice"
import { useDispatch } from "react-redux";
import useStyles from "./styles";
const CartItem = ({ item }) => {
  const classes = useStyles();
  const Dispatch = useDispatch()
  const handleRemoveFromCart = () => {
    Dispatch(removeFromCart(item.id))
  }
  const handleupdateCartQty = ( Qty) => {
    let params = {id: item.id, quantity: {quantity:Qty}}
    Dispatch(updateCartQty(params))

  }

  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
        sx={{ backgroundSize: "contain ", backgroundRepeat: "no-repeat" }}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" 
          onClick={() => handleupdateCartQty( item.quantity -1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button size="small" type="button" color="secondary" 
          onClick={() => handleupdateCartQty( item.quantity +1)}
          >
            +
          </Button>
        </div>
        <Button variant="contained" type="button" 
        onClick={handleRemoveFromCart} 
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
