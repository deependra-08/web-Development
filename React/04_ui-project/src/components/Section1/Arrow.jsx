const Arrow = () => {
  return (
    <div className='h-full flex flex-col justify-between w-5/5  '>
      <div className="p-8">
        <h3 className="text-6xl leading-[1.4] font-bold mb-7 hover:text-gray-800 transition-colors duration-200">Prospective <br/><span className="bg-gray-200 rounded-full px-6 hover:bg-gray-300 transition-colors duration-200">Customer</span> <br/> Segmentation</h3>
        <p className="text-xl font-medium text-shadow-black text-gray-700 hover:text-gray-900 transition-colors duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum odit itaque explicabo quos tenetur, non sint corrupti temporibus assumenda accusantium neque vero, illum quisquam officiis at? Beatae, ipsum illo!</p>
      </div>
      <div className='text-8xl hover:scale-110 hover:translate-x-2 hover:translate-y-2 transition-all duration-300 cursor-pointer'>
      <i className="ri-arrow-right-up-line"></i>
    </div>
  </div>
  )
}

export default Arrow