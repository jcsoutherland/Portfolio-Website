const Header = (props) => {
  const listOptions = ['Home', 'Projects', 'Skills', 'Contact']

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
      <ul className='flex gap-8 font-bold text-gray-400 px-12'>
        {listOptions.map((label, index) => {
          return <ListItem label={label} key={index} onClick={props.onClick} />
        })}
        <img
          className='h-8 w-8 overflow-hidden'
          src=''
          alt='color mode toggle'
        ></img>
      </ul>
    </nav>
  )
}

export const ListItem = ({ label, onClick, textColor }) => {
  return (
    <li>
      <button
        className='transition-colors duration-300 hover:text-purple-400'
        id={label}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  )
}

export default Header
