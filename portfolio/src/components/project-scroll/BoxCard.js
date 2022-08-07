const BoxCard = (props) => {
  const techImageArray = props.techImageArray

  return (
    <div
      className={`bg-white dark:bg-gray-600 rounded-3xl h-full w-full flex-grow-0 flex-shrink-0 flex items-center p-8 flex-col ${props.className}`}
    >
      <span className='text-gray-700 dark:text-gray-300 text-4xl font-bold tracking-wide mb-4'>
        {props.name}
      </span>
      <div
        id='grid-projects'
        className='h-full w-full grid grid-cols-[500px_minmax(0px,1fr)_0px] grid-rows-3 grid-flow-col px-12 gap-4 ml-4 pb-8'
      >
        <div
          className='row-span-2 rounded-2xl overflow-hidden'
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div
          id='technology-icons'
          className=' row-span-1 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden flex flex-col items-center'
        >
          <span className='text-gray-700 dark:text-gray-300 text-xl pt-2 font-bold tracking-wide'>
            Tech Used
          </span>
          <div
            id='logo-container'
            className='flex items-center m-4 justify-center gap-8 w-full h-full'
          >
            {techImageArray.map((img, index) => {
              return <TechImage img={img} key={index} />
            })}
          </div>
        </div>
        <div className='row-span-3 p-4  bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden whitespace-normal'>
          <h1 className='text-center text-xl pb-2 font-bold tracking-wide text-gray-700 dark:text-gray-300'>
            Project Description
          </h1>
          <p
            id='project-description'
            className='text-gray-700 dark:text-gray-300'
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

const TechImage = (props) => {
  return (
    <span
      className='h-14 w-14 drop-shadow-lg'
      style={{
        backgroundImage: `url('./media/technology-icons/${props.img}')`,
        backgroundSize: 'cover',
      }}
    ></span>
  )
}

export default BoxCard
