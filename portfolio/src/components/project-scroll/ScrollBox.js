import { useState } from 'react'
import NavArrows from './NavArrows'
import { cardArray } from '../data/BoxCardArray'

const ScrollBox = (props) => {
  const [boxArray, setBoxArray] = useState(cardArray)

  let isMobile = false
  var width = window.innerWidth > 0 ? window.innerWidth : window.screen.width
  if (width < 1280) {
    isMobile = true
  }

  const slideLeft = () => {
    var slider = document.getElementById('scroll-parent')
    slider.scrollLeft = slider.scrollLeft - slider.offsetWidth - 16
  }

  const slideRight = () => {
    var slider = document.getElementById('scroll-parent')
    slider.scrollLeft = slider.scrollLeft + slider.offsetWidth + 16
  }

  return (
    <div
      className='contents-container h-full w-full to-pink-400 xl:h-1/2 xl:w-full'
      id='scroll-container'
    >
      <NavArrows onClickLeft={slideLeft} onClickRight={slideRight} />
      <div className='h-full w-full overflow-hidden rounded-3xl'>
        <div
          id='scroll-parent'
          className={`scroll flex h-full w-full flex-shrink-0 flex-grow-0 snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide`}
        >
          {boxArray}
        </div>
      </div>
    </div>
  )
}

export default ScrollBox
