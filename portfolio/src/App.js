import Landing from './components/Landing'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const scrollToHandler = (e) => {
    const element = document.querySelector(`.${e.target.id}`)

    const navOffset = 64
    window.scroll({ top: element.offsetTop - navOffset, behavior: 'smooth' })
  }

  return (
    <>
      <Header onClick={scrollToHandler} />
      <div className='flex flex-col'>
        <Landing className='Home' />
        <Projects className='Projects' />
        <Skills className='Skills' />
        <Contact className='Contact' />
      </div>
    </>
  )
}

export default App
