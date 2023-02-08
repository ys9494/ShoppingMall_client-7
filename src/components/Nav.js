import React, {useState} from 'react';
import {NavContainer, LinkStyle} from "./nav-styled";
import DropDown from "./DropDown";
const Nav = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <NavContainer>
          <ul>
            <li onClick={() => {setFlag(!flag)}}>
              <span>SHOP</span>
                {flag && <DropDown />}
            </li>
          </ul>
      </NavContainer>
    </>
  );
};

export default Nav;
