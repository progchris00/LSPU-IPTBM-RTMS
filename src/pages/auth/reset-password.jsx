import FormLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  return (
    <main className="overlay">
      <div className="form-container">
        <div className="reset container flex-center-column">
          <Link to="/home">
            <img src={FormLogo} alt="" id="form-logo" />
          </Link>
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
          </form>
        </div>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
