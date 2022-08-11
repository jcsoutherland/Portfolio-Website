const Contact = (props) => {
  return (
    <section
      className={`section-block bg-gray-300 dark:bg-gray-800  ${props.className}`}
      id={props.id}
    >
      <div id='about-title' className='section-title'>
        CONTACT
      </div>
      <div className='section-contents'></div>
    </section>
  )
}

export default Contact
