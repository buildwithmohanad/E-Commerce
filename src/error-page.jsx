import { useRouteError } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./ErrorPageStyle";
export default function ErrorPage() {
  const classes = useStyles();
  const error = useRouteError();

  return (
    <Container id="error-page" className={classes.container}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        Oops!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Link to="/E-Commerce/" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          type="button"
          style={{ color: "#2f4ca8", borderColor: "#2f4ca8" }}
        >
          Back to Home
        </Button>
      </Link>
    </Container>
  );
}
