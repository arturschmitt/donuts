import {Background} from "./styledGlobal"
import Header from "./components/Header/Header"
import Slogan from "./components/Slogan/Slogan"
import Nav from "./components/Nav/Nav"
import CardGroup from "./components/CardGroup/CardGroup"
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <>
      <Background>
        <Header />
        <Slogan/>
        <Nav />
        <CardGroup />
        <Menu />
      </Background>
    </>
  );
}

export default App;
