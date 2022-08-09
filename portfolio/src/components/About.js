import { SkillsArray } from './data/SkillsArray'

const About = (props) => {
  return (
    <section
      className={`section-block bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div id='about-title' className='section-title'>
        ABOUT
      </div>
      <div
        className='flex h-full min-h-0 flex-col items-center justify-center px-8 lg:basis-full lg:flex-row lg:px-0'
        id='about-contents-container'
      >
        <div
          className='contents-container h-3/4 basis-[85%] to-pink-400 lg:h-1/2'
          id='color-border'
        >
          <div className='flex h-full w-full flex-col items-center justify-center rounded-3xl bg-white dark:bg-gray-600 sm:flex-row'>
            <div className='flex min-h-0 basis-full flex-col sm:h-full'>
              <span className='mb-4 mt-8 text-center text-3xl font-bold tracking-wide text-gray-500 dark:text-gray-300'>
                About Me
              </span>
              <p
                className='mx-8 mb-8 flex-1 overflow-scroll text-gray-500 dark:text-gray-300'
                id='about-text'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                harum quaerat non molestiae enim pariatur distinctio optio. Cum
                animi nihil laborum dolorum odio, facere, voluptatum dignissimos
                unde facilis delectus nostrum? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Placeat harum quaerat non
                molestiae enim pariatur distinctio optio. Cum animi nihil
                laborum dolorum odio, facere, voluptatum dignissimos unde
                facilis delectus nostrum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat harum quaerat non molestiae enim
                pariatur distinctio optio. Cum animi nihil laborum dolorum odio,
                facere, voluptatum dignissimos unde facilis delectus nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                harum quaerat non molestiae enim pariatur distinctio optio. Cum
                animi nihil laborum dolorum odio, facere, voluptatum dignissimos
                unde facilis delectus nostrum?
              </p>
            </div>
            <div className='h-0.5 w-[80%] shrink-0 grow-0 bg-gray-200 transition-colors duration-300 dark:bg-gray-700 sm:h-[80%] sm:w-0.5' />
            <div className='flex basis-auto flex-col sm:h-full'>
              <span className='mb-4 mt-8 text-center text-3xl font-bold tracking-wide text-gray-500 dark:text-gray-300'>
                Skills
              </span>
              <div
                id='icon-container'
                className='mx-8 mb-8 flex flex-wrap gap-2 overflow-scroll'
              >
                {SkillsArray.map((imageName, index) => {
                  return <TechImage src={imageName} key={index} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TechImage = (props) => {
  return (
    <span
      className='aspect-square w-7 flex-[0_1_auto] drop-shadow-lg sm:w-14'
      style={{
        backgroundImage: `url('./media/technology-icons/${props.src}.svg')`,
        backgroundSize: 'cover',
      }}
    ></span>
  )
}

export default About
