import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "./logo";
import { CenterdMenu } from "../menus/CenterdMenu";
import { ThemeSwitcher1 } from "./themeSwitcher1";
import { MenuButton } from "./menuButton";
import { TopMenu } from "./topMenu";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 101;
  background-color: var(--bg-color);
  transition: background-color 300ms linear, transform 0.4s cubic-bezier(0, 0, 0.58, 1);

  ${({ $scrolled }) => $scrolled && "transform: translateY(-100px); opacity: 0.6;"};

  @media screen and (max-width: 992px) {
    min-height: 60px;
    height: 60px;
    ${({ $scrolled }) => $scrolled && "transform: translateY(-60px);"};
  }

  @media screen and (min-width: 992px) {
    min-height: 100px;
    height: 100px;
  }

  ${({ $menuOpen }) => $menuOpen && "transform: translateY(0) !important; opacity: 1;"};
`;

export const HeaderTop = ({ logotext, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 100 && currentScroll > lastScroll) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header $scrolled={scrolled} $menuOpen={menuOpen}>
        <Logo logotext={logotext} />
        <TopMenu />
        <MenuButton func={toggleMenu} isActive={menuOpen} />
      </Header>
      <CenterdMenu isActive={menuOpen} set={toggleMenu} />
      <ThemeSwitcher1 theme={theme} />
    </>
  );
};
