import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Educations } from "./components/Educations";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import DynamicBackground from "./components/DynamicBackground"; 

function App() {
  return (
    <div className="App">
      <DynamicBackground />
      <NavBar />
      <Banner />
      <Skills />
      <Educations />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;



