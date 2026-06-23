import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer'>
        <img className='h-full w-full object-cover hover:brightness-90 transition-all duration-300' src={props.img} alt="Portrait" />
       <RightCardContent id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard