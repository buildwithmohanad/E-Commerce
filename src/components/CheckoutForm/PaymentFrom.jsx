import React,{useContext} from "react";
import { Typography, Button, Divider } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import commerce from "../../lib/commerce";
import { cartContext } from "@/components/ContextProvider";
import Review from "./Review"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const PaymentFrom = ({
  shippingData,
  checkoutToken,
  nextStep,
  backStep,
  timeout,
  setOrder,
  setError
}) => {
  const { cartRefresher } = useContext(cartContext);
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, {
        ...newOrder
      });

      setOrder(incomingOrder);
      cartRefresher()
    } catch (error) {
      setError(error.message)
      console.log(error)
    }
  };

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    if (error) {
      setError(error)
      console.log(error)
    } else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email
        },
        shipping: {
          name: "International",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id
          }
        }
      };
      handleCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }
  };
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => {
            return (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br /> <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="outlined"
                   
                    onClick={backStep}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!stripe}
                   
                  >
                    Pay {checkoutToken.subtotal.formatted_with_symbol}
                  </Button>
                </div>
              </form>
            );
          }}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentFrom;
