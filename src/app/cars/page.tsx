'use client';

import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
// Car Images
// import Car1 from "../public/images/car copy.png";
// import Car2 from '../public/images/car (1).png';
// import Car3 from "../public/images/Car (2).png";
// import Car4 from "../public/images/suv (4).png";
// import Car5 from "../public/images/suv.png";
// import Car6 from "../public/images/car copy.png";
// import Car7 from "../public/images/car (1).png";
// import Car8 from "../public/images/suv (4).png";
// import Car9 from "../public/images/car (1).png";
// import Car10 from "../public/images/suv.png";
// import Car11 from "../public/images/car (1).png";
// import Car12 from "../public/images/suv.png";

// Car Data
const carData = [
  { id: 1, name: "Koenigsegg", type: "Sport", image: "/images/car copy.png", fuel: "90L", transmission: "Manual", people: "2 People", price: "$99.00", duration: "day", heartColor: "pink" },
  { id: 2, name: "Nissan GT-R", type: "Sport", image:"/images/car2.png" , fuel: "80L", transmission: "Manual", people: "2 People", price: "$80.00", duration: "day", off: "$100.00", heartColor: "black" },
  { id: 3, name: "Rolls-Royce", type: "Sedan", image: "/images/Car (2).png", fuel: "70L", transmission: "Manual", people: "4 People", price: "$96.00", duration: "day", heartColor: "pink" },
  { id: 4, name: "Nissan GT-R", type: "Sport", image: "/images/suv (4).png", fuel: "80L", transmission: "Manual", people: "2 People", price: "$80.00", duration: "day", off: "$100.00", heartColor: "black" },
  { id: 5, name: "All New Rush", type: "ESUV", image: "/images/suv.png", fuel: "70L", transmission: "Manual", people: "6 People", price: "$72.00", duration: "day", off: "$80.00", heartColor: "black" },
  { id: 6, name: "CR-V", type: "SUV", image: "/images/car copy.png", fuel: "80L", transmission: "Manual", people: "6 People", price: "$80.00", duration: "day", heartColor: "pink" },
  { id: 7, name: "All New Terios", type: "SUV", image:"/images/car2.png" , fuel: "90L", transmission: "Manual", people: "6 People", price: "$74.00", duration: "day", heartColor: "black" },
  { id: 8, name: "CR-V", type: "SUV", image: "/images/suv (4).png" , fuel: "80L", transmission: "Manual", people: "6 People", price: "$800.00", duration: "day", heartColor: "pink" },
  { id: 9, name: "MG ZX Exclusice", type: "Manual", image: "/images/car2.png", fuel: "70L", transmission: "Automatic", people: "4 People", price: "$76.00", duration: "day", off: "$80.00", heartColor: "pink" },
  { id: 10, name: "New MG ZS", type: "SUV", image: "/images/suv.png", fuel: "80L", transmission: "Manual", people: "5 People", price: "$80.00", duration: "day", heartColor: "black" },
  { id: 11, name: "MG ZX Excite", type: "Hatchback", image:"/images/car2.png" , fuel: "90L", transmission: "Manual", people: "4 People", price: "$74.00", duration: "day", heartColor: "pink" },
  { id: 12, name: "New MG ZS", type: "SUV", image: "/images/suv.png", fuel: "80L", transmission: "Manual", people: "6 People", price: "$80.00", duration: "day", heartColor: "black" }
];

export default function CarShowRoom() {
  const [displayedCar, setDisplayedCar] = useState(12); // Control the number of visible cars

  // Function to load more cars
  const getMoreCar = () => {
    setDisplayedCar((prevDisplayed) => prevDisplayed + 4); // Add 4 more cars
  };

  return (
    <div className="relative w-full min-h-screen p-8 bg-gray-100 justify-center items-center">
      {/* Heading */}
      <div className="flex gap-[50px] lg:justify-between items-center mb-8 lg:gap-[1079px]">
        <p className="text-xl text-gray-700 font-bold justify-center items-center">Recommended Car</p>
        <p className="text-sm text-blue-600 cursor-pointer hover:underline">
          <a href="/categories" className="justify-center items-center" >View all</a>
        </p>
      </div>

      {/* Car Section */}
      <div className="flex flex-wrap gap-4 justify-center">
        {carData.slice(0, displayedCar).map((car) => (
          <div
            key={car.id}
            className="w-[320px] h-[420px] bg-white rounded-lg shadow-lg p-5 flex flex-col"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-semibold w-full text-gray-800 flex flex-col">
                {car.name}
                <span className="text-sm text-gray-500">{car.type}</span>
              </span>

              {/* Heart Icon */}
              {car.heartColor === "pink" ? (
                <IoHeartSharp className="ml-2 text-red-500 w-[24px] h-[24px]" />
              ) : (
                <IoHeartOutline className="ml-2 text-gray-400 w-[24px] h-[24px]" />
              )}
            </div>

            {/* Car Image */}
            <div className="mb-5">
              <Image
                src={car.image}
                alt={`Image of ${car.name}`}
                width={250}
                height={140}
                className="mx-auto mt-6"
              />
            </div>

            {/* Car Specifications */}
            <div className="flex justify-between mt-10">
              <span className="flex items-center gap-1 text-[14px] font-medium">
                <BsFuelPumpFill className="w-[24px] h-[24px]" /> {car.fuel}
              </span>
              <span className="flex items-center gap-1 text-[14px] font-medium">
                <HiUsers className="w-[24px] h-[24px]" /> {car.people}
              </span>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-semibold text-gray-800">
                {car.price}/{" "}
                <span className="text-iconsCard text-[14px]">{car.duration}</span>
              </p>
              <Link href= "/dashboard">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <a href="/dashboard">Rent Now</a>
                </button>
                
                </Link>
              
            </div>
          </div>
        ))}
      </div>

      {/* Show More Cars Button */}
      {displayedCar < carData.length && ( // Only show if there are more cars to display
        <div className="flex justify-center mt-8">
          <button
            className="w-[160px] h-[44px] bg-blue-600 rounded-[5px] text-white"
            onClick={getMoreCar}
          >
            Show More Cars
          </button>
        </div>
      )}
    </div>
  );
}
