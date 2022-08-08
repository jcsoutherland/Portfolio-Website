import { slide as Menu } from 'react-burger-menu'
import { ListItem } from './Header'

const HamburgerHeader = () => {
  const listOptions = ['Home', 'Projects', 'About', 'Contact']
  return (
    <Menu isOpen={false}>
      <ul className='flex gap-8 font-bold px-12 items-center'>
        {listOptions.map((label, index) => {
          return <ListItem label={label} key={index} />
        })}
      </ul>
    </Menu>
  )
}

export default HamburgerHeader
