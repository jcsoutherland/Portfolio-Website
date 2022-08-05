const Card = (props) => {
  return (
    <section
      className={`h-[calc(100vh-4rem)] bg-gray-100 flex items-center justify-between px-16 ${props.className}`}
      id={props.id}
    >
      {props.children}
    </section>
  )
}

export default Card
