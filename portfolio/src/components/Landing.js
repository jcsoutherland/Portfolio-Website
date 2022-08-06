import ThreeElement from './ThreeElement'
import { Canvas } from '@react-three/fiber'

const Landing = (props) => {
  return (
    <section
      className={`cursor-default transition-colors duration-300 h-[calc(100vh-4rem)] flex items-center justify-between pl-16 bg-white dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='transition-colors duration-300 font-bold text-6xl'>
        <span className='gradient-text to-purple-700'>Joey Southerland</span>
        <span className='transition-colors duration-300 flex items-center gap-1 font-medium text-2xl text-gray-500 mx-10 dark:text-gray-400'>
          Front-end web developer
        </span>
        <ButtonContainer />
      </div>
      <div className='h-full w-1/2'>
        <Canvas>
          <ThreeElement />
        </Canvas>
      </div>
    </section>
  )
}

export const ButtonContainer = () => {
  return (
    <div className='flex items-center gap-4 ml-16 pt-2'>
      <div className='button-container-none'>
        <button
          className='button'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/joey-southerland-ksu/',
              '_blank'
            )
          }}
        >
          <span className='gradient-text to-purple-700'>LinkedIn</span>
        </button>
      </div>
      <div className='button-container-none'>
        <button
          className='button'
          onClick={() => {
            window.open('./media/Resume.pdf', '_blank')
          }}
        >
          <span className='gradient-text to-purple-700'>Resume</span>
        </button>
      </div>
    </div>
  )
}

export default Landing
