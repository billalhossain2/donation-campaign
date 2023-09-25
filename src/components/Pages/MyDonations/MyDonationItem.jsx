import React from 'react'
import donationImg from "../../../assets/Health.png";
import { useNavigate } from 'react-router-dom';
const MyDonationItem = ({donation}) => {
    const {id, picture, category, title, price, card_bg_color, category_bg_color, text_color} = donation || {};
    const navigate = useNavigate()
    const handleViewDetailsNavigation = ()=>{
        navigate(`/donation-details/${id}`)
    }
  return (
    <div style={{backgroundColor:card_bg_color}} className='flex lg:flex-row flex-col items-center xl:w-auto'>
        <img className='lg:w-[300px] w-[100%] h-[200px]' src={picture} alt="donated image" />
        <div className='pe-5 py-3 flex items-center'>
            <div className='space-y-2 ml-5'>
            <button style={{backgroundColor:category_bg_color, color:text_color}} className='bg-slate-400 px-2 rounded-md font-bold'>{category}</button>
            <h3 className='font-bold text-xl'>{title}</h3>
            <p style={{color:text_color}} className='font-bold'>{price}</p>
            <button onClick={handleViewDetailsNavigation} style={{backgroundColor:text_color}} className='px-5 py-2 rounded-md font-bold text-white'>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default MyDonationItem