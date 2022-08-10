import ProjectCard from './project-scroll/ProjectCard'
import SlotMachine from './project-scroll/SlotMachine'

const Projects = (props) => {
  //make slot machine type thing with lever that spins all of them and randomly picks one for funzies
  return (
    <section
      className={`section-block bg-gray-200 dark:bg-gray-800  ${props.className}`}
      id={props.id}
    >
      <div id='project-title' className='section-title'>
        PROJECTS
      </div>
      <div className='relative basis-full'>
        <SlotMachine className='absolute right-0 left-0 top-auto bottom-auto m-auto mt-8 lg:top-0 lg:bottom-0 lg:my-auto lg:ml-0 '></SlotMachine>
      </div>
    </section>
  )
}

export default Projects
