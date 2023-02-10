import React, { useState } from "react";
import { RadioLabel, RadioWrapper } from "./radio-styled";

const Select = ({options, radioProps}) => {
  const type = options.type;
  const option = options.option;
  const dbOption = options.dbOption;

  const [text, setText] = useState("");
  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  }
  const submitText = () => {
    return radioProps(text);
  }

  return (
    <>
      <RadioWrapper>
        <ul>
        {
          option.map((item, idx) => {
            return (
              <li key={idx}>
                <input type="radio" id={`type-${idx}`} name={type} value={dbOption[idx]} onChange={textChangeHandler} />
                <RadioLabel htmlFor={`type-${idx}`}>
                  <span onClick={submitText}>{item.toUpperCase()}</span>
                </RadioLabel>
              </li>
            )
          })
        }
        </ul>
      </RadioWrapper>
      
    </>
  )
}

export default Select;