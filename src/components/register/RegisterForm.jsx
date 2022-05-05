import Link from "next/link";
import React from "react";
import emailCompare from "../../common/emailCompare";
import { RegisterContainer } from "./registerFormStyle";

const RegisterForm = ({
  id,
  password,
  name,
  email,
  changeId,
  changePassword,
  changeName,
  changeEmail,
  requestRegister,
  passwordToggle,
  pass,
  onSubmitT,
}) => {
  return (
    <RegisterContainer>
      <h1 className="register-title">
        <div>Create Account for</div>
        <div>GlassKT</div>
      </h1>
      <form onSubmit={onSubmitT}>
        <div className="register-form">
          <span>Account Register</span>
          <div className="input-form">
            <div className="icon">별</div>
            <div className="input">
              <div className="input-name">ID</div>
              <input
                type="text"
                value={id}
                onChange={changeId}
                className="input-input-password"
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="input-form">
            <div className="icon">별</div>
            <div className="input">
              <div className="input-name">Password</div>
              <input
                type="password"
                value={password}
                onChange={changePassword}
                className="input-input-password"
                maxLength={50}
                ref={pass}
                required
              />
            </div>
            <div className="password-click" onClick={passwordToggle}>
              눈
            </div>
          </div>
          <div className="input-form">
            <div className="icon">별</div>
            <div className="input">
              <div className="input-name">Name</div>
              <input
                type="text"
                className="input-input-password"
                value={name}
                onChange={changeName}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="input-form">
            <div className="icon">별</div>
            <div className="input">
              <div className="input-name">email</div>
              <input
                type="email"
                className="input-input-password"
                value={email}
                onChange={changeEmail}
                maxLength={50}
                required
              />
              <input type="button" value="인증번호 발송" />
            </div>
          </div>
          <div className="input-form">
            <div className="icon">별</div>
            <div className="input">
              <input
                type="email"
                className="input-input-password"
                value={email}
                onChange={changeEmail}
                maxLength={50}
                required
              />
              <input type="button" value="인증번호 확인" />
            </div>
          </div>
          <div className="input-footer">
            <button
              className="register-button"
              onClick={
                id && password && emailCompare(email) && name
                  ? requestRegister
                  : null
              }
            >
              register
            </button>
          </div>
        </div>
      </form>
      <div className="or-line">
        <div className="line"></div>
        <div className="or">OR</div>
      </div>
      <div className="register-description">Already have an account?</div>
      <div className="register-container">
        <Link href="login">
          <a>
            <button className="register">Login</button>
          </a>
        </Link>
      </div>
    </RegisterContainer>
  );
};

export default RegisterForm;
