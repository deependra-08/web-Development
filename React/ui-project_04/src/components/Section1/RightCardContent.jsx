import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
                <h2 className='text-2xl font-bold bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
                <div>
                    <p className='text-lg mb-10 text-white leading-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illum, nam voluptatibus unde fugit sit?</p>
                    <div className='flex items-center gap-3'>
                        <button className='px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 font-semibold'>{props.tag}</button>
                        <button aria-label="move-right" className='p-2 bg-gray-200 rounded-full px-3 py-2 hover:bg-gray-300 hover:scale-110 transition-all duration-200'>
                          <MoveRight size={20} color="#0f172a" />
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent