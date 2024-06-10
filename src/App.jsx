import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Forgot from "./pages/auth/forgot-password";
import Error from "./pages/error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/forgot-password" element={<Forgot />} />
          <Route path="*" element={<Error />} /> {/* If page do not exist*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
