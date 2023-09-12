import React from "react";

import Products from "../components/products/Products";
import commerce from "../lib/commerce";

export default function App({ productsData }) {
  return (
    <main>
      <Products productsData={productsData.data} />
    </main>
  );
}

export async function getStaticProps() {
  const productsData = await commerce.products.list();
  return {
    props: {
      productsData
    }
  };
}
