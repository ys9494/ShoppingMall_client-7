import React, { useRef, useState, useEffect } from "react";
import { useCallback } from "react";
import { SingupWrapper, SignupForm, InvalidMessage, GotoLogin } from "./styled";
import { InputWrapper, Button } from "../../components/common-styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as API from "../../utils/api";
import { useUserDispatch } from "../../context/UserContext";
import { ROUTE } from "../../routes/route";
import { LayoutWrapper } from "../../components/common-styled";

/**
 * 유효성검사
 * 비밀번호 8자 이상
 * 이름 한글 2자 이상 6글자 이하
 * 이메일 유효성
 */

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isPwMatch, setIsPwMatch] = useState(true);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  /** 유효성체크 메세지 */
  const InvalidMessages = {
    name: "2-6글자 한글로 입력해주세요",
    email: "유효하지 않은 이메일 형식입니다",
    password: "비밀번호가 일치하지 않습니다",
  };

  /** 이름 유효성 검사 */
  const checkName = useCallback(
    (e) => {
      const nameRegex = /^[가-힣]{2,6}$/;
      setName(e.target.value);
      setIsNameValid(nameRegex.test(e.target.value));
    },
    [name]
  );

  /** 이메일 유효성 검사 */
  const checkEmail = useCallback(
    (e) => {
      const emailRegex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      setEmail(e.target.value);
      setIsEmailValid(emailRegex.test(e.target.value));
    },
    [email]
  );

  /** 비밀번호 유효성 검사 */
  useEffect(() => {
    if (password && passwordConfirm) {
      password === passwordConfirm ? setIsPwMatch(true) : setIsPwMatch(false);
    }
  }, [password, passwordConfirm]);

  /** 회원가입 API */
  const signupAPI = async () => {
    // await post()
    try {
      await API.post("/users/register", {
        name,
        email,
        password,
      });

      navigate(ROUTE.LOGIN.link);
    } catch (err) {
      console.log("Error", err?.response?.data);
      alert("이미 사용중인 이메일입니다.");
    }
  };

  /** 회원가입 제출 */
  const signupSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid) {
      return nameRef.current.focus();
    }
    if (!isEmailValid) {
      return emailRef.current.focus();
    }

    if (isNameValid && isEmailValid && isPwMatch) {
      signupAPI();
    }
  };
  return (
    <SingupWrapper>
      <h1>SIGN UP</h1>
      <SignupForm onSubmit={signupSubmit}>
        <InputWrapper>
          <label>NAME</label>
          <input
            type="text"
            required
            value={name}
            onChange={checkName}
            ref={nameRef}
            placeholder="이름을 입력하세요(2 - 6글자)"
          />
          {name
            ? isNameValid || (
                <InvalidMessage>{InvalidMessages.name}</InvalidMessage>
              )
            : null}
        </InputWrapper>
        <InputWrapper>
          <label>EMAIL</label>
          <input
            type="text"
            required
            value={email}
            onChange={checkEmail}
            ref={emailRef}
            placeholder="이메일을 입력하세요"
          />
          {email
            ? isEmailValid || (
                <InvalidMessage>{InvalidMessages.email}</InvalidMessage>
              )
            : null}
        </InputWrapper>
        <InputWrapper>
          <label>PASSWORD</label>
          <input
            type="password"
            required
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요(8글자 이상)"
          />
        </InputWrapper>
        <InputWrapper>
          <label>PASSWORD CONFIRM</label>
          <input
            type="password"
            required
            minLength="8"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            ref={pwRef}
            placeholder="비밀번호를 한 번 더 입력하세요"
          />
          {isPwMatch || (
            <InvalidMessage>{InvalidMessages.password}</InvalidMessage>
          )}
        </InputWrapper>
        <Button>CREATE ACCOUNT</Button>
        <GotoLogin>
          <Link to="/login">Already have an account?</Link>
        </GotoLogin>
      </SignupForm>
    </SingupWrapper>
  );
};

export default Signup;
