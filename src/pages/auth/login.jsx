import logoname from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="overlay">
      <div className="login container flex-center-column">
        <img src={logoname} alt="" id="form-logo" />
        <h1 id="form-heading">Login</h1>
        <form id="login-form">
          <fieldset className="no-border flex-center-column gap">
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
          <Link to="/auth/sign-up">Create an account</Link>
          <Link to="/auth/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
