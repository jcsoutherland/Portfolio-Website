const Button = (props) => {
  return (
    <button
      className={`button select-none  ${props.className}`}
      onClick={() => {
        window.open(props.src, '_blank')
      }}
    >
      {props.text}
    </button>
  )
}

export default Button
