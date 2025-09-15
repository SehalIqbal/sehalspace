import React from "react";
import styled from "styled-components";
import { useTypingText } from "../../hooks/useTypingtext";

const Div1 = styled.div`
  display: table-cell;
  vertical-align: middle;
  table-layout: fixed;
  padding: 15% 0;
  @media screen and (max-width: 992px) {
    padding: 20% 0;
  }
`;

const Introh1 = styled.h1`
  font-size: 40px;
  line-height: 1.2em;
  letter-spacing: 0.05em;
  margin: 25px 0;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 39px !important;
  }
  @media only screen and (max-width: 680px) {
    font-size: 24px !important;
  }
`;

export const IntroSection = () => {
  const { word } = useTypingText(
  ["AI", "Data Science", "Machine Learning"],
  70,
  15
);


  return (
    <section>
      <div className="d-table w-100 text-start text-lg-center">
        <Div1>
          <div className="container">
           <Introh1>
  Hi, I’m <span style={{ color: "#16a34a" }}>Sehal Iqbal</span> 👋 <br />
  With a foundation in <span style={{ color: "#16a34a" }}>{word}</span>, I understand how to work with data and intelligent systems. <br />
  I now specialize in <span style={{ color: "#16a34a" }}>automation workflows</span> using n8n to help businesses save time and work smarter.
</Introh1>


          </div>
        </Div1>
      </div>
    </section>
  );
};
