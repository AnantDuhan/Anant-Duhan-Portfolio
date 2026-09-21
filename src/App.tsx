import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impact from './components/Impact'

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-dark-bg text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Navbar dark={dark} toggle={toggle} />
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
