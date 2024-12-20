import React from "react";
 import Image from "next/image";
 import Link from "next/link";
//  import {FaShoppingCart} from "react-icon/fa";
export default function TopHeader() {
    return (

       
       
      <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Image
            src="/Vector.png"
            alt="Comforty Logo"
            width={20}
            height={23.34}
            className="ml-3"
          />
          <h2 className="text-[19px] font-medium">Comforty</h2>
        </div>
        <Link href="/cart">
          <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
             {/* <FaShoppingCart className="text-xl" />   */}
            <span className="hidden sm:inline">Cart</span>
            <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
              2
            </div>
          </button>
        </Link>
      </div>
    </div>
           
          );
        };
        
        // <header className="top-header">
        // <div className="logo-container"> </div>
        
        //     <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
        //       <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        //      {/* <header className="bg-gray-100 p-4 shadow "> */}
        //  {/* <div className="container mx-auto flex justify-between items-center">  */}
        //  <div className=" flex items-center space-x-3">
        //   <Link href="/">
            
        //       <Image src="/vector.png" alt="Comforty Logo" width={20} height={20} className="ml-3"/>
        //       <h1 className="text-[19px] font-medium ">Compforty</h1>
        //   </Link>
          
        //   </div>
        //   {/* </header> */}
          
        //   </div>
         
        //  <header>
        // <nav className="main-nav flex justify-between">
        //   <ul>
        //     <li>
        //       <Link href="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link href="/shop">Shop</Link>
        //     </li>
        //     <li>
        //       <Link href="/product">Product</Link>
        //     </li>
        //     <li>
        //       <Link href="/pages">Pages</Link>
        //     </li>
        //     <li>
        //       <Link href="/about">About</Link>
        //     </li>
        //     <li> 
        //     <div className="flex justify-between"> 
        //       <Link href="/contact">Contact</Link>
        //       </div>
        //       </li>
        //    </ul>
        //    </nav>
        //    </header> 
           
            
        // {/* ... other elements like search, user actions ... */}
 
 