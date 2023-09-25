import getStoredDonationsIds from "./getStoredDonationsIds";

const storeDonationId = (donationId) => {
  const donationsIds = getStoredDonationsIds();
  donationsIds.push(donationId);
  localStorage.setItem("storedDonationsIds", JSON.stringify(donationsIds));
};

export default storeDonationId;
