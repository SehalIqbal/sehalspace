import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .hamburger {
    width: 60px;
    height: 60px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

export const Menu = () => (
  <MenuWrapper>
    <div className="menu-wrap">
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Merch</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </MenuWrapper>
);
