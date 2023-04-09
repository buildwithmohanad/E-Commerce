import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import useStyles from './styles'
import { useSelector } from "react-redux";

function Products() {
  const MainSlice = useSelector((state) => state.MainSlice);
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justifyContent="center" spacing={4}>
        {MainSlice.productsData.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
