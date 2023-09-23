import React, { useState, useContext } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress
} from "@mui/material";

import Image from "next/image";
import commerce from "../../../lib/commerce";
import { styled } from "@mui/material/styles";
import { cartContext } from "../../ContextProvider";
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
  // Qty stands for quantity
  const [qtySpinner, setQtySpinner] = useState(false);
  const [removeSpinner, setRemoveSpinner] = useState(false);
  const { cartFetcher } = useContext(cartContext);

  const handleRemoveFromCart = () => {
    setRemoveSpinner(true);
    commerce.cart
      .remove(item.id)
      .then(() => cartFetcher())
      .then(() => setRemoveSpinner(false))
      .catch((err) => {
        setRemoveSpinner(false);
      });
  };
  const handleupdateCartQty = (Qty) => {
    setQtySpinner(true);
    commerce.cart
      .update(item.id, { quantity: Qty })
      .then(() => cartFetcher())
      .then(() => setQtySpinner(false))
      .catch((err) => {
        setQtySpinner(false);
      });
  };

  return (
    <Card>
      <CardMedia
        sx={{
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          height: 260
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            alt={item.name}
            src={`${item.image.url}`}
            style={{ objectFit: "contain" }}
            fill
            sizes="260"
            priority
          />
        </div>
      </CardMedia>
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
            size="medium"
            color="secondary"
            onClick={() => handleupdateCartQty(item.quantity - 1)}
            disabled={qtySpinner}
          >
            -
          </Button>
          {qtySpinner ? (
            <CircularProgress
              sx={{ width: "30px !important", height: "30px !important" }}
            />
          ) : (
            <Typography>{item.quantity}</Typography>
          )}

          <Button
            size="medium"
            type="button"
            onClick={() => handleupdateCartQty(item.quantity + 1)}
            disabled={qtySpinner}
          >
            +
          </Button>
        </DivButtons>
        <Button
          variant="contained"
          type="button"
          onClick={handleRemoveFromCart}
          disabled={removeSpinner}
        >
          {removeSpinner ? (
            <CircularProgress
              sx={{
                marginRight: "10px",
                marginLeft: "10px",
                width: "25px !important",
                height: "25px !important",
                color: "black"
              }}
            />
          ) : (
            "Remove"
          )}
        </Button>
      </CardActionsCartActions>
    </Card>
  );
};

export default CartItem;
