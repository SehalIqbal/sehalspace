import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo } from "./logo";
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background-color 300ms linear, transform 0.4s cubic-bezier(0, 0, 0.58, 1);

  ${({ $scrolled }) => $scrolled && "opacity: 0.95; backdrop-filter: blur(6px);"};
  
  min-height: 70px;
  padding: 0 2rem;

  @media screen and (min-width: 992px) {
    min-height: 90px;
  }
`;

export const HeaderTop = ({ logotext, theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header $scrolled={scrolled}>
      <Logo logotext={logotext} />
      <TopMenu />
    </Header>
  );
};
