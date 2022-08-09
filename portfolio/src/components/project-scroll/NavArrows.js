const NavArrows = (props) => {
  return (
    <>
      <span
        onClick={props.onClickLeft}
        className='absolute bottom-1/3 left-4 z-20 hidden h-12 w-12 cursor-pointer select-none  text-5xl text-pink-400 opacity-90 hover:scale-125 hover:opacity-100 hover:ease-in-out lg:block'
        id='left-navigator'
      >
        ←
      </span>
      <span
        onClick={props.onClickRight}
        className='absolute bottom-1/3 right-4 z-20 hidden h-12 w-12 cursor-pointer select-none text-5xl text-pink-400 opacity-90 hover:scale-125 hover:opacity-100 hover:ease-in-out lg:block'
        id='right-navigator'
      >
        →
      </span>
    </>
  )
}

export default NavArrows
