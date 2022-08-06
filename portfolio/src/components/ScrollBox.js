import { useState } from 'react'

const ScrollBox = () => {
  const [distance, setDistance] = useState(0)

  let boxCardArray = []

  boxCardArray.push(<BoxCard name='Project 1' />)
  boxCardArray.push(<BoxCard name='Project 2' />)
  boxCardArray.push(<BoxCard name='Project 3' />)
  boxCardArray.push(<BoxCard name='Project 4' />)

  const handleScroll = () => {
    let box = document.getElementById('scroll-container')
    let travel = distance + box.offsetWidth
    setDistance(travel)
    console.log(distance)
  }

  return (
    <div
      onClick={handleScroll}
      className='drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] absolute w-1/2 h-3/5 top-0 bottom-0 right-0 left-0 m-auto bg-zinc-400 flex overflow-hidden rounded-3xl'
      id='scroll-container'
    >
      <div
        id='scroll-parent'
        className={`h-full w-full flex-grow-0 flex-shrink-0 flex -translate-x-[${distance.toString()}px]`}
      >
        <BoxCard name='Project 1' />
        <BoxCard name='Project 2' />
        <BoxCard name='Project 3' />
        <BoxCard name='Project 4' />
      </div>
    </div>
  )
}

const BoxCard = (props) => {
  return (
    <div
      className={`bg-gray-500 h-full w-full flex-grow-0 flex-shrink-0 ${props.className}`}
    >
      <h1 className='text-white'>{props.name}</h1>
    </div>
  )
}

export default ScrollBox
