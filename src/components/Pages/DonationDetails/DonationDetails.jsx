import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import storeDonationId from '../../../Utilities/storeDonationId';

const DonationDetails = () => {
  const {donationId} = useParams();
  const donationIntId = parseInt(donationId)
  
  //get specific donation based on id
  const [donationDetails, setDonationDetails] = useState(null)

  useEffect(()=>{
    fetch('../donation_campaign_data.json')
    .then(res => res.json())
    .then(data => {
      const singleDonation = data.find(donation => donation.id === donationIntId);
      setDonationDetails(singleDonation)
    })
    .catch(error => console.log(error.message))
  }, [])

  const handleDonationStore = (donationId)=>{
    storeDonationId(donationId)
  }
  return (
    <div className='my-16 rounded-lg'>
      <div className='md:min-h-[550px] min-h-[350px] relative' style={{
        backgroundImage:`url(${donationDetails?.picture})`,
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat'
        
      }}>
      <div className='bg-[#0B0B0B80] absolute w-full bottom-0 py-5'>
        <button onClick={()=>handleDonationStore(donationDetails.id)} style={{backgroundColor:donationDetails?.text_color}} className='font-bold px-5 py-3 rounded-sm text-white ml-9'>Donate {donationDetails?.price}</button>
      </div>

      </div>
      <h3 className='text-3xl font-bold my-8'>{donationDetails?.title}</h3>
      <p className='text-justify text-[#0B0B0BB2]'>{donationDetails?.description}</p>
    </div>
  )
}

export default DonationDetails