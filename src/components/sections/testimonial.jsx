import React from "react";
import Container from "react-bootstrap/Container";
import styled, { keyframes } from "styled-components";

const ACCENT = "#22c55e"; // your green accent color

/* ---------- Layout ---------- */
const Section = styled.section`
  background: #ffffff; /* ✅ matches Projects background */
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  padding: 40px 0 50px; /* tighter vertical rhythm */
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0; /* use same .fu-slider horizontal spacing as Projects */
`;

const Heading = styled.h3`
  font-weight: 600;
  margin-bottom: 32px;
  text-align: left;
  font-size: clamp(22px, 2.4vw, 30px);
  color: #111;
`;

/* ---------- Columns ---------- */
const TwoCol = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

/* ---------- Quote Cards ---------- */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Quotes = styled.div`
  display: grid;
  gap: 16px;
`;

const QuoteCard = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${ACCENT};
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 16px 20px;
  line-height: 1.6;
  font-size: 1rem;
  animation: ${fadeUp} 0.3s ease both;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }

  cite {
    display: inline-block;
    margin-left: 6px;
    opacity: 0.7;
    font-style: normal;
  }
`;

/* ---------- What You Can Expect ---------- */
const ExpectWrap = styled.div``;

const ExpectTitle = styled.h4`
  margin: 0 0 14px 0;
  font-weight: 600;
  font-size: 1.15rem;
`;

const ExpectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;

  li {
    display: grid;
    grid-template-columns: 14px 1fr;
    column-gap: 10px;
    align-items: start;
  }

  li::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${ACCENT};
    margin-top: 9px;
  }
`;

/* ---------- Component ---------- */
export const Testimonial = () => {
  return (
    <Section aria-label="Feedback and Results">
      <Container fluid>
        <Wrap className="homefu fu-slider">
          <Heading>Feedback & Results</Heading>

          <TwoCol>
            {/* LEFT: feedback cards */}
            <Quotes>
              <QuoteCard>
                Went from manual emails to a working AI inbox in days
                <cite>— A.S.</cite>
              </QuoteCard>
              <QuoteCard style={{ animationDelay: ".05s" }}>
                Our bookings run themselves now. Exactly what we needed
                <cite>— R.K.</cite>
              </QuoteCard>
              <QuoteCard style={{ animationDelay: ".1s" }}>
                Fast delivery, clear communication, real demos every step
                <cite>— M.Z.</cite>
              </QuoteCard>
            </Quotes>

            {/* RIGHT: what to expect */}
            <ExpectWrap>
              <ExpectTitle>What You Can Expect</ExpectTitle>
              <ExpectList>
                <li>Clear scope and honest timelines</li>
                <li>Iterations with real, testable demos</li>
                <li>Maintainable workflows you control</li>
                <li>Guidance included — so you’re never stuck</li>
              </ExpectList>
            </ExpectWrap>
          </TwoCol>
        </Wrap>
      </Container>
    </Section>
  );
};
