import ScrollBox from './ScrollBox'

const Projects = (props) => {
  return (
    <section
      className={`relative h-[calc(100vh-4rem)] transition-colors duration-300 px-32 bg-gray-50 dark:bg-gray-800 ${props.className}`}
      id={props.id}
    >
      <ScrollBox />
    </section>
  )
}

export default Projects
