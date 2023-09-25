import React, { useState } from 'react'
import Banner from './Banner/Banner'
import DonationCards from './DonationCards/DonationCards'
import useTitle from '../../../Hooks/useTitle'

const Home = () => {
  useTitle("Home - Donation Campaign")
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Banner searchText={searchText} setSearchText={setSearchText}></Banner>
      <DonationCards searchText={searchText} setSearchText={setSearchText}></DonationCards>
    </div>
  )
}

export default Home