import Landing from './components/Landing'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function App() {
  const scrollToHandler = (e) => {
    let element = document.querySelector('.Home')
    if (e.target.id !== 'logo-btn') {
      element = document.querySelector(`.${e.target.id}`)
    }
    const navOffset = 64
    let elementTop = element.offsetTop
    window.scroll({ top: elementTop - navOffset, behavior: 'smooth' })
  }

  //Landing: if windowTop + windowHeight/2 > 64 && windowTop + windowHeight/2 < 64 + viewHeight
  //Projects: if windowTop + windowHeight/2 > 976 && windowTop + windowHeight/2 < 976 + viewHeight
  //Skills: if windowTop + windowHeight/2 > 1888 && windowTop + windowHeight/2 < 1888 + viewHeight
  //Contact: if windowTop + windowHeight/2 > 2800 && windowTop + windowHeight/2 < 2800 + viewHeight

  return (
    <>
      <Header onClick={scrollToHandler} id='nav-bar' />
      <div className='flex flex-col'>
        <Landing className='Home' id='view-box' />
        <Projects className='Projects' id='view-box' />
        <Skills className='Skills' id='view-box' />
        <Contact className='Contact' id='view-box' />
      </div>
    </>
  )
}

export default App
