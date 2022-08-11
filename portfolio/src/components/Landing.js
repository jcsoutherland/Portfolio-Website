import ThreeElement from './ThreeD/ThreeElement'

/*        <span
          id='landing-subtext'
          className=' absolute bottom-0 left-0 m-auto select-none font-medium text-gray-500 dark:text-gray-400'
        >
          Web developer
        </span>*/

const Landing = (props) => {
  return (
    <section
      className={`section-block relative z-0 cursor-default bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='absolute top-0 left-0 right-0 z-10 m-auto flex justify-center'>
        <span
          id='landing-title-main'
          className='gradient-text m-auto to-pink-400 text-center font-black'
        >
          JOEY
        </span>
      </div>
      <div className='w-max-[1250px] h-max-[800px] absolute top-0 bottom-0 m-auto h-full w-full'>
        <ThreeElement />
      </div>
      <div className='absolute bottom-0 right-0 left-0 z-10 m-auto flex select-none justify-center'>
        <span
          id='landing-title'
          className='gradient-text to-pink-400 font-black'
        >
          SOUTHERLAND
        </span>
      </div>
    </section>
  )
}

export default Landing
