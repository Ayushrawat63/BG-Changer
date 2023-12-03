import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const ColorCard = (props) => {
  // console.log(props.value.name);

  //  useEffect(() => {
  //     document.body.style.backgroundColor = color;
  //     console.log(color);
  //   }, [color]);

  // const change = (val) => {

  //   document.body.style.backgroundColor = val;
  // };

  const ColorButton = styled.button`
    width: 70px;
    height: 30px;
    border: 0.3px solid black;
    border-radius: 16px;
    background-color: ${props.Color.name};
    color: ${props.Color.text};
    cursor: pointer;
  `;

  return (
    <>
      <ColorButton
        onClick={() => {
          props.pass(props.Color.name);
        }}
      >
        {props.Color.name}
      </ColorButton>
    </>
  );
};

export default ColorCard;
