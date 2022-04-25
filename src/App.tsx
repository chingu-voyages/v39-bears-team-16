import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import theme from "./theme";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const App = () => {
  // theme provider here
  
  return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </ThemeProvider>
  );
};

export default App;