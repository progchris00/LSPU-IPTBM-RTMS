import { Link } from "react-router-dom";

// Images
import FormLogo from "../../assets/images/logo.png";

// Components
import DragDropImage from "../../components/DragDropImage";

function SignUpPage() {
  return (
    <main className="overlay">
      <div className="sign-up container">
        <div className="flex">
          <img src={FormLogo} alt="" id="form-logo" />
          <h1 id="form-heading">Create an account</h1>
        </div>
        <form id="sign-up-form">
          <fieldset className="form-fieldset no-border flex">
            <div className="sign-up-form-left">
              <DragDropImage />
              <label htmlFor="first-name">
                First Name
                <input type="text" id="first-name" required />
              </label>
              <label htmlFor="last-name">
                Last Name
                <input type="text" id="last-name" required />
              </label>
              <label htmlFor="branch">
                Branch
                <input type="text" id="branch" required />
              </label>
            </div>
            <div className="sign-up-form-right">
              <label htmlFor="phone-number">
                Phone no.
                <input type="tel" id="phone-number" required />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" id="email" required />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" id="password" required />
              </label>
              <label htmlFor="confirm-password">
                Confirm Password
                <input type="password" id="confirm-password" required />
              </label>
              <div>
                <input
                  type="submit"
                  className="submit-button"
                  value={"Register"}
                ></input>
                <Link to="/auth/login" className="link">
                  Already have an account?
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

export default SignUpPage;
