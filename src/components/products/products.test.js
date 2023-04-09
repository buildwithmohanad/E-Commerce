import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index.js";
import App from "../../App.jsx";

test("loads and displays Products", async () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
  expect(true).toBeTruthy()
  // expect(screen.getByTestId("circularLoading")).toBeInTheDocument();
  await screen.findAllByTestId("product")
  const Products = await screen.findAllByTestId("product");
 
  expect(Products.length).toEqual(8);
});
