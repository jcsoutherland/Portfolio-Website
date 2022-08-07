const About = (props) => {
  return (
    <section
      className={`section-block relative bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='w-1/2 h-1/2 bg-gray-500 absolute left-32'></div>
      <div
        id='about-title'
        className='section-title text-gray-400 absolute right-32'
      >
        ABOUT
      </div>
    </section>
  )
}

export default About
