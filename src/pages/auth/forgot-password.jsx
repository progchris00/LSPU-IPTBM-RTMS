import logoname from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <main className="overlay">
      <div className="forgot container flex-center-column">
        <img src={logoname} alt="" id="form-logo" />
        <h1 id="form-heading">Forgot Password</h1>
        <form id="forgot-password-form">
          <fieldset className="no-border flex-center-column gap">
            <label htmlFor="email-or-phone">
              Email
              <input type="text" id="email-or-phone" required />
            </label>
            <input
              type="submit"
              className="submit-button"
              value={"Send Reset Link"}
            ></input>
          </fieldset>
        </form>
        <div className="forgot-password-options">
          <Link to="/auth/login">Already have an account?</Link>
        </div>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;
