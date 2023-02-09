import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { LoginWrapper, LoginForm, GotoSingup } from "./styled";
import { InputWrapper, Button } from "../../components/common-styled";
import { LayoutWrapper } from "../../components/common-styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("http://localhost:8001/api/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
        return alert("아이디 또는 비밀번호를 확인해주세요");
      });
  };

  const loginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login();
      navigate("/");

      setEmail("");
      setPassword("");
    },
    [email, password]
  );

  return (
    <LayoutWrapper>
      <LoginWrapper>
        <h1>LOG IN</h1>
        {/* <button onClick={loginTest}>test button</button> */}
        <LoginForm onSubmit={loginSubmit}>
          <InputWrapper>
            <label>EMAIL</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>PASSWORD</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              placeholder="비밀번호를 입력하세요"
            />
          </InputWrapper>
          <Button>LOG IN</Button>
          <GotoSingup>
            <Link to="/signup">Create an account</Link>
          </GotoSingup>
        </LoginForm>
      </LoginWrapper>
    </LayoutWrapper>
  );
};

export default Login;
