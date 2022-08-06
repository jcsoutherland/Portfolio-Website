import ScrollBox from './project-scroll/ScrollBox'

const Projects = (props) => {
  return (
    <section
      className={`flex gap-60 items-center justify-center h-[calc(100vh-4rem)] transition-colors duration-300 px-32 bg-gray-100 dark:bg-gray-700 border-t-2 border-pink-400 ${props.className}`}
      id={props.id}
    >
      <div
        id='project-title'
        className='transition-colors duration-300 text-gray-300 dark:text-gray-500 font-bold text-7xl'
      >
        PROJECTS
      </div>
      <ScrollBox />
    </section>
  )
}

export default Projects
