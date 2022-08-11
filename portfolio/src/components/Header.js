import { useState } from 'react'

const Header = (props) => {
  const listOptions = ['Home', 'Projects', 'About', 'Contact']
  const [visible, setVisible] = useState('Home')
  const [headerMode, setHeaderMode] = useState('')
  const HEADER_HEIGHT = 64

  const toggleTheme = (e) => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  window.addEventListener('scroll', () => {
    let windowTop = document.documentElement.scrollTop
    const windowHeight = document.documentElement.clientHeight
    let middleWindow = windowTop + windowHeight / 2
    const section = document.getElementById('landing')
    const sectionHeight = section.offsetHeight
    if (windowTop === 0) {
      setHeaderMode('')
    } else {
      setHeaderMode('drop-shadow-lg')
    }
    if (
      middleWindow > HEADER_HEIGHT &&
      middleWindow < HEADER_HEIGHT + windowHeight - HEADER_HEIGHT
    ) {
      setVisible('Home')
    } else if (
      middleWindow > sectionHeight &&
      middleWindow < sectionHeight + windowHeight - HEADER_HEIGHT
    ) {
      setVisible('Projects')
    } else if (
      middleWindow > sectionHeight * 2 &&
      middleWindow < sectionHeight * 2 + windowHeight - HEADER_HEIGHT
    ) {
      setVisible('About')
    } else if (
      middleWindow > sectionHeight * 3 &&
      middleWindow < sectionHeight * 3 + windowHeight - HEADER_HEIGHT
    ) {
      setVisible('Contact')
    }
  })

  return (
    <nav
      className={`sticky top-0 z-[60] flex h-16 select-none items-center justify-center bg-gray-200 sm:justify-between ${headerMode} m-0 dark:bg-gray-700 sm:p-8`}
      id={props.id}
    >
      <img
        className='hidden h-8 w-8 cursor-pointer sm:inline-block'
        src='./media/favicon.png'
        alt='Logo'
        id='logo-btn'
        onClick={props.onClick}
        draggable={false}
      />

      <ul className='flex items-center gap-4 font-bold sm:gap-8'>
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
        <span
          className='h-8 w-8 cursor-pointer bg-image-two dark:bg-image-one'
          id='mode-icon'
          onClick={toggleTheme}
        />
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
