import React, { useCallback, useState, useRef, memo } from "react";
import LoginForm from "../components/login/LoginForm";
import useInput from "../hooks/useInput";

const LoginWindow = () => {
  const [username, changeUsername] = useInput("");
  const [password, changePassword] = useInput("");
  const [checked, setChecked] = useState(false);

  const pass = useRef();

  const ClickCheckbox = useCallback(() => {
    setChecked((pre) => !pre);
  }, []);

  const requestLogin = useCallback(() => {
    console.log("로그인");
  }, [username, password, checked]);

  const passwordToggle = useCallback(() => {
    pass.current.type = pass.current.type === "password" ? "text" : "password";
  }, []);

  return (
    <div>
      <LoginForm
        ClickCheckbox={ClickCheckbox}
        requestLogin={requestLogin}
        passwordToggle={passwordToggle}
        username={username}
        changeUsername={changeUsername}
        password={password}
        changePassword={changePassword}
        checked={checked}
        pass={pass}
      />
    </div>
  );
};

export default memo(LoginWindow);
