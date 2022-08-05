const Landing = (props) => {
  return (
    <section
      className={`h-[calc(100vh-4rem)] flex items-center justify-between px-16 bg-white dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='font-bold text-5xl text-purple-700 dark:text-purple-500'>
        <h1>Joey Southerland</h1>
        <h3 className='font-medium text-lg text-gray-500 mx-10 dark:text-white'>
          Front-end web developer
        </h3>
      </div>
      <div className='h-4/5 w-3/5 bg-gray-500'></div>
    </section>
  )
}

export default Landing
