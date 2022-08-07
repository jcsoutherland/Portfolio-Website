import ThreeElement from './ThreeD/ThreeElement'
import { ButtonContainer } from './ThreeD/ThreeElement'

const Landing = (props) => {
  var width = window.innerWidth > 0 ? window.innerWidth : window.screen.width

  return (
    <section
      className={`z-0 cursor-default section-block bg-gray-100 dark:bg-gray-700 ${props.className}`}
      id={props.id}
    >
      <div className='h-full w-full'>
        {width > 768 ? <ThreeElement /> : null}
      </div>
    </section>
  )
}

export default Landing
