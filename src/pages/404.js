import { Typography, Button, Container } from "@mui/material";
import Link from "next/link";   
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

  return (
    <StyledContainer id="error-page"sx={{height: "100vh"}}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        Oops!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Sorry, an unexpected error has occurred.
      </Typography>
  
      <Link href="/" style={{ textDecoration: "none" }}>
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