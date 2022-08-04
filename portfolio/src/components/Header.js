const Header = () => {
  return (
    <nav className='select-none bg-white  flex h-16 justify-between items-center px-8 sticky top-0  drop-shadow-lg shadow-purple-700 m-0'>
      <div className='flex items-center gap-4'>
        <img className='pointer-events-none' src='favicon.png' alt='Logo' />
        <label className='font-bold text-3xl text-purple-700'>Portfolio</label>
      </div>
      <ul className='flex gap-8 font-medium text-gray-400 px-12'>
        <li>
          <a
            href='#home'
            className='hover:text-purple-400 focus:text-purple-700'
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#projects'
            className='hover:text-purple-400 active:text-purple-700'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href='#skills'
            className='hover:text-purple-400 active:text-purple-700'
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='hover:text-purple-400 active:text-purple-700'
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
