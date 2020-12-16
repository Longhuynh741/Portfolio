import "./App.css";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar/index";
import Projects from "./components/Projects";
import HeroImg from "./components/HeroImg";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <NavBar sticky="top" />
      <HeroImg />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
