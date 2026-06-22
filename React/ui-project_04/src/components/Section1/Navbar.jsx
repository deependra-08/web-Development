const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18' >
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full text-sm tracking-wide font-medium hover:bg-gray-300 hover:shadow-lg transition-all duration-200'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar