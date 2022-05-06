import axios from "axios";
import React, { useCallback, useRef } from "react";
import RegisterForm from "../components/register";
import { config } from "../config/config";
import useInput from "../hooks/useInput";

const Register = () => {
  const [id, changeId] = useInput("");
  const [password, changePassword] = useInput("");
  const [name, changeName] = useInput("");
  const [email, changeEmail] = useInput("");

  const onSubmitT = (e) => {
    e.preventDefault();
  };

  const pass = useRef();

  const requestRegister = useCallback(async () => {
    const idPasswordReg = /[^0-9A-Za-z*!]/;

    if (!idPasswordReg.test(id) && !idPasswordReg.test(password)) {
      try {
        const value = await axios.post(`${config.baseUrl}/signup`, {
          id,
          pw: password,
          name,
          email,
        });
        console.log(value);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("회원가입 못함");
    }
  }, [id, password, name, email]);

  const passwordToggle = useCallback(() => {
    pass.current.type = pass.current.type === "password" ? "text" : "password";
  }, []);
  return (
    <RegisterForm
      id={id}
      password={password}
      name={name}
      email={email}
      changeId={changeId}
      changePassword={changePassword}
      changeName={changeName}
      changeEmail={changeEmail}
      requestRegister={requestRegister}
      passwordToggle={passwordToggle}
      pass={pass}
      onSubmitT={onSubmitT}
    />
  );
};

export default Register;
