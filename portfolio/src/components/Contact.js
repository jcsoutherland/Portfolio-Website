const Contact = (props) => {
  return (
    <section
      className={`h-[calc(100vh-4rem)] transition-colors duration-300 flex items-center justify-between px-16 bg-gray-100 dark:bg-gray-700  ${props.className}`}
      id={props.id}
    >
      Contact
    </section>
  )
}

export default Contact
