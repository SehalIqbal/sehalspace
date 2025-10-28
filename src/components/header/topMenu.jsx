import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopMenuContainer = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-start; /* 👈 shifts menu toward the left */
  align-items: center;
  gap: 2rem; /* space between links */
  margin-left: 25vw; /* fine-tune horizontal offset */
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 15px;
  letter-spacing: 0.4px;
  text-decoration: none;
  color: var(--text-color, #f5f5f5);
  font-weight: 500;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: #22c55e; /* your green accent */
    transform: translateY(-1px);
  }

  /* underline animation */
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #22c55e;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const TopMenu = () => {
  return (
    <TopMenuContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </TopMenuContainer>
  );
};
