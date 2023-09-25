import { createBrowserRouter } from "react-router-dom";
import DonationDetails from "../components/Pages/DonationDetails/DonationDetails";
import Statistics from "../components/Pages/Statistics/Statistics";
import Root from "../Root";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage.jsx/ErrorPage";
import MyDonations from "../components/Pages/MyDonations/MyDonations";

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
            path:"donation-details/:donationId",
            element:<DonationDetails></DonationDetails>
        },
        {
            path:"my-donations",
            element:<MyDonations></MyDonations>
        },
        {
            path:"statistics",
            element:<Statistics></Statistics>
        }
      ]
    },
  ]);

  export default router;
