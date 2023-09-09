import React from "react";
import { Grid, Toolbar } from "@mui/material";
import Product from "./Product/Product";
import { styled } from '@mui/material/styles';

export const  MainContent = styled("main")(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
}));
export default function Products({productsData}) {
  return (
  <MainContent>
    <Toolbar  />
    <Grid container justifyContent="center" spacing={4}>
      {productsData.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </MainContent>
  )
}

