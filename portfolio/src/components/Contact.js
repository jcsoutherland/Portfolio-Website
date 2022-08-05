const Contact = (props) => {
  return (
    <section
      className={`h-[calc(100vh-4rem)] flex items-center justify-between px-16 bg-gray-50 dark:bg-gray-800 ${props.className}`}
      id={props.id}
    >
      Contact
    </section>
  )
}

export default Contact
