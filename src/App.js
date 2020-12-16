import "./App.css";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar/index";
import Projects from "./components/Projects";
import HeroImg from "./components/HeroImg";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar sticky="top" />
      <HeroImg />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
