import FormLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="overlay">
      <div className="form-container">
        <div className="login container flex-center-column">
          <Link to="/home">
            <img src={FormLogo} alt="" id="form-logo" />
          </Link>
          <h1 id="form-heading">Login</h1>
          <form id="login-form">
            <fieldset className="form-fieldset no-border flex-center-column gap">
              <label htmlFor="email-or-phone">
                Email or Phone
                <input type="text" id="email-or-phone" required autoFocus />
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
          <div className="flex-space-between">
            <Link to="/auth/sign-up">Create an account</Link>
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
