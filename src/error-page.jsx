import { useRouteError } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  mt: 10,

  [theme.breakpoints.up("md")]: {
    mt: 0,
    height: "100vh"
  }
}));
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <StyledContainer id="error-page">
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
    </StyledContainer>
  );
}
