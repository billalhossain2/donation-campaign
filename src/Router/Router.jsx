import { createBrowserRouter } from "react-router-dom";
import DonationDetails from "../components/Pages/DonationDetails/DonationDetails";
import AllDonation from "../components/Pages/AllDonation.jsx/AllDonation";
import Statistics from "../components/Pages/Statistics/Statistics";
import Root from "../Root";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage.jsx/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"donation-details",
            element:<DonationDetails></DonationDetails>
        },
        {
            path:"all-donation",
            element:<AllDonation></AllDonation>
        },
        {
            path:"statistics",
            element:<Statistics></Statistics>
        }
      ]
    },
  ]);

  export default router;
