import { Roboto, DM_Sans } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import variables from "@/styles/variables.module.scss";

export const roboto = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: variables.primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: variables.secondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 15,
  },
});

export default theme;
