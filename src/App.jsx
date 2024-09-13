import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello World </Heading>
        <Heading as="h2">Check in and out </Heading>
        <Button onClick={() => alert("nbn")}>Check in</Button>
        <Button onClick={() => alert("nbn")}>Check out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of quests" />
        <Input type="number" placeholder="Number of quests" />
      </StyledApp>
    </>
  );
}

export default App;
