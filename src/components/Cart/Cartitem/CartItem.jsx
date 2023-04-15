import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@mui/material";
import { removeFromCart, updateCartQty } from "../../../store/MainSlice";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
const CardMediaMedia = styled(CardMedia)(({ theme }) => ({
  height: 260,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat"
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between"
}));

const CardActionsCartActions = styled(CardActions)(({ theme }) => ({
  justifyContent: "space-between"
}));

const DivButtons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center"
}));
const CartItem = ({ item }) => {
  const Dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    Dispatch(removeFromCart(item.id));
  };
  const handleupdateCartQty = (Qty) => {
    let params = { id: item.id, quantity: { quantity: Qty } };
    Dispatch(updateCartQty(params));
  };

  return (
    <Card>
      <CardMediaMedia
        image={item.image.url}
        alt={item.name}
        sx={{ backgroundSize: "contain ", backgroundRepeat: "no-repeat" }}
      />
      <StyledCardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </StyledCardContent>
      <CardActionsCartActions>
        <DivButtons>
          <Button
            type="button"
            size="small"
            onClick={() => handleupdateCartQty(item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            size="small"
            type="button"
            onClick={() => handleupdateCartQty(item.quantity + 1)}
          >
            +
          </Button>
        </DivButtons>
        <Button
          variant="contained"
          type="button"
          onClick={handleRemoveFromCart}
        >
          Remove
        </Button>
      </CardActionsCartActions>
    </Card>
  );
};

export default CartItem;
