import React, { useState } from "react";
import { CounterWrapper, Button } from "./counter-styled";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(true);

  const onIncrease = () => {
    setDisabled(false);
    setCount(current => current + 1);
  };
  const onDecrease = () => {
    if(count <= 2) setDisabled(true);
    setCount(current => current - 1);
  };
  return (
    <CounterWrapper>
      <Button onClick={onDecrease} disabled={disabled}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span>{count}</span>
      <Button onClick={onIncrease}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </CounterWrapper>
  );
};

export default Counter;