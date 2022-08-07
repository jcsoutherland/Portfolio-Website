import { useState } from 'react'
import BoxCard from './BoxCard'
import NavArrows from './NavArrows'

const ScrollBox = () => {
  const defaultDescription =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit excepturi nisi facere recusandae sunt ex non fuga possimus saepe consectetur, nemo officiis dolorum nobis dolorem, adipisci est ipsum tempore commodi?'

  const cardArray = ['Netflix', 'IMDB', 'Google', 'Portfolio']

  const [distance, setDistance] = useState(0)

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
      className='drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] bg-gradient-to-r p-0.5 via-purple-600 from-pink-400 to-pink-400 overflow-hidden rounded-3xl '
      id='scroll-container'
    >
      <NavArrows onClickLeft={slideLeft} onClickRight={slideRight} />
      <div className='overflow-hidden rounded-3xl h-full w-full'>
        <div
          id='scroll-parent'
          className={`gap-4 h-full w-full flex-grow-0 flex-shrink-0 flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide`}
        >
          {cardArray.map((name, index) => {
            return (
              <BoxCard
                key={index}
                name={name}
                img='./media/minions.jpeg'
                techImageArray={[
                  'CSS3.png',
                  'HTML5.png',
                  'javascript.png',
                  'Tailwind.png',
                ]}
                description={defaultDescription}
              ></BoxCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ScrollBox
