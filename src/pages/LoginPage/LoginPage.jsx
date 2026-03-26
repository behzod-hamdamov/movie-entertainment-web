import "./LoginPage.scss";

import { Link, useNavigate } from "react-router";

import logoIcon from "../../assets/icons/logo-icon.svg";
import { useState } from "react";

export function LoginPage() {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const navigate = useNavigate()

  const [emailError, setEmailError] = useState({
    isError: false,
    errorType: null,
  });
  const [passwordError, setPasswordError] = useState({
    isError: false,
    errorType: null,
  });
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const errType = {
    blank: "Can't be empty",
    invalid: "Invalid email",
  };

  function formSubmit(e) {
    e.preventDefault();
    console.log(userData);

    if (!emailValue) {
      setEmailError({isError: true, errorType: errType.blank})
    } else if (!(emailValue.includes("@gmail.com") || emailValue.includes("@email.com")) || emailValue[0] == "@") {
      setEmailError({isError: true, errorType: errType.invalid})
    } else {
      setEmailError({isError: false, errorType: null})
    }
    
    if (!passwordValue) {
      setPasswordError({isError: true, errorType: errType.blank})
    } else {
      setPasswordError({isError: false, errorType: null})
    }

    if (userData?.email === emailValue && userData?.password === passwordValue) {
      localStorage.setItem("userIsLoggedIn", true)
      navigate("/", { replace: true });
    }
  }

  return (
    <div className="login-page">
      <div className="container">
        <Link to="/">
          <img src={logoIcon} alt="logo" />
        </Link>
        <form className="login-form">
          <h3>Login</h3>
          <div className="inputs">
            <div className={emailError.isError ? "input error" : "input"} >
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
              {passwordError.isError ? <span>{passwordError.errorType}</span> : ""}
            </div>
          </div>
          <div className="options">
            <button onClick={formSubmit}>Login to your account</button>
            <div className="link">
              <span>Don’t have an account?</span>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
