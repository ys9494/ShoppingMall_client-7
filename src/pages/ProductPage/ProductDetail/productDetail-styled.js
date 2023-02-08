import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const ProductDetailWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: calc(100vh - 200px);
  }
  
  & > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-shrink: 0;
    box-sizing: border-box;
  }
`;

export const ProductImg = styled.div `
  flex-basis: 40%;
  img {
    display: block;
    width: 500px;
    background-size: cover;
  }

  @media screen and (max-width:1279px) {
    margin-bottom: 30px;
  }
`

export const ProductInfo = styled.div `
  flex-direction: column;
  flex-basis: 40%;
  padding: 0 3%;
  > div {
    width: 100%;
  }

  > div:first-child {
    margin-bottom: 10px;
    color: #555;
    p {
      font-size: 30px;
    }
    span {
      display: block;
      margin: 10px 0;
      font-size: 22px;
    }
  }

  div:last-child {
    min-width: 420px;
    margin-top: 50px;
    p { 
      font-size: 16px;
      line-height: 22px;
    }
  }

  @media screen and (max-width:1279px) {
    flex-basis: 60%;

    div:last-child {
      min-width: 500px;
      margin-bottom: 100px;
    }
  }
`

export const ButtonWrapper = styled.div``

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 70px;
  margin: 15px 0;
  font-size: 20px;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #d9d9d9;
  }

  ${
    (props) => props.black &&
    css`
      background-color: #000;
      color: #fff;
      &:hover {
        background-color: #000;
        opacity: 0.7;
      }
    `
  }
`

export const LinkStyle = styled(Link)`
  display: block;
  width: 100%;
  height: 70px;
  margin: 15px 0;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
`