import styled from "styled-components";
import HomeComponent from "./modules/home";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Montserrat", sans-serif;
`;
const Header = styled.span`
  color: teal;
  font-size: 25px;
  font-weight: bold;
`;
export default function Home() {
  return (
    <>
      <Container>
        <Header>Expense Tracker</Header>
        <HomeComponent />
      </Container>
    </>
  );
}
