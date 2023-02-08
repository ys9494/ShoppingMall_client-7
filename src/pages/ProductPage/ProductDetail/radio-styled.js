import styled from 'styled-components';
import icon from '../../../assets/images/selectbox-down-icon.png';
export const RadioWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  
  label {
    transition: all 0.5s;
  }
  label:hover {
    border: 2px solid #000;
  }
  label:not(:first-child) {
    margin-left: 1%;
  }
`

export const RadioBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 5px 0;
  /* padding: 0 10px; */
  border: 2px solid #d9d9d9;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;

  -webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

  /* background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  background-size: 10px; */
  input {
    display: none;
  }
`

export const OptionBox = styled.option`
  &:hover {
    background-color: #000;
    color: #fff;
  }
`