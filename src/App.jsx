import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World </H1>
        <Button onClick={() => alert("nbn")}>Check in</Button>
        <Button onClick={() => alert("nbn")}>Check out</Button>

        <Input type="number" placeholder="Number of quests" />
        <Input type="number" placeholder="Number of quests" />
      </StyledApp>
    </>
  );
}

export default App;
