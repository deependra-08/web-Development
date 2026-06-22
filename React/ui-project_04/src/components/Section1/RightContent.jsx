import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div className='h-full rounded-4xl flex overflow-auto flew-nowrap gap-10 p-4 w-2/3 scroll-smooth'>
        {props.users.map(function(elem,idx){
          return  <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent