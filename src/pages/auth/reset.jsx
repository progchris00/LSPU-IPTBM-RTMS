import logoname from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  return (
    <main className="overlay">
      <div className="container forgot">
        <img src={logoname} alt="" />
        <h1>Reset Password</h1>
        <form id="forgot-password-form">
          <fieldset>
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

export default ResetPasswordPage;
