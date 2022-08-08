import Landing from './components/Landing'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  let isMobile = false
  var width = window.innerWidth > 0 ? window.innerWidth : window.screen.width
  if (width < 1280) {
    isMobile = true
  }

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
  //About: if windowTop + windowHeight/2 > 1888 && windowTop + windowHeight/2 < 1888 + viewHeight
  //Contact: if windowTop + windowHeight/2 > 2800 && windowTop + windowHeight/2 < 2800 + viewHeight

  return (
    <>
      <Header onClick={scrollToHandler} id='nav-bar' mobile={isMobile} />
      <Landing className='Home' mobile={isMobile} />
      <Projects className='Projects' mobile={isMobile} />
      <About className='About' mobile={isMobile} />
      <Contact className='Contact' mobile={isMobile} />
    </>
  )
}

export default App
