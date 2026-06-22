import { Star } from 'lucide-react'

const Section2 = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGfLtrpftYVlAP49wd_DW0u5F3gG1wZN9TG26W2ZAYA&s=10',
      text: 'This platform transformed how we manage our finances. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Entrepreneur',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DT1UrNNoM3pkQreS9wstFqv_9K8iBWP-dyrl5Xrs9Q&s=10',
      text: 'Amazing user experience and excellent customer support. Best decision ever!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Freelancer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PCu3Kg0sTtoi9imKPWhTtMWJd-TaXC66bxluaB4vlQ&s=10',
      text: 'Seamless integration and powerful features. A game-changer for my business.',
      rating: 5
    }
  ]

  return (
    <div className='h-screen w-full bg-linear-to-b from-amber-50 to-gray-100 py-20'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='mb-16 text-center'>
          <h2 className='text-5xl font-bold mb-4 hover:text-gray-800 transition-colors duration-200'>What Our Users Say</h2>
          <p className='text-xl text-gray-600'>Join thousands of satisfied customers using our platform</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className='w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div>
                  <h3 className='font-bold text-lg group-hover:text-amber-600 transition-colors duration-200'>{testimonial.name}</h3>
                  <p className='text-gray-500 text-sm'>{testimonial.role}</p>
                </div>
              </div>
              
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill='#f59e0b' color='#f59e0b' className='group-hover:scale-110 transition-transform duration-200' />
                ))}
              </div>
              
              <p className='text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200'>
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className='mt-20 text-center'>
          <button className='bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300'>
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section2