import React from "react";
import { render, screen, waitFor, prettyDOM } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index.js";
import App from "../../App.jsx";

test("loads and displays Products", async () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  expect(screen.getByTestId("circularLoading")).toBeInTheDocument(); //works
  await waitFor(
    () => {
      return expect(screen.findByTestId(/product/i)).toBeInTheDocument(); // fails
    },
    { timeout: 120000 }
  );

  const Products = await screen.findAllByTestId(/product/i);

  expect(Products.length).toEqual(8);
},120000);
