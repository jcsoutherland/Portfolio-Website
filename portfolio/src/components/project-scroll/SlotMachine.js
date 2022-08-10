import ProjectCard from './ProjectCard'

const SlotMachine = (props) => {
  const ProjectCardArray = [
    <ProjectCard
      className='flex-[0_0_33%]'
      key={Math.random()}
      codeLink=''
      websiteLink=''
      img=''
      name='PROJECT NAME'
    ></ProjectCard>,
    <ProjectCard
      className='flex-[0_0_33%]'
      key={Math.random()}
      codeLink=''
      websiteLink=''
      img=''
      name='PROJECT NAME'
    ></ProjectCard>,
    <ProjectCard
      className='flex-[0_0_33%] '
      key={Math.random()}
      codeLink=''
      websiteLink=''
      img=''
      name='PROJECT NAME'
    ></ProjectCard>,
    <ProjectCard
      className='flex-[0_0_33%] '
      key={Math.random()}
      codeLink=''
      websiteLink=''
      img=''
      name='PROJECT NAME'
    ></ProjectCard>,
  ]

  const handleScroll = (e) => {
    if (e.target.id === 'up-arrow') {
      console.log('scroll up')
    } else {
      console.log('scroll down')
    }
  }

  return (
    <div
      id='background-gradient'
      className={`${props.className} h-[80%] max-h-[800px] w-[300px] rounded-3xl p-1`}
    >
      <span
        id='up-arrow'
        className='absolute left-0 top-[-20px] right-0 z-50 m-auto aspect-square w-12 drop-shadow-lg transition-all duration-300 hover:w-16 '
        style={{
          backgroundImage: `url('./media/up-arrow.svg')`,
          backgroundSize: 'cover',
        }}
        onClick={handleScroll}
      ></span>
      <span
        id='down-arrow'
        className='absolute bottom-[-20px] left-0 right-0 z-50 m-auto aspect-square w-12 drop-shadow-lg transition-all duration-300 hover:w-16 '
        style={{
          backgroundImage: `url('./media/down-arrow.svg')`,
          backgroundSize: 'cover',
        }}
        onClick={handleScroll}
      ></span>
      <div
        id='slot-background'
        className='relative h-full w-full overflow-hidden rounded-3xl bg-gray-900 '
      >
        <div
          id='slot-shading'
          className='pointer-events-none absolute top-0 bottom-0 right-0 left-0 z-20 m-auto h-[95%] w-[80%] overflow-hidden rounded-2xl bg-gradient-to-t from-gray-800 via-transparent to-gray-800'
        ></div>
        <div className='absolute top-0 bottom-0 right-0 left-0 z-10 m-auto h-[95%] w-[80%] overflow-y-auto rounded-3xl'>
          <div className='absolute top-0 bottom-0 right-0 left-0 z-10 m-auto flex h-[calc(150%)] w-full flex-col'>
            {ProjectCardArray}
          </div>
        </div>
        <div
          id='slot-roller'
          className='absolute top-0 bottom-0 my-auto h-[15%] w-full bg-gradient-to-t from-black via-gray-600 to-black'
        ></div>
      </div>
      <div
        id='scroll-button-mobile'
        className='mt-8 mb-2 flex max-h-[10%] w-full items-center justify-center rounded-xl bg-gray-400 text-4xl font-bold tracking-wide text-gray-900 lg:hidden'
      >
        PLAY
      </div>
    </div>
  )
}

export default SlotMachine
