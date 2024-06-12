import FormLogo from "../../assets/images/logo.png";

function ResetPasswordPage() {
  return (
    <main className="overlay">
      <div className="reset container flex-center-column">
        <img src={FormLogo} alt="" id="form-logo" />
        <h1 id="form-heading">Reset Password</h1>
        <form id="reset-password-form">
          <fieldset className="form-fieldset no-border flex-center-column gap">
            <label htmlFor="email-or-phone">
              Password
              <input type="text" id="email-or-phone" required />
            </label>
            <label htmlFor="email-or-phone">
              Confirm Password
              <input type="text" id="email-or-phone" required />
            </label>
            <input
              type="submit"
              className="submit-button"
              value={"Reset"}
            ></input>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
