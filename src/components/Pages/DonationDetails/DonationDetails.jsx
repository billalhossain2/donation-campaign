import React from 'react'
import { useParams } from 'react-router-dom'

const DonationDetails = () => {
  const {donationId} = useParams();
  
  return (
    <div>DonationDetails</div>
  )
}

export default DonationDetails