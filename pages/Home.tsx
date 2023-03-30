import Input from "@/components/common/Input";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import styled from "styled-components";

const Home = () => {
  const { value, focus, onFocus, onBlur, onChange, onEnter } = useInput();

  return (
    <HomeStyled>
      <Image src="/svgs/liner.svg" width={250} height={48} alt="liner" />
      <Input
        value={value}
        focus={focus}
        srcKey={focus ? "search_focus" : "search_default"}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onEnter={onEnter}
      />
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 560px;
  height: 100vh;
  margin: 0 auto;
  gap: 80px;
`;
