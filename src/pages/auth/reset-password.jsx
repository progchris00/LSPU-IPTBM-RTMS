import FormLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  return (
    <main className="overlay">
      <div className="form-container">
        <div className="reset container flex-center-column">
          <img src={FormLogo} alt="" id="form-logo" />
          <h1 id="form-heading">Reset Password</h1>
          <form id="reset-password-form">
            <fieldset className="form-fieldset no-border flex-center-column gap">
              <label htmlFor="password">
                Password
                <input type="password" id="password" required autoFocus />
              </label>
              <label htmlFor="confirm-password">
                Confirm Password
                <input type="password" id="confirm-password" required />
              </label>
              <input
                type="submit"
                className="submit-button"
                value={"Reset"}
              ></input>
            </fieldset>
            <div>
              <Link to="/auth/login">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
