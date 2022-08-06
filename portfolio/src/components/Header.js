import { useState } from 'react'

const Header = (props) => {
  const listOptions = ['Home', 'Projects', 'Skills', 'Contact']
  const [visible, setVisible] = useState('Home')
  const [video, setVideo] = useState('./media/light-dark-mode-reverse.webm')
  const [headerMode, setHeaderMode] = useState('')

  const switchVideo = () => {
    if (video === './media/light-dark-mode-standard.webm') {
      setVideo('./media/light-dark-mode-reverse.webm')
    } else {
      setVideo('./media/light-dark-mode-standard.webm')
    }
  }

  const toggleTheme = (e) => {
    if (e.target.paused) {
      e.target.play()
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    }
  }

  window.addEventListener('scroll', () => {
    let windowTop = document.documentElement.scrollTop
    const windowHeight = document.documentElement.clientHeight
    let middleWindow = windowTop + windowHeight / 2
    if (windowTop === 0) {
      setHeaderMode('')
    } else {
      setHeaderMode('drop-shadow-lg')
    }
    if (middleWindow > 64 && middleWindow < 64 + windowHeight - 64) {
      setVisible('Home')
    } else if (middleWindow > 976 && middleWindow < 976 + windowHeight - 64) {
      setVisible('Projects')
    } else if (middleWindow > 1888 && middleWindow < 1888 + windowHeight - 64) {
      setVisible('Skills')
    } else if (middleWindow > 2800 && middleWindow < 2800 + windowHeight - 64) {
      setVisible('Contact')
    }
  })

  return (
    <nav
      className={`transition-colors duration-300 select-none bg-gray-100 flex w-screen h-16 justify-between items-center px-8 sticky top-0 ${headerMode} m-0 dark:bg-gray-700`}
    >
      <div className='flex items-center gap-4'>
        <img
          className='pointer-events-none h-8 w-8'
          src='./media/favicon.png'
          alt='Logo'
        />
        <label
          className='font-bold text-3xl gradient-text to-pink-400 cursor-pointer'
          onClick={props.onClick}
          id='logo-btn'
        >
          Portfolio
        </label>
      </div>
      <ul className='flex gap-8 font-bold px-12 items-center'>
        {listOptions.map((label, index) => {
          return (
            <ListItem
              label={label}
              key={index}
              onClick={props.onClick}
              visible={visible}
            />
          )
        })}
        <video
          type='video/webm'
          className='h-8 w-8 overflow-hidden cursor-pointer'
          src={video}
          id='mode-icon'
          onClick={toggleTheme}
          onEnded={switchVideo}
        ></video>
      </ul>
    </nav>
  )
}

export const ListItem = ({ label, onClick, visible }) => {
  return (
    <li>
      <button
        className={
          visible === label
            ? 'transition-colors duration-300 text-purple-700 dark:text-purple-500'
            : 'transition-colors duration-300 text-gray-400 hover:text-purple-400 active:text-purple-700 dark:hover:text-purple-300'
        }
        id={label}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  )
}

export default Header
