import ScrollBox from './project-scroll/ScrollBox'

const Projects = (props) => {
  return (
    <section
      className={`section-block bg-gray-200 dark:bg-gray-800  ${props.className}`}
      id={props.id}
    >
      <div id='project-title' className='section-title'>
        PROJECTS
      </div>
      <div className=' my-16 flex h-full max-w-[75%] items-center justify-center md:mx-16 xl:max-w-[50%] '>
        {<ScrollBox />}
      </div>
    </section>
  )
}

export default Projects
