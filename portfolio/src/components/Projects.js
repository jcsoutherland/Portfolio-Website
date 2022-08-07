import ScrollBox from './project-scroll/ScrollBox'

const Projects = (props) => {
  return (
    <section
      className={`flex gap-60 items-center justify-center h-[calc(100vh-4rem)] px-32 bg-gray-200 dark:bg-gray-800  ${props.className}`}
      id={props.id}
    >
      <div
        id='project-title'
        className='text-gray-400 dark:text-gray-500 font-bold text-7xl pointer-events-none select-none'
      >
        PROJECTS
      </div>
      <ScrollBox />
    </section>
  )
}

export default Projects
