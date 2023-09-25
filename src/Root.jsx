import { Outlet } from 'react-router-dom'
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'
const Root = () => {
  return (
    <div className='lg:max-w-[90%] md:max-w-[95%] px-3 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root