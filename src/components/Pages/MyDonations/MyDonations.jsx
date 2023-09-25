import { useEffect, useState } from "react"
import getStoredDonationsIds from "../../../Utilities/getStoredDonationsIds"
import MyDonationItem from "./MyDonationItem"
const MyDonations = () => {
  const storedDonatedData =  getStoredDonationsIds()

  const [myDonations, setMyDonations] = useState([])
  
  //get donated ids from localStorage
  useEffect(()=>{
    fetch(`donation_campaign_data.json`)
    .then(res => res.json())
    .then(data => {
      const alreadyDonatedData = data.filter(donation => storedDonatedData.includes(donation.id));
      setMyDonations(alreadyDonatedData)
    })
    .catch(error => console.log(error.message))
  }, [])
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {
        myDonations?.map(donation => <MyDonationItem key={donation.id} donation={donation}></MyDonationItem>)
      }
    </div>
  )
}

export default MyDonations