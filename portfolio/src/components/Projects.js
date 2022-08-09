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
      <div className='basis-full'></div>
    </section>
  )
}

export default Projects
