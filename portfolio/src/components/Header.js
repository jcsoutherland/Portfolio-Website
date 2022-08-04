const Header = (props) => {
  return (
    <nav className='select-none bg-white flex w-screen h-16 justify-between items-center px-8 sticky top-0  drop-shadow-lg shadow-purple-700 m-0'>
      <div className='flex items-center gap-4'>
        <img
          className='pointer-events-none h-8 w-8'
          src='favicon.png'
          alt='Logo'
        />
        <label className='font-bold text-3xl text-purple-700'>Portfolio</label>
      </div>
      <ul className='flex gap-8 font-medium text-gray-400 px-12'>
        <li>
          <button
            className='hover:text-purple-400 active:text-purple-700'
            id='home'
            onClick={props.onClick}
          >
            Home
          </button>
        </li>
        <li>
          <button
            id='projects'
            className='hover:text-purple-400 active:text-purple-700'
            onClick={props.onClick}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            id='skills'
            className='hover:text-purple-400 active:text-purple-700'
            onClick={props.onClick}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            id='contact'
            className='hover:text-purple-400 active:text-purple-700'
            onClick={props.onClick}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
