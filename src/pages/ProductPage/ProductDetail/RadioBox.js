import React from "react";
import {RadioLabel, RadioWrapper} from "./radio-styled";

const Select = ({options}) => {
  const type = options.type;
  const option = options.option;

  return (
    <>
      <RadioWrapper>
        <ul>
        {
          option.map((item, idx) => {
            return (
              <li key={idx}>
                <input type="radio" id={`type-${idx}`} name={type} value={item} />
                <RadioLabel htmlFor={`type-${idx}`}>
                  <span>{item.toUpperCase()}</span>
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