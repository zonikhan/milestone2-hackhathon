import Image from "next/image"

export default function Payment() {
  return (
    <>
      <div className="lg:w-auto w-[237px]   h:auto mt-[50px] flex flex-wrap">
        {/* Card Section */}
        <div className="card lg:w-[492px] h-[530px] w-[327px] p-5  mt-12 lg:h-[560px] lg:mt-[36px] lg:ml-[1000px] bg-white ml-6 rounded-[10px] mb-[30px] sm:ml-0 sm:w-full sm:h-auto ">
          {/* Header Section */}
          <div className="text mb-4">
            <h1 className="text-[20px] text-black font-bold">Rental Summary</h1>
            <p className="text-[14px] text-gray-500">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>
          {/* Image and Car Info Section */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[132px] h-[108px]">
              <Image src={"/images/car.png"} width={100} height={100}  alt="Card Image" className="mt-3 rounded-md" />
            </div>
            <div>
              <h1 className="text-[24px] font-bold text-black">
                Nissan GT - R
              </h1>
              <p className="text-yellow-500 text-[20px] font-semibold flex items-center">
                ★★★★☆
                <span className="text-gray-500 text-[14px] ml-2">
                  440+ Reviewer
                </span>
              </p>
            </div>
          </div>
          {/* Subtotal and Tax Section */}
          <div className="subtotal flex justify-between py-2 border-t mt-8">
            <span className="text-gray-500 text-[16px] mt-6">Subtotal</span>
            <span className="text-[16px] font-semibold text-black mt-8">
              $80.00
            </span>
          </div>
          <div className="subtotal flex justify-between py-2 ">
            <span className="text-gray-500 text-[16px]">Tax</span>
            <span className="text-[16px] font-semibold text-black">$0</span>
          </div>
          {/* Apply Promo Code Section */}
          <div className="apply flex justify-between items-center bg-gray-100 py-4 px-4 rounded-md mt-4">
            <span className="text-[14px] text-gray-500">Apply promo code</span>
            <button className="text-black text-[14px] font-semibold">
              Apply now
            </button>
          </div>
          {/* Total Rental Price Section */}
          <div className="totalRental justify-around flex lg:mt-6">
            <span className="lg:text-[20px] text-[16px]  mt-3 lg:mr-24 font-semibold text-black">
              Total Rental Price
            </span>
            <span className="lg:text-[32px] text-[20px] font-bold text-black">$80.00</span>
          </div>
          <p className="text-[14px] text-gray-500 ml-3">
            Overall price rental
          </p>
        </div>
        {/* Payment Method Section */}
        <div className="paymentMedthod h-auto lg:mb-20 mb-4  lg:w-[852px] lg:h-[2176px]  lg:-mt-[590px]  lg:ml-[90px] w-[372px]  sm:w-full sm:h-auto mt-[900px] ml-0">
          <div className="billing w-[327px] h-[516px] lg:w-[852px] lg:h-[336px] bg-white rounded-[10px] ml-6 ">
            <div className="w-[232px] h-[48px]   pt-[24px] pl-[24px]">
              <h1 className="text-[20px] font-bold ">Billing Info</h1>
              <p className="text-lablelTxt text-[14px] font-medium">
                Please enter your billing info
              </p>
            </div>
            <div className="flex flex-wrap lg:mt-[50px] ">
              <div className=" w-[386px] h-[92px] ml-[24px] mt-10 lg:mt-0 ">
                <label htmlFor="Name">
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    Name
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="pl-[20px] lg:w-[386px] w-[275px]  h-[56px] bg-[#F6F7F9] rounded-[10px]"
                />
              </div>
              <div className=" w-[386px] h-[92px]  ml-[24px]">
                <label htmlFor="Phone">
                  {" "}
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    Phone Number
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="pl-[20px] lg:w-[386px]  w-[275px]  h-[56px] bg-[#F6F7F9]  rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-[30px]">
              <div className=" w-[386px] h-[92px] ml-[24px]">
                <label htmlFor="Name">
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    Address
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="pl-[20px] w-[275px]  lg:w-[386px] h-[56px] bg-[#F6F7F9]  rounded-[10px]"
                />
              </div>
              <div className=" w-[386px] h-[92px] ml-[24px]">
                <label htmlFor="Phone">
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    Town / City
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Town or City"
                  className="pl-[20px] lg:w-[386px] w-[275px] h-[56px] bg-[#F6F7F9]  rounded-[10px]"
                />
              </div>
            </div>
          </div>
          <div className="Rental  bg-white w-[327px] h-[900px] lg:w-[852px] lg:h-[716px] mt-6  mb-6 lg:mb-0 rounded-[10px] lg:mt-9 ml-6">
            <div className="RentalInfo w-[327px] h-[516px] lg:w-[852px] lg:h-auto bg-white rounded-[10px]  ">
              <div className="w-[232px] h-[48px]   pt-[24px] pl-[24px]">
                <h1 className="text-[20px] font-bold ">Rental Info</h1>
                <p className="text-lablelTxt text-[14px] font-medium">
                  Please select your rental date
                </p>
              </div>
              <div className="flex flex-wrap lg:mt-[50px] ">
                <div className=" w-[386px] h-[92px] ml-[24px] mt-10 lg:mt-0 ">
                  <div className="flex pb-2">
                    <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                      <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                    </span>
                    <span className="font-bold text-[16px] pl-3">Pick-Up</span>
                  </div>
                  <label htmlFor="Name">
                    <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                      Location
                    </p>
                  </label>
                  <select
                    className="pl-[20px] lg:w-[386px] w-[275px]  h-[56px]   text-[#90A3BF] bg-[#F6F7F9] rounded-[10px]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your country
                    </option>
                  </select>
                </div>
                <div className=" w-[386px] h-[92px]  ml-[24px] mt-8">
                  <label htmlFor="Phone">
                    {" "}
                    <p
                      className="mb-2 text-[#1A202C] text-[16px] font-semibold"
                    >
                      Date
                    </p>
                  </label>
                  <select
                    className="pl-[20px] lg:w-[386px] w-[275px]  h-[56px]   text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your date
                    </option>
                  </select>{" "}
                </div>
              </div>
              <div className="flex flex-wrap mt-[30px]">
                <div className=" w-[386px] h-[92px] ml-[24px]">
                  <label htmlFor="Name">
                    <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                      Time
                    </p>
                  </label>
                  <select
                    className="pl-[20px] lg:w-[386px] w-[275px]  h-[56px]   text-[#90A3BF] bg-[#F6F7F9] rounded-[10px]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your time
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex pb-2 mt-10 lg:ml-7 ">
                    <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                      <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                    </span>
                    <span className="font-bold text-[16px] pl-3">Drop-Off</span>
                  </div>
<div className="lg:flex lg:gap-16">
                  <div className=" w-[295px] h-[92px]  ml-[24px] mt-8">
                  <label htmlFor="Phone">
                    {" "}
                    <p
                      className="mb-2 text-[#1A202C] text-[16px] font-semibold"
                    >
                      Location
                    </p>
                  </label>
                  <select
                    className="pl-6 lg:w-[386px] w-[275px]  h-[56px]   text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your date
                    </option>
                  </select>{" "}
                </div>
                
                <div className="pl-[26px] w-[386px] h-[92px]  lg:ml-[24px] mt-8">
                  <label htmlFor="Phone">
                    {" "}
                    <p
                      className="mb-2 text-[#1A202C] text-[16px] font-semibold"
                    >
                      Date
                    </p>
                  </label>
                  <select
                    className="pl-[20px] lg:w-[386px] w-[275px]  h-[56px]   text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your date
                    </option>
                  </select>{" "}
                </div>
                </div>
                <div className=" w-[386px] h-[92px]  ml-[24px] mt-8">
                  <label htmlFor="Phone">
                    {" "}
                    <p
                      className="mb-2 text-[#1A202C] text-[16px] font-semibold"
                    >
                      Time
                    </p>
                  </label>
                  <select
                    className="pl-[20px] lg:w-[386px] w-[275px]  h-[56px]   text-[#90A3BF] bg-[#F6F7F9] rounded-[10px] "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your date
                    </option>
                  </select>{" "}
                </div>

            </div>
            
          </div>
          <div className="methodPay   w-[327px] h-[730px] lg:w-[852px] lg:h-[596px] bg-white rounded-[10px] lg:mt-9 ml-6">
          <div className="w-[262px] h-[48px]   pt-[24px] lg:pl-[24px] pl-[15px]">
                <h1 className="text-[20px] font-bold ">Payment Method</h1>
                <p className="text-lablelTxt text-[14px] font-medium">
                  Please enter your payment method
                </p>
                
<span className="flex ">
                    </span>
                    <div className=" w-[295px] h-[484px] lg:w-[804px] lg:h-[318px] bg-[#F7F8F9] mt-8 rounded-[10px]">
                  <div className="flex pt-[24px]  lg:pl-[24px] pl-2  ">
                    <span className=" bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                      <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                    </span>
                    <span className="font-bold text-[16px] pl-3">Credit Card</span><span className="flex ml-14 lg:ml-[540px] w-[92px] h-[20px]">    <Image src={"/images/VisaIcons.png"} alt="Vissa Icons" width={92} height={20}/></span>
                
                    </div>
                    <div className="flex flex-wrap  lg:mt-[50px] ">
              <div className=" lg:w-[362px] ml-4 lg:h-[52px] lg:ml-[20px]  mt-10 lg:mt-0 ">
                <label htmlFor="Name">
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                  Card Number
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-[263px] h-[56px]  pl-[20px] lg:w-[362px]  lg:h-[56px] bg-white rounded-[10px]"
                />
              </div>
              <div className="w-[362px] h-[52px] lg:ml-10 ml-4 mt-3">
                <label htmlFor="Phone">
                  {" "}
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    Card Holder
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="pl-[20px] lg:w-[356px]  w-[263px]  h-[56px]  bg-white  rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-wrap lg:mt-[30px] ">
              <div className=" w-[362px] h-[52px] lg:ml-[24px]  mt-12 ml-4 lg:mt-[24px]">
                <label htmlFor="Name">
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    Expration Date
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="pl-[20px] w-[263px]  lg:w-[362px] h-[56px]  bg-white  rounded-[10px]"
                />
              </div>
              <div className=" w-[362px] h-[52px] lg:ml-[30px] ml-4 lg:mt-[24px] mt-12">
                <label htmlFor="Phone">
                  <p className="mb-2 text-[#1A202C] text-[16px] font-semibold">
                    CVC
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Town or City"
                  className="pl-[20px] lg:w-[362px] w-[263px] h-[56px]  bg-white rounded-[10px]"
                />
              </div>
                    </div>
                    <div className="flex lg:w-[804px] w-[295px] h-[52px] lg:h-[56px] lg:mt-[70px] mt-16  rounded-[10px] bg-[#F6F7F9]">
                <input type="radio" className="w-[24px] h-[24px] lg:ml-[36px] lg:mt-4 mt-4 ml-2" />
              <label htmlFor="" className="text-[16px] font-semibold lg:mt-[17px] mt-4 ml-2 ">PayPal</label>
            <Image src={"/images/paypal.png"} alt="PayPal Icons" width={500} height={100}  className="w-[100px] h-[24px] lg:ml-[540px] ml-20  mt-4"/>
              </div>
              
              </div>

              <div className="flex lg:w-[804px] w-[295px] h-[52px] lg:h-[56px] lg:mt-[90px] mt-20  rounded-[10px] bg-[#F6F7F9]">
                <input type="radio" className="w-[24px] h-[24px] lg:ml-[36px] lg:mt-4 mt-4 ml-2" />
              <label htmlFor="" className="text-[16px] font-semibold lg:mt-[17px] mt-4 ml-2 ">Bitcoin</label>
            <Image src={"/images/Bitcoin.png"} alt="bitcoin Icons" width={500} height={100}  className="w-[100px] h-[24px] lg:ml-[540px] ml-20  mt-4"/>
              </div>

                            </div>

          </div>
          <div className="confirmation bg-white h-[476px] w-[327px] lg:w-[852px] lg:h-[484px] rounded-[10px] lg:mt-9 mt-4 ml-6">
          <div className="lg:w-[436px] w-[208px] h-[68px] lg:h-[48px]   pt-[24px] lg:pl-[24px] pl-[15px]">
                <h1 className="text-[20px] font-bold ">Confirmation</h1>
                <p className="text-lablelTxt lg:text-[14px] text-[12px] font-medium">
                We are getting to the end. Just few clicks and your rental is ready!</p>
                
          </div>
          <div className="flex lg:w-[804px] w-[295px]  h-[64px] lg:h-[56px] lg:mt-[90px] mt-12  ml-4 lg:ml-[1.6rem]  rounded-[10px] bg-[#F6F7F9]">
                <input type="checkbox" className="w-[24px] h-[24px] lg:ml-[36px] lg:mt-4 mt-4 ml-2" />
              <label htmlFor="" className="text-[12px] text-[#1F2544] lg:text-[16px] font-semibold lg:mt-[17px] mt-4 ml-2 ">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
              </div>

              <div className="flex lg:w-[804px] w-[295px] h-[64px] lg:h-[56px] lg:mt-[30px] mt-4 ml-4 lg:ml-[1.6rem]  rounded-[10px] bg-[#F6F7F9]">
                <input type="checkbox" className="w-[24px] h-[24px] lg:ml-[36px] lg:mt-4 mt-4 ml-2" />
              <label htmlFor="" className="text-[12px] lg:text-[16px]  text-[#1F2544]  font-semibold lg:mt-[17px] mt-4 ml-2 ">I agree with our terms and conditions and privacy policy.</label>
              </div>
              <button className="w-[140px] h-[56px] mt-[24px] ml-[1.6rem] bg-btnBg text-white rounded-[10px] text-[16px]">Rent Now</button>   
<Image src={"/images/Layer.png"} alt="layer image" width={20} height={20}  className="ml-[1.9rem] mt-5" />
<div className="lg:w-[548px] lg:h-[52px] w-[295px] h-[68px] ml-8 ">
  <h1 className="text-[16px] font-bold">All your data are safe</h1>
  <p className="text-lablelTxt text-[12px] font-medium">We are using the most advanced security to provide you the best experience ever.</p>
</div>
</div>       
        </div>
     
      </div>
    </>
  );
}