import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";

// Authentication Pages
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import ForgotPasswordPage from "./pages/auth/forgot-password";
import ResetPasswordPage from "./pages/auth/reset-password";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordPage />}
          />
          <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<ErrorPage />} /> {/* If page do not exist*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
