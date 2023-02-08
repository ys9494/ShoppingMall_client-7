import React from "react";
import {OptionBox, RadioBox, RadioWrapper} from "./radio-styled";

const Select = ({options}) => {
  const type = options.type;
  const option = options.option;

  return (
    // <SelectBox>
    //   <option>SIZE SELECT</option>
    //   {
    //     options.map((option, idx) => {
    //       return (
    //         <OptionBox key={idx} value={option}>
    //           {option.toUpperCase()}
    //         </OptionBox>
    //       )
    //     })
    //   }
    // </SelectBox>
    <>
      <RadioWrapper>
        {
          option.map((item, idx) => {
            return (
              <RadioBox key={idx}>
                <input type="radio" name={type} value={item} checked />
                <span>{item.toUpperCase()}</span>
              </RadioBox>
            )
          })
        }
      </RadioWrapper>
      
    </>
  )
}

export default Select;