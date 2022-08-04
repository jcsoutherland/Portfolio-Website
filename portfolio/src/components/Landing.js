const Landing = (props) => {
  return (
    <section
      className={`h-screen bg-white flex items-center justify-between px-16 ${props.className}`}
    >
      <div className='font-bold text-5xl text-purple-700'>
        <h1>Joey Southerland</h1>
        <h3 className='font-medium text-lg text-gray-500 mx-10'>
          Front-end web developer
        </h3>
      </div>
      <div className='h-4/5 w-3/5 bg-gray-500'></div>
    </section>
  )
}

export default Landing
