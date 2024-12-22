import React from 'react'
import Image from 'next/image'
const Sidebar = () => {
  return (
    <>
    
        {/* First Section: TYPE and CATEGORY */}
<div className="pl-2 border-2 border-white shadow-md p-4 w-72"> {/* Left section with border and padding */}
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
    </>
  )
}

export default Sidebar
