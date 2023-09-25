import React from "react";
import bgImage from "../../../../assets/background-image.jpg";
const Banner = () => {
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
          <div className="flex md:flex-row md:gap-0 gap-2 flex-col">
              <input
                type="text"
                placeholder="Search here...."
                className="md:w-auto w-[100%] outline-none border-[1px] border-solid border-gray-300 px-5 py-3 text-black md:rounded-l-xl rounded-md"
              />
              <button className="bg-[#FF444A] hover:bg-[#FF444A] border-0 text-white px-5 md:py-0 py-3 md:rounded-r-xl rounded-md">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
