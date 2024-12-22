import { BsArrowDownUp } from "react-icons/bs";
import Image from "next/image";
import CarShowRoom from "./cars/page";

export default function Screen() {
  return (
    <>
     <div className="w-full h-auto">        {/* main div */}
        <div className="flex flex-col justify-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-[30px]"> {/* advertisement section */}
      
        <div>
           <Image
           src={"/images/Ads 1.png"}
           alt="ads 1"
           width={850}
           height={400}
           className="rounded-lg w-[90] h-[70]"
        />
        </div>
        <div>
        <Image
           src={"/images/Ads 2.png"}
           alt="ads 2"
           width={850}
           height={400}
           className="rounded-lg"
           />
           </div>
        </div>  {/* advertisement section closed */}

        {/* pick and  drop section */}
        <div className=" flex flex-col justify-center lg:flex-row space-y-4 lg:space-y-0 mt-5">
            {/* pickup */}
            <div className="w-full lg:w-[600px] bg-white p-4 rounded-lg shadow-md">
                <h2 className="flex items-center space-x-2">
                <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                    <span className="bg-blue-600 w-[10px] h-[10px] rounded-full"></span>
                    </span> 
                    <span className="font-bold text-[16px]">Pick-up</span>
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                    {/* location */}
                    <div className=" flex-1">
                        <label className="text-[16px] font-bold">Location</label>
                        <select className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:ring-blue-500" defaultValue="">
                            <option value="" disabled>Select Country</option>
                        </select>
                    </div>
                    {/* date */}
                     <div className=" flex-1">
                        <label className="text-[16px] font-bold">Date</label>
                        <select className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:ring-blue-500 "defaultValue="" >
                            <option value="" disabled>Select Date</option>
                        </select>
                    </div>
                    {/* Time */}
              <div className="flex-1">
                <label className="text-[16px] font-bold">Time</label>
                <select className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="">
                  <option value="" disabled>Select Time</option>
                </select>
              </div>
                </div>
            </div>
          {/* Arrow Button */}
 <div className="flex justify-center items-center w-[48px] h-[48px] bg-blue-600 text-white rounded-md self-center lg:self-auto mx-5">
            <BsArrowDownUp />
          </div>
           {/* Drop-Off */}
           <div className="w-full lg:w-[600px] bg-white p-4 rounded-lg shadow-md">
            <h2 className="flex items-center space-x-2">
              <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
              </span>
              <span className="font-bold text-[16px]">Drop-Off</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {/* Location */}
              <div className="flex-1">
                <label className="text-[14px] font-bold">Location</label>
                <select className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="">
                  <option value="" disabled>Select Country</option>
                </select>
              </div>
              {/* Date */}
              <div className="flex-1">
                <label className="text-[14px] font-bold">Date</label>
                <select className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="">
                  <option value="" disabled>Select Date</option>
                </select>
              </div>
              {/* Time */}
              <div className="flex-1">
                <label className="text-[14px] font-bold">Time</label>
                <select className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="">
                  <option value="" disabled>Select Time</option>
                </select>
              </div> {/* pick and  drop section closed */}
              </div>
              </div>
        </div> 
     </div>
     <CarShowRoom/>
    </>
  );
}