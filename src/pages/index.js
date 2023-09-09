import React, { useEffect, Suspense, lazy } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchProducts,
//   fetchCart,
//   refreshCart,
//   setOrder,
//   setError
// } from "../store/MainSlice";
// import Loading from "../components/Loading";
import Products from "../components/products/Products";
import commerce from "../lib/commerce";


export default function App({ productsData }) {
  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(checkoutTokenId, {
  //       ...newOrder
  //     });

  //     Dispatch(setOrder(incomingOrder));
  //     Dispatch(refreshCart());
  //   } catch (error) {
  //     Dispatch(setError(error));
  //   }
  // };

  // useEffect(
  //   () => {
  //     if (!isLoading) {
  //       Dispatch(fetchCart());
  //     } else {
  //       Dispatch(fetchProducts());
  //     }
  //   },
  //   [isLoading]
  // );
  // if (isLoading) {
  //   return <Loading height="95vh" />;
  // }
  return (
    <main>
           <Products productsData={productsData.data} />

    </main>
  );
}

export async function getStaticProps() {
   const productsData = await commerce.products.list();
  // const productsData = {data: [
  //   {
  //     id: 1,
  //     name: "fsdf",
  //     description: "sdfaerfewrwarew",
  //     image: {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiQ2ZfA7_7wTe2e2m38bZJ5DwbRQH20sfyrUGR_4RUw2JDiR1eBFWW84S1H673RkWwqY&usqp=CAU" },
  //     price: {formatted_with_symbol: 25}
  //   }
  // ]};
  
  return {
    props: {
      productsData
    }
  };
}
