import React, { useEffect, useState } from 'react'
import DonationCardItem from '../DonationCardItem/DonationCardItem'

const DonationCards = ({searchText}) => {
    const [donations, setDonations] = useState([])

    useEffect(()=>{
        fetch('donation_campaign_data.json')
        .then(res => res.json())
        .then(data => setDonations(data))
        .catch(error => console.log(error.message))
    }, [])
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-24 mb-20'>
        {
            donations
            .filter(item => {
              if(searchText){
                const pattern = new RegExp(searchText.toLowerCase())
                if(pattern.test(item.category.toLowerCase())){
                  return item;
                }
              }else{
                return item;
              }
            })
            .map(donation => <DonationCardItem key={donation.id} donation={donation}></DonationCardItem>)
        }
    </div>
  )
}

export default DonationCards