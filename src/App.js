
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import LandingPage from './Components/LandingPage';
import MySkills from './Components/MySkills';
import MyWork from './Components/MyWork';
import Nav from './Components/Nav';
import Values from './Components/Values';
import './Sass&Css/App.css';
import { AuthProvider } from "./Contexts/AuthContext";
import Footer from './Components/footer';

function App() {
  return (
    <>
    <AuthProvider>
    <Nav/>
    <LandingPage/>
    <AboutMe/>
    <MySkills />
    <MyWork />
    <Values />
    <Contact />
    <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
