import React, { useEffect, useState } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchCart,
  refreshCart,
  setOrder,
  setError
} from "./store/MainSlice";
import commerce from "./lib/commerce";
import Theme from "./Theme.js";
import ErrorPage from "./error-page";
import Products from "./components/products/Products";
import Navbar from "./components/products/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
function App() {
  const Dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.MainSlice);

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, {
        ...newOrder
      });

      Dispatch(setOrder(incomingOrder));
      Dispatch(refreshCart());
    } catch (error) {
      Dispatch(setError(error));
    }
  };
  useEffect(() => {
    Dispatch(fetchProducts());
    Dispatch(fetchCart());
  }, []);
  if (isLoading) {
    return (
      <Typography style={{ flexGrow: 1, textAlign: "center" }}>
        Loading..
      </Typography>
    );
  }
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/E-Commerce",
          element: <Products />
        },
        {
          path: "/E-Commerce/cart",
          element: <Cart />
        },
        {
          path: "/E-Commerce/checkout",
          element: <Checkout handleCaptureCheckout={handleCaptureCheckout} />
        }
      ]
    }
  ]);

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
