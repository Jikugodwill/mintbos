import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MobileMenuButton } from "./MobileMenuButton";
import { CPlanetLogo, NearSocialLogo } from "../../icons/CPlanetLogo";
import { NotificationWidget } from "../NotificationWidget";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${(props) =>
    props && props.currentPage.toLowerCase() === "home"
      ? "transparent"
      : "white"};
  z-index: 1000;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) =>
    props && props.currentPage.toLowerCase() === "home" ? "-100px" : "0"};

  .logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
  }

  .nav-notification-widget {
    margin: 0;
  }

  .nav-sign-in-btn {
    background: none;
    border: none;
    padding-right: 0;
  }
`;
//how to access props in styled components

export function Navigation(props) {
  return (
    <StyledNavigation currentPage={props.currentPage}>
      <Link
        to="/"
        className="logo-link"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <CPlanetLogo
          color={props.currentPage.toLowerCase() === "home" ? "#fff" : "#000"}
        />
      </Link>
      <MobileMenuButton
        onClick={props.onClickShowMenu}
        currentPage={props.currentPage}
      />
    </StyledNavigation>
  );
}
