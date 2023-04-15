import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { addToCart } from "../../../store/MainSlice";
import { styled } from '@mui/material/styles';

const CardRoot = styled(Card)(() => ({
  maxWidth: "100%",
}));

const CardMediaMedia = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: "56.25%",
}));

const StyledCardActions = styled(CardActions)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

const DivCardContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
function Product({ product }) {
  const Dispatch = useDispatch();
  const handleAddToCart = () => {
    Dispatch(addToCart(product.id));
  };
  return (<CardRoot data-testid={`product-${product.id}`}>
  <CardMediaMedia
    image={product.image.url}
    title={product.name}
    sx={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
  />
  <CardContent>
    <DivCardContent>
      <Typography variant="h5" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {product.price.formatted_with_symbol}
      </Typography>
    </DivCardContent>
    <Typography
      dangerouslySetInnerHTML={{ __html: product.description }}
      variant="body2"
      color="textSecondary"
      component="p"
    />

    <StyledCardActions disableSpacing>
      <IconButton
        aria-label="Add to card"
        sx={{
          ":hover": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={handleAddToCart}
      >
        <AddShoppingCart />
      </IconButton>
    </StyledCardActions>
  </CardContent>
</CardRoot>)

      }

export default Product;
