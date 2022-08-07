const Contact = (props) => {
  return (
    <section
      className={`section-block relative bg-gray-200 dark:bg-gray-800  ${props.className}`}
      id={props.id}
    >
      <div id='about-title' className='section-title absolute left-32'>
        CONTACT
      </div>
      <div className='w-1/2 h-1/2 bg-gray-500 absolute right-32'></div>
    </section>
  )
}

export default Contact
