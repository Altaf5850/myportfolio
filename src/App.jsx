import About from "./components/About";
import ChatBhot from "./components/ChatBhot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-merienda">
      <NavBar />
      <ChatBhot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
