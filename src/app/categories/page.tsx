'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="pl-2 border-2 border-white shadow-md p-4 w-60"> {/* Left section with border and padding */}
  <h1 className="space-x-5 text-sm text-gray-600">TYPE</h1>

  {/* Options for TYPE */}
  {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type, idx) => (
    <div key={idx} className="flex mt-3 pl-2">
      <label className="flex">
        <input type="checkbox" />
        <p className="pl-1">{type}</p>
      </label>
      <p className="text-gray-500 text-sm pl-1">({idx * 2 + 10})</p>
</div>
  ))}

  {/* CATEGORY Section */}
  <h1 className="space-x-5 text-sm text-gray-600 mt-5">CATEGORY</h1>

  {/* Options for CATEGORY */}
  {['2 Person', '4 Person', '6 Person', '8 or More'].map((category, idx) => (
    <div key={idx} className="flex mt-3 pl-2">
      <label className="flex">
        <input type="checkbox" />
        <p className="pl-1">{category}</p>
      </label>
      <p className="text-gray-500 text-sm pl-1">({idx * 2 + 10})</p>
    </div>
  ))}

  {/* PRICE Range */}
  <div className="mt-5">
    <h1 className="space-x-5 text-sm text-gray-600 mt-5">PRICE</h1>
    <Image src="/images/priceRanger.png" alt="price ranger" width={180} height={20} className="mt-5 pl-1" />
    <p className="text-gray-500 font-semibold mt-1">Max. $100.00</p>
  </div>
</div>

      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src={"/images/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src={"/images/Switch.png"} alt="" width={60} height={60} className="w-[80px]" />
          <Image src={"/images/Drop - Off.png"} alt="" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Koenigsegg', image: '/images/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/images/car2.png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/images/suv.png', desc: 'Sport' },
              { title: 'All New Rush', image: '/images/suv (4).png', desc: 'Luxury' },
              { title: 'CR - V', image: '/images/suv (4).png', desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: '/images/suv.png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/images/suv (4).png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/images/suv.png', desc: 'SUV' },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/images/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                  <Image src={"/images/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src={"/images/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/dashboard'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: '/images/suv.png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/images/suv (4).png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/images/suv.png', desc: 'Sport' },
                { title: 'NEW MG ZS', image: '/images/suv (4).png', desc: 'Sedan' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">  
                      {car.title} <Image src={"/images/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    <Image src={"/images/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                    <Image src={"/images/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <a href="/dashboard">Rent Now</a>
                </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}