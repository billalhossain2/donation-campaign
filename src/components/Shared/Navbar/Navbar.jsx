import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/Logo.png";
import "./Navbar.css";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from "react";
const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleShowBar = ()=>{
        setShow(!show)
    }
  return (
    <div className="flex justify-between items-center my-5">
        <div>
            <Link to="/"><p className="text-[#FF444A] font-bold text-3xl">
                <img className="lg:w-auto lg:h-auto md:w-auto md:h-auto w-48" src={logoImg} alt="" />
            </p></Link>
        </div>
        <ul className="lg:flex md:flex hidden gap-10">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="./my-donations">Donation</NavLink></li>
            <li><NavLink to="./statistics">Statistics</NavLink></li>
        </ul>
        {/* Mobile Menu  */}
        <div className="lg:hidden md:hidden absolute right-3 top-5">
            <p onClick={handleShowBar} className="flex justify-end mb-3">{show ? <ImCross className="text-3xl"></ImCross> : <FaBars className="text-3xl"></FaBars>}</p>
        <ul className={`relative duration-500 z-50 font-bold ${show ? 'top-0' : 'top-[-500px]'} text-right space-y-5 bg-[#bfd1d1da] pl-16 pb-16 pt-5 pe-3`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="./my-donations">Donation</NavLink></li>
            <li><NavLink to="./statistics">Statistics</NavLink></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar