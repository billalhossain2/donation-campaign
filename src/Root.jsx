import { Outlet } from 'react-router-dom'
import Navbar from './components/Shared/Navbar/Navbar'
const Root = () => {
  return (
    <div className='lg:max-w-[90%] md:max-w-[95%] px-3 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  )
}

export default Root