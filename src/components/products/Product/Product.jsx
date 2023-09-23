import React, { useContext, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@mui/material";
import Image from "next/image";
import { AddShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import commerce from "../../../lib/commerce";
import { CircularProgress } from "@mui/material";
import { cartContext } from "../../ContextProvider";

const CardRoot = styled(Card)(() => ({
  maxWidth: "100%"
}));

const CardMediaMedia = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: "56.25%"
}));

const StyledCardActions = styled(CardActions)(() => ({
  display: "flex",
  justifyContent: "flex-end"
}));

const DivCardContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between"
}));
function Product({ product }) {
  const [spinner, setSpinner] = useState(false);
  const { cart, setCart, cartFetcher } = useContext(cartContext);

  const handleAddToCart = async () => {
    setSpinner(true);
    await commerce.cart
      .add(product.id, 1)
      .then(() => cartFetcher())
      .then(() => {
        setSpinner(false);
      })
      .catch((err) => {
        setSpinner(false);
      });
    cartFetcher();
  };
  return (
    <CardRoot data-testid={`product-${product.id}`}>
      <CardMedia
        sx={{
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          height: 260
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            alt={product.name}
            src={`${product.image.url}`}
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 25vw"
            fill
            priority
          />
        </div>
      </CardMedia>

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
          component="div"
        />

        <StyledCardActions disableSpacing>
          <IconButton
            aria-label="Add to card"
            sx={{
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.2)"
              }
            }}
            onClick={handleAddToCart}
            disabled={spinner}
          >
            {spinner ? (
              <CircularProgress style={{ height: "1.8rem", width: "1.8rem" }} />
            ) : (
              <AddShoppingCart />
            )}
          </IconButton>
        </StyledCardActions>
      </CardContent>
    </CardRoot>
  );
}

export default Product;
