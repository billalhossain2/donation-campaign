import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
        <div><p className="text-[#FF444A] font-bold text-3xl">Donation</p></div>
        <ul className="flex gap-3">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="./all-donation">Donation</NavLink></li>
            <li><NavLink to="./donation-details">Statistics</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar