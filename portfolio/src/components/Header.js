import { useState } from 'react'

const Header = (props) => {
  const listOptions = ['Home', 'Projects', 'About', 'Contact']
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
      setVisible('About')
    } else if (middleWindow > 2800 && middleWindow < 2800 + windowHeight - 64) {
      setVisible('Contact')
    }
  })

  return (
    <nav
      className={`sticky top-0 z-[60] flex h-16 select-none items-center justify-center bg-gray-100 xl:justify-between ${headerMode} m-0 dark:bg-gray-700 xl:p-8`}
      id={props.id}
    >
      {!props.mobile && (
        <img
          className='h-8 w-8 cursor-pointer'
          src='./media/favicon.png'
          alt='Logo'
          id='logo-btn'
          onClick={props.onClick}
          draggable={false}
        />
      )}

      <ul className='flex items-center gap-4 font-bold lg:gap-8'>
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
          className='h-8 w-8 cursor-pointer hover:h-9 hover:w-9'
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
            ? 'text-purple-700 transition-colors duration-300 dark:text-purple-500'
            : 'text-gray-400 transition-colors duration-300 hover:text-purple-400 active:text-purple-700 dark:hover:text-purple-300'
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
