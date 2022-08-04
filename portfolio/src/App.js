import Landing from './components/Landing'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
