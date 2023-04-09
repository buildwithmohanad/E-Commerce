import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    mt: 10,
    [theme.breakpoints.up("md")]: {
      mt: 0,
      height: "100vh"
    }
  }
}));
