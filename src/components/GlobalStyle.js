import { createGlobalStyle } from "styled-components";
import bg1 from "../img/bg1.png";
import bg2 from "../img/bg2.png";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'KorailRoundGothicBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KorailRoundGothicBold.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
  }

  body {
    background: url(${bg2}) no-repeat center / contain fixed;
    font-family: 'KorailRoundGothicBold';
    font-size: 18px;
    padding: 0;
    color: #333;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
