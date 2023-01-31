import styled from "styled-components";

export const TextContainer = styled.h2`
  position: relative;
  font-size: 47px /* 36px */;
  line-height: 2.5rem /* 40px */;
  text-transform: uppercase;
  -webkit-text-stroke: 0.3vw #8892b0;

  &::before {
    content: "Eu sou Desenvolvedor Frontend...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #01fe87;
    -webkit-text-stroke: 0vw #8892b0;
    border-right: 2px solid #01fe87;
    overflow: hidden;
    animation: animate 6s linear infinite;
  }

  @keyframes animate {
    0%,
    10%,
    30%,
    100% {
      width: 0;
    }

    70%,
    90% {
      width: 100%;
    }
  }
`;
