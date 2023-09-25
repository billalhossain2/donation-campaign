import React from 'react'
import Banner from './Banner/Banner'
import DonationCards from './DonationCards/DonationCards'
import useTitle from '../../../Hooks/useTitle'

const Home = () => {
  useTitle("Home - Donation Campaign")
  return (
    <div>
      <Banner></Banner>
      <DonationCards></DonationCards>
    </div>
  )
}

export default Home