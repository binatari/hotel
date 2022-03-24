import React from "react";

const Footer = () => {
  return (
      <>
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 ">
      <div className="text-white px-6">
        <h2 className="text-2xl">Contact info</h2>
        <ul>
          <li>08037181261</li>
          <li>08036337700</li>
          <li>
            No.1 Ahmed Kigo Road, Off Shehu Lamino Avenue NITR Quarters, Kaduna
          </li>
        </ul>
      </div>
      <div className="text-white px-6">
        <h2 className="text-2xl">Quick Link</h2>
        <ul>
          <li>Home</li>
          <li>Our Services</li>
          <li>
           About Us
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center px-6">
        <img src="" alt="" />
        <div className="flex bg-white">
         <img src="" alt="" />
         <h2 className="text-2xl">Contact us Via Email</h2>
        </div>
      </div>
    </div>
    <div className=" flex justify-center items-center text-white py-6">
        &copy; 2022 Alphamasa Service Apartment. All rights reserved 
      </div>
    </> 
  );
};

export default Footer;
