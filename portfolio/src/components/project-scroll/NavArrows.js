const NavArrows = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className='fixed bottom-1/2 left-4 h-12 w-12 rounded-full flex justify-center items-center bg-transparent outline outline-4 outline-gray-200 dark:outline-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <span
          className='text-4xl select-none text-purple-600'
          id='left-navigator'
        >
          ←
        </span>
      </div>
      <div
        onClick={props.onClick}
        className='fixed bottom-1/2 right-4 h-12 w-12 rounded-full flex justify-center items-center bg-transparent outline outline-4 outline-gray-200 dark:outline-gray-600  hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <span
          className='text-4xl select-none text-purple-600'
          id='right-navigator'
        >
          →
        </span>
      </div>
    </>
  )
}

export default NavArrows
