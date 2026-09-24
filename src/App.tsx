import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FossLensCaseStudy from './pages/FossLensCaseStudy'
import UnifiedDeskCaseStudy from './pages/UnifiedDeskCaseStudy'

const CASE_STUDIES: Record<string, () => React.JSX.Element> = {
  '/case-studies/unified-desk': UnifiedDeskCaseStudy,
  '/case-studies/fosslens': FossLensCaseStudy,
}

export default function App() {
  const { dark, toggle } = useTheme()
  const path = window.location.pathname.replace(/\/+$/, '')
  const CaseStudy = CASE_STUDIES[path]

  return (
    <div className="bg-white dark:bg-dark-bg text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar dark={dark} toggle={toggle} />
      {CaseStudy ? (
        <CaseStudy />
      ) : (
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  )
}
