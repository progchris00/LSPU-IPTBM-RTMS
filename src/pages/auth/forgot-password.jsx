import FormLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <main className="overlay">
      <div className="form-container">
        <div className="forgot container flex-center-column">
          <Link to="/home">
            <img src={FormLogo} alt="" id="form-logo" />
          </Link>
          <h1 id="form-heading">Forgot Password</h1>
          <form id="forgot-password-form">
            <fieldset className="form-fieldset no-border flex-center-column gap">
              <label htmlFor="email-or-phone">
                Email
                <input type="text" id="email-or-phone" required autoFocus />
              </label>
              <input
                type="submit"
                className="submit-button"
                value={"Send Reset Link"}
              ></input>
            </fieldset>
          </form>
          <div className="text-center">
            <Link to="/auth/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;
