import { useState, useRef, useEffect } from 'react'
import BoxCard from './BoxCard'
import NavArrows from './NavArrows'
import { cardArray } from '../data/BoxCardArray'

const ScrollBox = () => {
  const [boxArray, setBoxArray] = useState(cardArray)

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
      className='drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] bg-gradient-to-r p-0.5 via-purple-600 from-pink-400 to-pink-400 overflow-hidden rounded-3xl'
      id='scroll-container'
    >
      <NavArrows onClickLeft={slideLeft} onClickRight={slideRight} />
      <div className='overflow-hidden rounded-3xl h-full w-full'>
        <div
          id='scroll-parent'
          className={`gap-4 h-full w-full flex-grow-0 flex-shrink-0 flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-x snap-mandatory`}
        >
          {boxArray}
        </div>
      </div>
    </div>
  )
}

export default ScrollBox
