import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

const ACCENT = "#22c55e"; // green accent
const BG = "#0b0b0b";      // near-black
const FG = "#f5f5f5";      // near-white
const MUTED = "#9ca3af";   // grey

const FooterWrap = styled.footer`
  width: 100%;
  background: ${BG};
  color: ${FG};
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.08);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 10px 10px;

  @media (min-width: 1024px) {
    padding: 56px 24px 28px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1.3fr 1fr;
    gap: 40px;
    align-items: start;
  }
`;

const Brand = styled.div`
  h3 {
    font-size: clamp(20px, 2.4vw, 28px);
    margin: 0 0 12px 0;
    font-weight: 700;
    letter-spacing: 0.3px;
  }
  p {
    margin: 0;
    color: ${MUTED};
    line-height: 1.7;
    font-style: italic;
  }
`;

const SectionTitle = styled.h6`
  font-size: 12px;
  letter-spacing: 1.4px;
  color: ${MUTED};
  margin: 0 0 14px 0;
  text-transform: uppercase;
`;

const ContactList = styled.div`
  display: grid;
  gap: 10px;
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${FG} !important;
  text-decoration: none !important;
  opacity: 0.95;
  transition: color .2s ease, opacity .2s ease, transform .2s ease;

  svg {
    flex-shrink: 0;
    color: ${FG} !important;
    transition: color .2s ease;
  }

  &:hover, &:focus {
    color: ${ACCENT} !important;
    opacity: 1;
    transform: translateY(-1px);

    svg {
      color: ${ACCENT} !important;
    }
  }
`;

const Socials = styled.div`
  display: inline-flex;
  gap: 12px;
  margin-top: 16px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px; height: 40px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.12);
    color: ${FG} !important;
    transition: border-color .2s ease, color .2s ease, transform .2s ease, background .2s ease;
  }
  a:hover, a:focus {
    color: ${BG} !important;
    background: ${ACCENT};
    border-color: ${ACCENT};
    transform: translateY(-2px);
    outline: none;
  }
`;

const BottomBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 36px;
  padding-top: 18px;
  font-size: 13px;
  color: ${MUTED};

  a { color: ${MUTED}; }
  a:hover { color: ${ACCENT}; }
`;

const BackToTop = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  color: ${MUTED};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 10px;
  transition: color .2s ease, transform .2s ease, background .2s ease;

  &:hover, &:focus {
    color: ${ACCENT};
    background: rgba(255,255,255,0.04);
    transform: translateY(-1px);
    outline: none;
  }
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <Grid>
          {/* Heartfelt note */}
          <Brand>
            <h3>Sehal Iqbal</h3>
            <p>
              “The future belongs to those who believe in the beauty of their dreams.”<br />
              — <em>Eleanor Roosevelt</em>
              <br /><br />
              “And if you ever need guidance or someone to talk through your ideas with, feel free to reach out — not for money, but for the joy of helping.”<br />
              — <em>Sehal Iqbal</em>
            </p>

            <Socials>
              <a href="https://github.com/SehalIqbal" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FiGithub size={20} /></a>
              <a href="https://linkedin.com/in/sehal-iqbal-343746256" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FiLinkedin size={20} /></a>
            </Socials>
          </Brand>

          {/* Contact */}
          <div>
            <SectionTitle>Contact</SectionTitle>
            <ContactList>
              <ContactItem href="mailto:sehaliqbal27@gmail.com" aria-label="Email">
                <FiMail /> sehaliqbal27@gmail.com
              </ContactItem>
              <ContactItem href="tel:+92 339 2273743" aria-label="Phone">
                <FiPhone /> +92 339 2273743
              </ContactItem>
            </ContactList>
          </div>
        </Grid>

        <BottomBar>
          <span></span>
          <BackToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            Back to top <FiArrowUpRight />
          </BackToTop>
        </BottomBar>
      </Container>
    </FooterWrap>
  );
};
