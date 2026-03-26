import "./SignUpPage.scss";

import { Link, useNavigate } from "react-router";
import { useState } from "react";

import logoIcon from "../../assets/icons/logo-icon.svg"

export function SignupPage() {
  const navigate = useNavigate()

  const [emailError, setEmailError] = useState({
    isError: false,
    errorType: null,
  });

  const [passwordError, setPasswordError] = useState({
    isError: false,
    errorType: null,
  });

  const [repatedPassError, setRepatedPassError] = useState({
    isError: false,
    errorType: null,
  });

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repatedPassValue, setRepatedPassValue] = useState("");

  const errType = {
    blank: "Can't be empty",
    invalid: "Invalid email",
    notMatching: "Not matching"
  };

  function formSubmit(e) {
    e.preventDefault();
    let c = 0

    if (!emailValue) {
      setEmailError({ isError: true, errorType: errType.blank });
    } else if (
      !(
        emailValue.includes("@gmail.com") || emailValue.includes("@email.com")
      ) ||
      emailValue[0] == "@"
    ) {
      setEmailError({ isError: true, errorType: errType.invalid });
    } else {
      setEmailError({ isError: false, errorType: null });
      c++
    }

    if (!passwordValue) {
      setPasswordError({ isError: true, errorType: errType.blank });
    } else {
      setPasswordError({ isError: false, errorType: null });
      c++
    }

    if (!repatedPassValue) {
      setRepatedPassError({ isError: true, errorType: errType.blank });
    } else if (repatedPassValue !== passwordValue) {
      setRepatedPassError({ isError: true, errorType: errType.notMatching });
    } else {
      setRepatedPassError({ isError: false, errorType: null });
      c++
    }

    if (c >= 3) {
      localStorage.setItem("userData", JSON.stringify({email: emailValue, password: passwordValue}))
      localStorage.setItem("isUserLoggedIn", true)
      navigate("/", {replace: true})
    }
  }

  return (
    <div className="login-page">
      <div className="container">
        <Link to="/">
          <img src={logoIcon} alt="logo" />
        </Link>
        <form className="login-form">
          <h3>Sign Up</h3>
          <div className="inputs">
            <div className={emailError.isError ? "input error" : "input"}>
              <input
                type="text"
                placeholder="Email address"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value.trimStart());
                }}
              />
              {emailError.isError ? <span>{emailError.errorType}</span> : ""}
            </div>
            <div className={passwordError.isError ? "input error" : "input"}>
              <input
                type="text"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => {
                  setPasswordValue(e.target.value.trimStart());
                }}
              />
              {passwordError.isError ? (
                <span>{passwordError.errorType}</span>
              ) : (
                ""
              )}
            </div>
            <div className={repatedPassError.isError ? "input error" : "input"}>
              <input
                type="text"
                placeholder="Repeat password"
                value={repatedPassValue}
                onChange={(e) => {
                  setRepatedPassValue(e.target.value.trimStart());
                }}
              />
              {repatedPassError.isError ? (
                <span>{repatedPassError.errorType}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="options">
            <button onClick={formSubmit}>Create an account</button>
            <div className="link">
              <span>Don’t have an account?</span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
