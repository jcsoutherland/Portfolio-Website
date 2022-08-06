import ThreeElement from './ThreeD/ThreeElement'

const Landing = (props) => {
  return (
    <section
      className={`z-0 cursor-default transition-colors duration-300 h-[calc(100vh-4rem)] flex items-center justify-between  bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='h-full w-full'>
        <ThreeElement />
      </div>
    </section>
  )
}

export default Landing
