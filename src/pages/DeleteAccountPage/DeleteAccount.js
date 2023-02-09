import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  DeleteAccountWrapper,
  DeleteAccountForm,
  CancelButton,
} from "./styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../components/common-styled";
import axios from "axios";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
  }, []);

  const deleteAccountSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const { userId } = decoded;

    if (
      confirm("정말 회원탈퇴를 하시겠습니까? 탈퇴 후 계정 복구는 불가능합니다.")
    ) {
      axios
        .delete(`http://localhost:8001/api/users/signout/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Handle success.
          console.log(response);
          localStorage.removeItem("token");
        });
      alert("회원탈퇴가 완료되었습니다.");
      console.log("비밀번호", password);
    }
  };

  return (
    <LayoutWrapper>
      <DeleteAccountWrapper>
        <h1>DELETE ACCOUNT</h1>
        <DeleteAccountForm onSubmit={deleteAccountSubmit}>
          <InputWrapper>
            <label>PASSWORD</label>
            <input
              type="password"
              required
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <Button>DELETE</Button>
        </DeleteAccountForm>
        <CancelButton>
          <Link to="../">CANCEL</Link>
        </CancelButton>
      </DeleteAccountWrapper>
    </LayoutWrapper>
  );
};

export default DeleteAccount;
