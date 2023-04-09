import React, { useEffect, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchCart,
  refreshCart,
  setOrder,
  setError
} from "./store/MainSlice";
import Theme from "./Theme.js";
import Loading from "./components/Loading";
import commerce from "./lib/commerce"
const ErrorPage = lazy(() => import("./error-page"));
const Products = lazy(() => import("./components/products/Products"));
const Navbar = lazy(() => import("./components/products/Navbar/Navbar"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Checkout = lazy(() =>
  import("./components/CheckoutForm/Checkout/Checkout")
);

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
    if (!isLoading) {
      Dispatch(fetchCart());
    } else {
      Dispatch(fetchProducts());
    }
  }, [isLoading]);
  if (isLoading) {
    return <Loading height="95vh"/>;
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
          <Suspense fallback={<Loading height="95vh"/>}>
            <RouterProvider router={router}></RouterProvider>
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
