import Header from "@/components/result/Header";
import Main from "@/components/result/Main";
import { useState } from "react";
import styled from "styled-components";

const Result = () => {
  const [isScroll, setIsScroll] = useState(false);

  return (
    <ResultStyled>
      <Header isScroll={isScroll} />
      <Main setIsScroll={setIsScroll} />
    </ResultStyled>
  );
};

export default Result;

const ResultStyled = styled.main`
  width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
`;
