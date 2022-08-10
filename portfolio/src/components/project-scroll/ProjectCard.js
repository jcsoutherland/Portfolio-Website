import Button from '../Button'

const ProjectCard = (props) => {
  return (
    <div
      className={`${props.className} flex h-[50%] w-full max-w-[235px] flex-col items-center bg-gray-200 outline outline-black`}
    >
      <span
        id='project-card-title'
        className='mt-4 basis-[15%] text-xl font-bold tracking-wide'
      >
        PROJECT NAME
      </span>
      <span
        id='project-image'
        className='h-[50%] w-[85%] basis-[60%] rounded-2xl bg-yellow-400'
      ></span>
      <div className={`flex basis-[30%] items-center gap-4`}>
        <div className='button-container-none'>
          <Button
            text='Code'
            src=''
            className='bg-pink-400 dark:text-gray-100'
          />
        </div>
        <div className='button-container-none'>
          <Button
            text='Website'
            src=''
            className='bg-pink-400 dark:text-gray-100'
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
