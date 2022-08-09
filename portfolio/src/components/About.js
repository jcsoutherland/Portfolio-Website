const About = (props) => {
  return (
    <section
      className={`section-block bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <>
        <div id='about-title' className='section-title'>
          ABOUT
        </div>
        <div className=' my-16 flex h-full max-w-[75%] items-center justify-center md:mx-16 xl:max-w-[50%] '>
          <div className='contents-container h-full w-full to-pink-400 md:h-1/2 md:w-full'>
            <div className='flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-gray-600 sm:flex-row sm:items-center'>
              <div className='flex h-full w-full flex-col items-center p-6 md:py-8 md:pl-16 md:pr-6'>
                <span className='mb-4 text-3xl font-bold tracking-wide text-gray-600 dark:text-gray-300'>
                  About Me
                </span>
                <p className='text-gray-600 dark:text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat harum quaerat non molestiae enim pariatur distinctio
                  optio. Cum animi nihil laborum dolorum odio, facere,
                  voluptatum dignissimos unde facilis delectus nostrum?
                </p>
              </div>
              <div className='my-1 mx-auto h-0.5 w-[80%] flex-none shrink-0 grow-0 bg-gray-200 transition-colors duration-300 dark:bg-gray-700 sm:h-[80%] sm:w-0.5'></div>
              <div className='flex h-full w-full flex-col items-center p-6 sm:py-8 sm:pr-16 sm:pl-6'>
                <span className='mb-4 text-3xl font-bold tracking-wide text-gray-600 dark:text-gray-300'>
                  Skills
                </span>
                <div id='icon-container' className='h-full w-full '></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  )
}

export default About
