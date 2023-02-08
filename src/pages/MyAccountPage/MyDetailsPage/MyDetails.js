import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTE } from "../../../routes/route";
import axios from "axios";
import {
  MyDetailsWrapper,
  DetailFormWrapper,
  TitleWrapper,
  GotoSignout,
  CancelButton,
} from "./mydetails-styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../../components/common-styled";

const MyDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");

  /** 사용자 정보 불러오기 */
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8001/api/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle success.
        console.log("Data: ", response.data);
        console.log("id", response.data._id);
        setUserId(response.data._id);
        setEmail(response.data.email);
        setName(response.data.name);
        setAddress1(response.data.address1 ? response.data.address1 : address1);
        setAddress2(response.data.address2 ? response.data.address2 : address2);
        setZipCode(response.data.zipCode ? response.data.zipCode : zipCode);
        setCity(response.data.city ? response.data.city : city);
        setPhoneNumber(
          response.data.phoneNumber ? response.data.phoneNumber : phoneNumber
        );
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }, []);

  /** 사용자 정보 제출 */
  const userDetailSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .patch(
        `http://localhost:8001/api/users/account/${userId}`,
        {
          name,
          password,
          currentPassword,
          address1,
          address2,
          zipCode,
          city,
          phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle success.
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <LayoutWrapper>
      <MyDetailsWrapper>
        <TitleWrapper>
          <h1>MY DETAILS</h1>
        </TitleWrapper>
        <DetailFormWrapper onSubmit={userDetailSubmit}>
          <InputWrapper>
            <label>이메일</label>
            <input type="text" required value={email} readOnly />
          </InputWrapper>
          <InputWrapper>
            <label>이름</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호 변경</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="변경할 비밀번호를 입력하세요(8글자 이상)"
              minLength="8"
            />
          </InputWrapper>
          <InputWrapper>
            <label>현재 비밀번호</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력하세요"
              minLength="8"
            />
          </InputWrapper>
          <InputWrapper>
            <label>주소</label>
            <input
              type="text"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>상세주소</label>
            <input
              type="text"
              required
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>우편번호</label>
            <input
              type="text"
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>도시</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>전화번호</label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputWrapper>
          <Button>APPLY</Button>
          <CancelButton>
            <Link to="../">CANCEL</Link>
          </CancelButton>
          <GotoSignout>
            <Link to={ROUTE.DELETEACCOUNT.link}>DELETE ACCOUNT</Link>
          </GotoSignout>
        </DetailFormWrapper>
      </MyDetailsWrapper>
    </LayoutWrapper>
  );
};

export default MyDetails;
