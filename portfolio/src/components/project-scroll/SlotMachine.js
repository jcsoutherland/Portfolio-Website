import ProjectCard from './ProjectCard'

const SlotMachine = (props) => {
  return (
    <div
      id='slot-gradient'
      className={`${props.className} h-[80%] max-h-[800px] w-[300px] rounded-3xl p-1`}
    >
      <div
        id='slot-background'
        className='relative h-full w-full overflow-hidden rounded-3xl bg-gray-800'
      >
        <div
          id='slot-shading'
          className='absolute top-0 bottom-0 right-0 left-0 z-20 m-auto h-[95%] w-[80%] overflow-hidden rounded-2xl bg-gradient-to-t from-gray-800 via-transparent to-gray-800'
        ></div>
        <div className='absolute top-0 bottom-0 right-0 left-0 z-10 m-auto h-[95%] w-[80%] overflow-hidden rounded-2xl'>
          <div className='absolute top-0 bottom-0 right-0 left-0 z-10 m-auto flex h-[150%] w-full flex-col'>
            <ProjectCard className='flex-[0_0_33%]'></ProjectCard>
            <ProjectCard className='flex-[0_0_33%]'></ProjectCard>
            <ProjectCard className='flex-[0_0_33%]'></ProjectCard>
          </div>
        </div>
        <div
          id='slot-roller'
          className='absolute top-0 bottom-0 my-auto h-[15%] w-full bg-gradient-to-t from-gray-900 via-gray-600 to-gray-900'
        ></div>
      </div>
    </div>
  )
}

export default SlotMachine
