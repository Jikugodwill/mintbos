import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: flex;
  width: 155px;
  height: 40px;
  padding: 8px 15px 8px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: #000;
  border: 1px solid #000;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

export function GrayBorderButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
