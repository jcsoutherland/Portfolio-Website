import Landing from './components/Landing'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const scrollToHandler = (e) => {
    const element = document.querySelector(`.${e.target.id}`)
    element.scrollIntoView(true)
  }

  return (
    <div className='flex flex-col'>
      <Header onClick={scrollToHandler} />
      <Landing className='home' />
      <Projects className='projects' />
      <Skills className='skills' />
      <Contact className='contact' />
    </div>
  )
}

export default App
