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
import { addToCart, fetchCart } from "../../../store/MainSlice";
import useStyles from "./styles";
function Product({ product  }) {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const handleAddToCart = () => {

    Dispatch(addToCart(product.id));
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
        sx={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />

        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to card" 
          onClick={handleAddToCart}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Product;
