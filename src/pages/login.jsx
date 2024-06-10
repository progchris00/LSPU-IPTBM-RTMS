import logoname from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="overlay">
      <div className="container">
        <img src={logoname} alt="" />
        <h1>Login</h1>
        <form id="login-form">
          <fieldset>
            <label htmlFor="email-or-phone">
              Email or Phone
              <input type="text" id="email-or-phone" required />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" id="password" required />
            </label>
            <input
              type="submit"
              className="submit-button"
              value={"Log In"}
            ></input>
          </fieldset>
        </form>
        <div className="login-page-options">
          <Link to="/sign-up">Create an account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
