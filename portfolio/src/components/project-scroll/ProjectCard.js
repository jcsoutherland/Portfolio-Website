import Button from '../Button'

const ProjectCard = (props) => {
  return (
    <div
      className={`${props.className} flex h-[50%] w-full max-w-[235px] flex-col items-center bg-gray-200 outline outline-black xl:max-w-[400px]`}
    >
      <span
        id='project-card-title'
        className=' flex basis-[15%] items-center text-xl font-bold tracking-wide'
      >
        {props.name}
      </span>
      {/*add project image*/}
      <span
        id='project-image'
        className='h-[50%] w-[75%] basis-[60%] bg-yellow-400'
      ></span>
      <div className={`flex basis-[20%] items-center gap-4 p-3`}>
        <div className='button-container-none'>
          <Button
            text='Code'
            src={props.codeLink}
            className='bg-pink-400 text-gray-100'
          />
        </div>
        <div className='button-container-none'>
          <Button
            text='Website'
            src={props.websiteLink}
            className='bg-pink-400 text-gray-100'
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
