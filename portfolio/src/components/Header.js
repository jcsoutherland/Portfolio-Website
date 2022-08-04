const Header = () => {
  return (
    <div className='bg-gray-800  flex h-16 justify-between items-center px-8 sticky top-0 border-b-[2px]'>
      <div className='flex items-center gap-4'>
        <img src='favicon.png' alt='Logo' />
        <label className='font-bold text-3xl text-white'>
          Joey Southerland
        </label>
      </div>
      <ul className='flex gap-8 font-medium text-gray-200 px-12'>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
