import React from "react";
import Link from "next/link";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button"

// import { Badge } from "/components/ui/badge"

 function Header() {
    return(
  <nav className="w-full bg-white pt-[14px] pb-[14px]">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0">
    <div className="hidden md:flex gap-8 ml-3">
    <Link href="/" className="text-[#007580] text-[14px] font-medium">
        Home
      </Link>
      <Link href="/Products" className="text-[14px] font-medium">
        Shop
      </Link>
      <Link href="/SingleProduct" className="text-[14px] font-medium">
        Product
      </Link>
      <Link href="/FAQ" className="text-[14px] font-medium">
        Pages
      </Link>
      <Link href="/Aboutpage" className="text-[14px] font-medium">
        About
      </Link>
    </div>
    <div className="hidden md:flex items-center gap-4 ml-auto mr-4">
     <Link href="/Contactpage"> <span className="font-normal text-[#636270] text-[14px]">
        Contact:
      </span>
        
      </Link>
      <span className="font-medium text-[#272343] text-[14px] ml-1">
        (808) 555-0111
      </span>
    </div>
    <Badge  />
    <Button />
    <button
      className="lg:hidden flex items-center justify-center p-2"
      // onClick={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          // d={
          //   // isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"

          // }
        />
      </svg>
    </button>
  </div>
  {/* {isMenuOpen && ( */}
    <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
      <Link href="/" className="text-[#007580] text-[14px] font-medium">
        Home
      </Link>
      <Link href="/Products" className="text-[14px] font-medium">
        Shop
      </Link>
      <Link href="/Single Products" className="text-[14px] font-medium">
        Product
      </Link>
      <Link href="/faq" className="text-[14px] font-medium">
        Pages
      </Link>
      <Link href="/Aboutpage" className="text-[14px] font-medium">
        About
      </Link>
    </div>
  
</nav>
);
};
 
  
      {/* //   <header className="bg-gray-100 p-4 shadow">
      //   <div className="container mx-auto flex justify-between items-center">
      //     <h1 className="text-xl font-bold">Crafters</h1>
      //     <nav className=" flex space-x-4">
      //       <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
      //       <a href="#" className="text-gray-700 hover:text-blue-500">Shop</a>
      //       <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
      //     </nav>
      //   </div>
      // </header> */}
         

  
  export default Header;