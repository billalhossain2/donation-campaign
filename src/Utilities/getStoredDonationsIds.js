const getStoredDonationsIds = () => {
  const donationsIds = localStorage.getItem("storedDonationsIds");
  if (donationsIds) {
    return JSON.parse(donationsIds);
  }
  return [];
};

export default getStoredDonationsIds;
