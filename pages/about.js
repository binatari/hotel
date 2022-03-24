import React from "react";

const about = () => {
  return (
    <>
      <div className="py-28">
        <div className="container mx-auto flex justify-center items-center flex-col">
          <h1 className="text-5xl pb-2 text-center">About Us</h1>
          <p className="text-center pt-6">
            We offer a secured and comfortable short time stay at our well
            furnished <br /> apartment, air conditioned, uninterrupted power
            supply and customer services.
            <br /> Alphamsa service apartment is well tailored to your high
            standard and to express your individuality.
            <br /> You can afford to dwell, with an higher Quality of Living and
            remarkable value.
            <br /> We guarantee you a homely service throughout your stay.{" "}
            <br />
            <br />
            <i> “Home far away from home”</i>
          </p>
        </div>
      </div>
      <section className="bg-[#1E1D28] grid grid-cols-6 ">
        <div className="col-span-6 md:col-span-4 "></div>
        <div className="px-10 col-span-6 md:col-span-2 text-white py-6">
          <h2 className="py-6 text-2xl font-bold">Contact Us</h2>
          <div className="border-y-[1px] border-solid border-gray-200 border-opacity-25 py-6 ">
            <span className="font-bold pt-6 pb-4 block">Location</span>
            <ul>
              <li className=" list-disc">
                <span className="block pb-2"> Nigeria</span>
                <p>
                  No. 1 Ahmed Kigo Road, Off Shehu Laminu Avenue NITR Quarters,
                  Kaduna. +234 083 7181 261, +234 803 6337 700
                </p>
              </li>
            </ul>
          </div>
          <ul className="pt-6">
          <li className=" list-disc pb-4">
                <span  className="block pb-2">Phone</span>
                <p>
                +234 083 7181 261, +234 803 6337 700
                </p>
              </li>
              <li className=" list-disc pb-4">
                <span  className="block pb-2">Email</span>
                <p className="break-words">
                alphamasaserviceapartment@gmail.com
                </p>
              </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default about;
