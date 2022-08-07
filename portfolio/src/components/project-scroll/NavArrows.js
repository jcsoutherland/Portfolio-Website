const NavArrows = (props) => {
  return (
    <>
      <span
        onClick={props.onClickLeft}
        className='opacity-90 hover:opacity-100 text-5xl select-none text-pink-400 absolute bottom-1/3 left-4 h-12 w-12 hover:scale-125 hover:ease-in-out cursor-pointer z-20'
        id='left-navigator'
      >
        ←
      </span>
      <span
        onClick={props.onClickRight}
        className='opacity-90 hover:opacity-100 text-5xl select-none text-pink-400 absolute bottom-1/3 right-4 h-12 w-12 cursor-pointer hover:scale-125 hover:ease-in-out z-20'
        id='right-navigator'
      >
        →
      </span>
    </>
  )
}

export default NavArrows
