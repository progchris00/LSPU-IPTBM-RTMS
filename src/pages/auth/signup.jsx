import { Link } from "react-router-dom";

// Images
import FormLogo from "../../assets/images/logo.png";

// Components
import DragDropImage from "../../components/DragDropImage";

function SignUpPage() {
  return (
    <main className="overlay">
      <div className="form-container">
        <div className="sign-up container">
          <div className="flex logo-heading">
            <img src={FormLogo} alt="" id="form-logo" />
            <h1 id="form-heading">Create an account</h1>
          </div>
          <form id="sign-up-form">
            <fieldset className="form-fieldset no-border flex">
              <div className="sign-up-form-left gap">
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
                  <input type="text" list="branch-list" id="branch" required />
                  <datalist id="branch-list">
                    <option value="Los Baños">Los Baños</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="San Pablo">San Pablo</option>
                    <option value="Siniloan">Siniloan</option>
                    <option value="Extention">Extention</option>
                  </datalist>
                </label>
              </div>
              <div className="sign-up-form-right gap">
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
                <div className="sign-up-options">
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
      </div>
    </main>
  );
}

export default SignUpPage;
