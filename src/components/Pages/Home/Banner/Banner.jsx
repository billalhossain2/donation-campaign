import React from "react";
import bgImage from "../../../../assets/background-image.jpg";
import Swal from "sweetalert2";
const Banner = ({setSearchText}) => {
  const handleSearch = e=>{
    e.preventDefault()
    const form = e.target;
    const searchTxt = form.search.value;
    if(!searchTxt){
      Swal.fire({
        icon: 'error',
        title: 'Oops... Empty field!',
        text: 'You did not give any value!',
        footer: 'Please provide search category!',
      })
    }
   setSearchText(searchTxt)
  }
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
        //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-[#ffffffe1] min-h-screen"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-5 lg:text-5xl md:text-5xl text-3xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          {/* search field  */}
          <div>
              <form className="flex md:flex-row md:gap-0 gap-2 flex-col" action="" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search category"
                className="md:w-auto w-[100%] outline-none border-[1px] border-solid border-gray-300 px-5 py-3 text-black md:rounded-l-xl rounded-md"
              />
              <button className="bg-[#FF444A] hover:bg-[#FF444A] border-0 text-white px-5 md:py-0 py-3 md:rounded-r-xl md:rounded-none rounded-md">Search</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
