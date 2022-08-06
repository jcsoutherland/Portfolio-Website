import ThreeElement from './ThreeElement'

const Landing = (props) => {
  return (
    <section
      className={`z-0 cursor-default transition-colors duration-300 h-[calc(100vh-4rem)] flex items-center justify-between  bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='h-full w-full'>
        <ThreeElement />
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
          <span className='select-none dark:text-white'>LinkedIn</span>
        </button>
      </div>
      <div className='button-container-none'>
        <button
          className='button'
          onClick={() => {
            window.open('./media/Resume.pdf', '_blank')
          }}
        >
          <span className='select-none dark:text-white'>Resume</span>
        </button>
      </div>
    </div>
  )
}

export default Landing
