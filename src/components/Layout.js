import Header from "./Header.js";
import styled, { css } from "styled-components";

const flexStyle = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

const Main = styled.div`
  margin: 50px 10px;
  ${flexStyle}
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
