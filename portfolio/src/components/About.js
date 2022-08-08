const About = (props) => {
  return (
    <section
      className={`section-block bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      {props.mobile ? (
        <>
          <div id='about-title' className='section-title'>
            ABOUT
          </div>
          <div className='section-contents'></div>
        </>
      ) : (
        <>
          <div className='section-contents'></div>
          <div id='about-title' className='section-title'>
            ABOUT
          </div>
        </>
      )}
    </section>
  )
}

export default About
