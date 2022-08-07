import ScrollBox from './project-scroll/ScrollBox'

const Projects = (props) => {
  return (
    <section
      className={`section-block bg-gray-200 dark:bg-gray-800 relative  ${props.className}`}
      id={props.id}
    >
      <div id='project-title' className='section-title absolute left-32'>
        PROJECTS
      </div>
      <div className='absolute right-32 w-[55%]'>
        <ScrollBox />
      </div>
    </section>
  )
}

export default Projects
