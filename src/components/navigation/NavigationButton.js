import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavigationButton = styled.div`
  a {
    color: #fff;
    font-size: 16px;
    padding: 10px;
    font-weight: var(--font-weight-bold);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &.active {
      text-decoration: none;
    }
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export function NavigationButton(props) {
  return (
    <StyledNavigationButton className={props.disabled ? "disabled" : ""}>
      {props.route ? (
        <NavLink
          onClick={(e) => {
            if (props.disabled) {
              e.preventDefault();
            }
          }}
          to={props.route}
          exact={true}
        >
          {props.children}
        </NavLink>
      ) : (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      )}
    </StyledNavigationButton>
  );
}
