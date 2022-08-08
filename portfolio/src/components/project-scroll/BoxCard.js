import Button from '../Button'

const BoxCard = (props) => {
  const techImageArray = props.techImageArray
  let isMobile = false
  var width = window.innerWidth > 0 ? window.innerWidth : window.screen.width
  if (width < 1280) {
    isMobile = true
  }

  return (
    <div
      className={`flex h-full w-full shrink-0 grow-0 snap-center snap-always flex-col items-center overflow-hidden rounded-3xl bg-white p-8 dark:bg-gray-600 ${props.className}`}
    >
      <span className='mb-4 text-4xl font-bold tracking-wide text-gray-700 dark:text-gray-300'>
        {props.name}
      </span>
      <div
        id='grid-projects'
        className='grid h-full w-full grid-flow-row grid-cols-[200px_minmax(1fr,1fr)_0px] grid-rows-3 gap-4  pb-8 lg:grid-flow-col lg:px-12'
      >
        <div
          className='row-span-2 overflow-hidden rounded-2xl'
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div
          id='technology-icons'
          className=' row-span-1 flex flex-col items-center overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700'
        >
          <span className='text-xl font-bold tracking-wide text-gray-700 dark:text-gray-300'>
            Tech Used
          </span>
          <div
            id='logo-container'
            className='flex h-full w-full items-center justify-center gap-4 p-3 lg:gap-8'
          >
            {techImageArray.map((img, index) => {
              return <TechImage img={img} key={index} />
            })}
          </div>
        </div>
        <div className='row-span-3 flex flex-col items-center justify-between overflow-hidden whitespace-normal rounded-2xl bg-gray-200 p-4 dark:bg-gray-700'>
          {!isMobile && (
            <div>
              <h1 className='pb-2 text-center text-xl font-bold tracking-wide text-gray-700 dark:text-gray-300'>
                Project Description
              </h1>
              <p
                id='project-description'
                className='text-gray-700 dark:text-gray-300'
              >
                {props.description}
              </p>
            </div>
          )}
          <div className='flex flex-row gap-4'>
            <div className=''>
              <Button
                text='Code'
                src=''
                className='w-full bg-gray-300 text-gray-800 hover:bg-gray-400 dark:text-gray-300'
              />
            </div>
            <div className=''>
              <Button
                text='Website'
                src=''
                className='w-full bg-gray-300 text-gray-800 hover:bg-gray-400 dark:text-gray-300'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TechImage = (props) => {
  return (
    <span
      className='h-8 w-8 drop-shadow-lg lg:h-14 lg:w-14 smheight:h-8 smheight:w-8'
      style={{
        backgroundImage: `url('./media/technology-icons/${props.img}')`,
        backgroundSize: 'cover',
      }}
    ></span>
  )
}

export default BoxCard
