import ThreeElement from './ThreeD/ThreeElement'
import { ButtonContainer } from './ThreeD/ThreeElement'

const Landing = (props) => {
  return (
    <section
      className={`section-block z-0 cursor-default bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='flex h-full w-full'>
        <div className='flex flex-col justify-center p-8 text-7xl font-bold lg:hidden'>
          <span className='gradient-text select-none to-pink-400 text-[80%]'>
            Joey Southerland
          </span>
          <span className='mx-16 select-none text-[30%] font-medium text-gray-500 dark:text-gray-400'>
            Web developer
          </span>
          <ButtonContainer />
        </div>
        <ThreeElement className='hidden lg:block' />
      </div>
    </section>
  )
}

export default Landing
