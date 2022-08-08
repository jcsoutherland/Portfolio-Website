import HamburgerHeader from './HamburgerHeader'
import ThreeElement from './ThreeD/ThreeElement'
import { ButtonContainer } from './ThreeD/ThreeElement'

const Landing = (props) => {
  return (
    <section
      className={`z-0 cursor-default section-block bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='h-full w-full flex'>
        {props.mobile ? (
          <div className='font-bold text-7xl flex flex-col justify-center p-8'>
            <span className='select-none gradient-text text-[80%] to-pink-400'>
              Joey Southerland
            </span>
            <span className='select-none font-medium text-[30%] mx-12 text-gray-500 dark:text-gray-400'>
              Front-end web developer
            </span>
            <ButtonContainer />
          </div>
        ) : (
          <ThreeElement />
        )}
      </div>
    </section>
  )
}

export default Landing
