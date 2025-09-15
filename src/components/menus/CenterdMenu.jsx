import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuButton } from "../header/menuButton";

const MenuWrapper = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 101;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--menu-bg-color);
  backdrop-filter: saturate(20%) blur(0.3rem);
  transform: ${({ $visible }) => ($visible ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.3s ease-out;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const MenuListWrapper = styled.div`
  @media (min-width: 992px) {
    margin-left: 33.3333%;
  }
`;

const MenuList = styled.ul`
  padding: 20vh 0;
  @media (min-width: 992px) {
    padding: 10vh 0;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const MenuLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  padding: 4px 0;
  text-decoration: none;
  transition: color 0.25s ease-in-out;

  &:before {
    content: "";
    background: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover:before {
    width: 100%;
  }
`;

const MenuHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-menu-color);
  z-index: 1;
  height: 60px;

  @media (min-width: 992px) {
    height: 100px;
  }
`;

const BigText = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 200px;
  opacity: 0.5;
  pointer-events: none;
`;

export const CenterdMenu = ({ isActive, set }) => (
  <MenuWrapper $visible={isActive}>
    <Overlay $visible={isActive}>
      <MenuHeader>
        <MenuButton isActive={isActive} func={set} />
        <BigText>Menu</BigText>
      </MenuHeader>
      <Content>
        <MenuListWrapper>
          <MenuList>
            {["Home", "Portfolio", "About", "Contact", "Elements"].map((item) => (
              <MenuItem key={item}>
                <MenuLink to={`/${item.toLowerCase()}`} onClick={set}>
                  {item}
                </MenuLink>
              </MenuItem>
            ))}
          </MenuList>
        </MenuListWrapper>
      </Content>
    </Overlay>
  </MenuWrapper>
);
