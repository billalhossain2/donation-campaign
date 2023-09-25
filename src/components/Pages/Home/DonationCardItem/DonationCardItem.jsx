import React from 'react'
import CardImg from "../../../../assets/Health.png";
import { Link } from 'react-router-dom';

const DonationCardItem = ({donation}) => {
    const {id, picture, title, category, card_bg_color, category_bg_color, text_color} = donation || {};
  return (
   <Link to={`donation-details/${id}`}>
    <div style={{backgroundColor:card_bg_color}} className='rounded-md cursor-pointer'>
        <img src={CardImg} alt="Health" />
        <div className='pl-4 pb-4 space-y-3 mt-5'>
        <button style={{backgroundColor:category_bg_color, color:text_color}} className='bg-slate-300 px-5 py-2 rounded-md'>{category}</button>
        <h3 style={{color:text_color}} className='font-bold'>{title}</h3>
        </div>
    </div>
   </Link>
  )
}

export default DonationCardItem