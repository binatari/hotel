import React from "react";
import Carousel from "../Components/Carousel";
import Title from "../Components/Title";

const apartments = () => {
  const stan1 = ["stan1", "stan1b", "stan1c"];
  const stan2 = ["stan2", "stan2b",];
  const conference = ['con1', 'con1b', 'con1c', 'con1d']
  const suites = ['demure', 'demure1']
  const luxury = ['luxury', 'luxury1']
  const home = ['home', 'home1', 'home2']
  return (
    <div className="container mx-auto">
      <div className="pt-28 pb-10 px-4">
        <Title text="Rooms" />
        <div className="flex items-center">
          <p>
            Our <strong>Room</strong> Apartments contain AC, TV & Fridge powered
            with uninterrupted power supply.
          </p>
          <button className="bg-black px-6 py-2 text-white ml-4 flex-shrink-0">
            Book Now
          </button>
        </div>
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 justify-center py-12">
          <div className="md:col-span-6 col-span-12">
            <Carousel images={stan1} text="Standard Room 001 - $35,000" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Carousel images={stan2} text="Standard Room 002 - $35,000" />
          </div>
          <div className="md:col-span-6 md:col-start-4 col-span-12">
            <Carousel images={conference} text="Conference room 004 - $35,000" />
          </div>
        </div>
      </div>
      <div className="pt-12 pb-10 px-4">
        <Title text="Suites" />
        <div className="flex items-center">
          <p>
            Our <strong>Suite</strong> Apartments come exclusive with their own
            living room and standard facilities like AC, TV & Fridge
          </p>
          <button className="bg-black px-6 py-2 text-white ml-4 flex-shrink-0">
            Book Now
          </button>
        </div>
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 justify-center py-12">
          <div className="md:col-span-6 col-span-12">
            <Carousel images={home} text="Luxury Suite 005 - 48,000" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Carousel images={luxury} text="Luxury Suite 005 - 48,000" />
          </div>
          <div className="md:col-span-6 md:col-start-4 col-span-12">
            <Carousel images={suites} text="Suite De muire - 45,000" />
          </div>
        </div>
      </div>
      <div className="pt-12 pb-10 px-4">
        <Title text="Penthouse" />
        <div className="flex items-center ">
          <p>
            Our Penthouse Apartments is luxury at it highest floor, equipped
            with a living room, standard AC, TV & Fridge
          </p>
          <button className="bg-black px-6 py-2 text-white ml-4 flex-shrink-0">
            Book Now
          </button>
        </div>
        <div className="relative min-h-[34rem] bg-[url(../public/assets/penthouse.jpeg)] bg-cover bg-center w-full mt-16">
          <div className="bg-black absolute top-0 left-0 text-white text-2xl font-semibold  px-6 py-2">
            <span>Penthouse - 55,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default apartments;
