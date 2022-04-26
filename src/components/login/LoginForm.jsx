import Link from "next/link";
import { memo } from "react";
import { LoginContainer } from "./LoginFormStyle";

const LoginForm = ({
  requestLogin,
  ClickCheckbox,
  passwordToggle,
  checked,
  password,
  changePassword,
  username,
  pass,
  changeUsername,
}) => {
  return (
    <LoginContainer>
      <h1 className="login-title">
        <div>Welocome</div>
        <div>GlassKT</div>
      </h1>
      <div className="login-form">
        <span>Account Login</span>
        <div className="input-form">
          <div className="icon">별</div>
          <div className="input">
            <div className="input-name">username</div>
            <input
              type="text"
              onChange={changeUsername}
              value={username}
              className="input-input-id"
              maxLength={10}
            />
          </div>
        </div>
        <div className="input-form">
          <div className="icon">별</div>
          <div className="input">
            <div className="input-name">password</div>
            <input
              type="password"
              onChange={changePassword}
              value={password}
              className="input-input-password"
              maxLength={50}
              ref={pass}
            />
          </div>
          <div onClick={passwordToggle} className="password-click">
            눈
          </div>
        </div>
        <div className="input-footer">
          <label>
            <label className="checkbox">
              <input type="checkbox" onClick={ClickCheckbox} value={checked} />
              <span className="checkbox_icon"></span>
              <span className="checkbox_text"></span>
            </label>
            Remember me
          </label>
          <div>Forgot Password?</div>
        </div>
        <button onClick={requestLogin} className="login-button">
          login
        </button>
      </div>
      <div className="or-line">
        <div className="line"></div>
        <div className="or">OR</div>
      </div>
      <div className="register-description">Don’t have an account?</div>
      <div className="register-container">
        <Link href="register">
          <a>
            <button className="register">Register</button>
          </a>
        </Link>
      </div>
    </LoginContainer>
  );
};

export default memo(LoginForm);
