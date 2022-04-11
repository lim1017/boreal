import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const mainTheme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#ADC2DB",
    },
    secondary: {
      main: "#CCD6DE",
    },
  },
});

//nav bar #C2DCFF

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
);

ThemeProvider.defaultProps = {};

export { AppThemeProvider };
