import { useState } from 'react'
import BoxCard from './BoxCard'
import NavArrows from './NavArrows'

const ScrollBox = () => {
  const defaultDescription =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit excepturi nisi facere recusandae sunt ex non fuga possimus saepe consectetur, nemo officiis dolorum nobis dolorem, adipisci est ipsum tempore commodi?'

  const cardArray = ['Netflix', 'IMDB', 'Google', 'Portfolio']

  const [distance, setDistance] = useState(0)

  const handleScroll = (e) => {
    switch (e.target.id) {
      case 'left-navigator':
        console.log('left')
        break
      case 'right-navigator':
        console.log('right')
        break
    }
  }

  {
    /* absolute w-1/2 h-3/5 top-0 bottom-0 right-0 left-0 m-auto */
  }

  return (
    <div
      className='drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] bg-gray-100 overflow-hidden rounded-3xl'
      id='scroll-container'
    >
      <NavArrows onClick={handleScroll} />
      <div
        id='scroll-parent'
        className={`gap-8 h-full w-full flex-grow-0 flex-shrink-0 flex`}
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
            />
          )
        })}
      </div>
    </div>
  )
}

export default ScrollBox
