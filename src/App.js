import "./App.css";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar/index";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar sticky="top" />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
