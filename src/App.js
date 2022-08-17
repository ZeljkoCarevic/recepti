import Pages from "./pages/Pages";
import Category from "./comps/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./comps/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiForkKnifeSpoon></GiForkKnifeSpoon>
          <Logo to={"/"}>Recepti</Logo>
        </Nav>
        <Search></Search>
        <Category></Category>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Times New Roman", Times, serif;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
