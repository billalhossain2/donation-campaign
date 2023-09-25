import { useEffect, useState } from "react"
import getStoredDonationsIds from "../../../Utilities/getStoredDonationsIds"
import MyDonationItem from "./MyDonationItem"
import useTitle from "../../../Hooks/useTitle"
const MyDonations = () => {
  useTitle("Donation - Donation Campaign")
  const storedDonatedData =  getStoredDonationsIds()

  const [myDonations, setMyDonations] = useState([])
  const [slicedDonations, setSlicedDonations] = useState([])

  const handleShowAll = ()=>{
    setSlicedDonations(myDonations)
  }
  
  //get donated ids from localStorage
  useEffect(()=>{
    fetch(`donation_campaign_data.json`)
    .then(res => res.json())
    .then(data => {
      const alreadyDonatedData = data.filter(donation => storedDonatedData.includes(donation.id));
      setMyDonations(alreadyDonatedData)
      setSlicedDonations(alreadyDonatedData.slice(0, 4))
    })
    .catch(error => console.log(error.message))
  }, [])
  return (
    <>
    <div className="grid md:grid-cols-2 gap-5 mt-16">
      {
        slicedDonations?.map(donation => <MyDonationItem key={donation.id} donation={donation}></MyDonationItem>)
      }
    </div>
    <div className="text-center mb-16">
    <button onClick={handleShowAll} className={`${myDonations.length > 4 && slicedDonations.length === 4 ? '' : 'hidden'} bg-[#009444] text-white px-5 py-2 rounded-md mt-5`}>Show All</button>
    </div>
    </>
  )
}

export default MyDonations