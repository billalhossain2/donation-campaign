import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import notFoundImage from "../../../assets/not-found.png";
import useTitle from '../../../Hooks/useTitle';
const ErrorPage = () => {
  useTitle("Error Page - Donation Campaign")
  const error = useRouteError()
  const navigate = useNavigate()
  const handleRedirectToHome = ()=>{
    navigate("/")
  }
  return(
    <div className='flex flex-col items-center text-center font-bold text-3xl px-2'>
      <img className='w-60' src={notFoundImage} alt="" />
      <div className='mb-5 space-y-3'>
      <h1>{error?.status}</h1>
      <h1>{error?.statusText}</h1>
      <h1>{error?.error?.message}</h1>
      </div>
      <button onClick={handleRedirectToHome} className='btn bg-[#FF444A] hover:bg-[#FF444A] text-white'>Go Home</button>
    </div>
  )
}

export default ErrorPage