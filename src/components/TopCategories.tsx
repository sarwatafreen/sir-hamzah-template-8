import React from "react";
import Image from "next/image";
export default function TopCategories() {
    const categories = [
      { id: 1, name: "Living Room", image: "/ category1.jpg" },
      { id: 2, name: "Wooden Chairs",image:"/category2.jpg" },
      { id: 3, name: "Office Chairs",image: "/category3.jpg" },
    ];

    return (
<div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="transform -rotate-90 text-blue-600 uppercase font-semibold tracking-wider">
        Explore New and Popular Styles
      </p>
   
      <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6">Top Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                  <div key={category.id} className="bg-white p-4 shadow rounded">
                      {/* Render only one image dynamically */} 
                       <Image
                          src="/05.jpg"
                          alt={category.image}
                          width={100}
                          height={100}
                          className="rounded mb-4"
                      />
                      <Image
                          src="/08.jpg"
                          alt={category.image}
                          width={100}
                          height={100}
                          className="rounded mb-4"
                      />
                       <Image
                          src="/image 19.png"
                          alt={category.image}
                          width={100}
                          height={100}
                          className="rounded mb-4"
                      />
                       
                      <h4 className="text-lg font-semibold">{category.name}</h4>
                  </div>
              ))}
          </div>
      </div>
  </section>
 
   </div>
);}

      // <section className="py-12 bg-gray-100">
      //   <div className="container mx-auto">
      //     <h3 className="text-2xl font-bold mb-6">Top Categories</h3>
      //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      //       {categories.map((category) => (
      //         <div key={category.id} className="bg-white p-4 shadow rounded">
      //            <Image src="/05.jpg" alt={category.name} width={100} height={200} className="rounded mb-4" />  
      //             <Image src="/08.jpg" alt={category.name} width={100} height={200} className="rounded mb-4" /> 
      //            <Image src="/image 19.png" alt={category.name} width={100} height={200} className="rounded mb-4" /> 

      //           <h4 className="text-lg font-semibold">{category.name}</h4>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
  //     // </section>
  //   );
  // }