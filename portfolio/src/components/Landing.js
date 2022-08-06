const Landing = (props) => {
  return (
    <section
      className={`cursor-default transition-colors duration-300 h-[calc(100vh-4rem)] flex items-center justify-between px-16 bg-white dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='transition-colors duration-300 font-bold text-6xl'>
        <span className='gradient-text to-purple-700'>Joey Southerland</span>
        <span className='transition-colors duration-300 flex items-center gap-1 font-medium text-2xl text-gray-500 mx-10 dark:text-white'>
          Front-end web developer
        </span>
        <ButtonContainer />
      </div>
      <div className='h-4/5 w-3/5 bg-gray-500'></div>
    </section>
  )
}

export const ButtonContainer = () => {
  return (
    <div className='flex items-center gap-4 ml-16 pt-2'>
      <div className='button-container to-purple-700'>
        <button
          className='button bg-white'
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
      <div className='button-container to-purple-700'>
        <button
          className='button bg-white'
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
