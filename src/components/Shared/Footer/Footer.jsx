import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#c42f34] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Cause</h2>
        <p className="text-center text-gray-300 max-w-md mb-6">
          At Donation Campaign, we are committed to making a positive impact in the world. Our mission is to help the help the destress people and make them sustainable.
        </p>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="/donate" className="text-gray-300 hover:text-white">
            Donate
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <p className="text-gray-300">© {new Date().getFullYear()} Donation Campaign</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
