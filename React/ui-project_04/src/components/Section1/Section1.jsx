import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-amber-50'>
        <Navbar />
        <Page1Content users={props.users}/>
    </div>
  )
}

export default Section1