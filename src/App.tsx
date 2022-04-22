import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Theme from "theme";
import styled from "styled-components";

function App() {
  // theme provider here
  <Theme>
    <div>
      <h2>Test</h2>
    </div>
  </Theme>
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;