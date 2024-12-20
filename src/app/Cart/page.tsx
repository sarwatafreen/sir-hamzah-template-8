import React from "react";
import Image from 'next/image'
const Cart = () => {
    return (
  <div>
   <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      </div> 
      
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src="/1.jpg"
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/2.jpg"
            alt="2"
            width={305}
     …
<div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-center mb-12">
        What makes our Brand Different
      </h2>
      
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            {/* <FaTruck className="text-[#007580] mb-2" /> */}
            Next day as standard
          </h3>
          
          <p className="text-[16px] font-normal text-[#007580]  mt-4">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        </div> 
        
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            {/* <FaCheck className="text-[#007580] mr-2" /> */}
            Made by true artisans
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4 text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>
        
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            {/* <IoFileTrayOutline className="text-[#007580] mr-3" /> */}
            Unbeatable prices
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            {/* <BiSolidLeaf className="text-[#007580] mr-3" /> */}
            Recycled packaging
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4">
            We use 100% recycled material to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>
      
    </div>
<div className="max-w-screen-xl mx-auto mt-16 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[48px] text-[#333333] font-bold mb-4">
          Questions Looks Here
        </h1>

        <p className="text-[16px] font-normal mb-8 text-[#4F4F4F]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-24">
          <div>
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What types of chairs do you offer?
                {/* <FaPlus /> */}
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                Do your chairs come with a warranty?
                {/* <FaPlus /> */}
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                Can I try a chair before purchasing?
                {/* <FaPlus /> */}
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                How can we get in touch with you?
                {/* <FaPlus /> */}
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What will be delivered? And When?
                {/* <FaPlus /> */}
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                How do I clean and maintain my Comforty chair?
                {/* <FaPlus /> */}
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
   </div>
   
);
};
export default Cart