import React, { useState, useEffect, Suspense, useContext } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  CssBaseline,
  Toolbar
} from "@mui/material";
import { useRouter } from 'next/navigation'
import Link  from "next/link";
import commerce from "../../../lib/commerce";
import Loading from "../../../pages/loading";
import { styled } from '@mui/material/styles';
import AddressForm from "../AddressForm";
import PaymentFrom from "../PaymentFrom"
import { cartContext } from "@/components/ContextProvider";
const steps = ["Shipping address", "Payment details"];
const MainLayout = styled("main")(({ theme }) => ({
  marginTop: "5%",
  width: "auto",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),

  [theme.breakpoints.up(600)]: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),

  [theme.breakpoints.down("xs")]: {
    width: "100%",
    marginTop: 60,
  },

  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  padding: theme.spacing(3, 0, 5),
}));

export default function Checkout ({ handleCaptureCheckout })  {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [order, setOrder] = useState({});
  const [error, setError] = useState(false);
  const { cart } = useContext(cartContext);
  const router = useRouter()


 
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart"
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
        setError(error)
        router.push("/");
      }
    };
    if (cart.id && cart.line_items.length > 0) {
      generateToken();
    }
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const timeout = () => {
    return setTimeout(() => {
      setIsFinished(true);
    }, 10000);
  };
  const Form = () =>
    activeStep == 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentFrom
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        setOrder={setOrder}
        timeout={timeout}
        setError={setError}
      />
    );

  let Confirmation = () => {
    if (order.customer) {
      return (
        <>
          <div style={{ textDecoration: "none" }}>
            <Typography variant="h5">
              Thank you for your purchase, {order.customer.firstname}
              {" "}{/* space between name*/}
              {order.customer.lastname}
            </Typography>
            <Typography variant="subtitle2">
              order ref: {order.customer_reference}
            </Typography>
          </div>
          <br />
          <Link
            href="/"
            
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" type="button">
              Back to Home
            </Button>
          </Link>
        </>
      );
    } else if (isFinished) {
      return (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
          </div>
          <br />
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            
          >
            <Button variant="outlined" type="button">
              Back to Home
            </Button>
          </Link>
        </>
      );
    } else {
      return <Loading />;
    }
  };
  if (error) {
    // eslint-disable-next-line react/display-name
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            type="button"
            style={{ textDecoration: "none" }}
          >
            Back to home
          </Button>
        </Link>
      </>
    );
  }
  return (
    <>
    <Suspense fallback={<Loading />}>
      <CssBaseline />
      <Toolbar />
      <MainLayout>
        <StyledPaper>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <StyledStepper activeStep={activeStep}>
            {steps.map((step) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </StyledStepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : checkoutToken ? (
            <Form />
          ) : (
            <Loading />
          )}
        </StyledPaper>
      </MainLayout>
    </Suspense>
  </>
  );
};

 
