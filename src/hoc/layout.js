import React from "react";
import Header from "../components/header";
import { MuiThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../constants/theme";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <MuiThemeProvider theme={darkTheme}>{props.children}</MuiThemeProvider>
    </div>
  );
};
export default Layout;
