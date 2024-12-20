import React from "react";
import Image from "next/image";
export default function FeaturedProducts() {
 return(
  
  <div className="min-h-screen bg-gray-100">
  <header className="bg-white py-4 shadow">
    <div className="container mx-auto flex items-center justify-center space-x-6">
      <Image src="/zapier-logo.png" alt="Zapier" width={80} height={40} />
      <Image src="/dropbox-logo.png" alt="Dropbox" width={80} height={40} />
      <Image src="/cremark-logo.png" alt="Cremark" width={80} height={40} />
      <Image src="/x-logo.png" alt="X Logo" width={80} height={40} />
    </div>
  </header>
         
  <main className="container mx-auto px-4 py-8">
    {/* Featured Products Section */}
    <section>
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-4 gap-6"></div>
        {[
          { name: "Lily's Rock Chair", price: "$80",image: "/chair1.png" },
          { name: "Cheap Chair", price: "$20", image: "/chair2.png" },
          { name: "Modern Chair", price: "$30", image: "/chair3.png" },
          { name: "Dining Bench", price: "$25", image: "/chair4.png" },

        ].map((product, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <Image
              src="/01.jpg"
              alt={product.name}
              width={200}
              height={200}
              className="rounded"
            />
            
            <div>
            </section>
             {/* ].map((product, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-4">
            
              <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
              <Image
              src="/11.jpg"
              alt={product.name}
              width={200}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          */}
          
       
   </div>
     </div>
   

    {/* Top Categories Section */}
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
      <div className="grid grid-cols-3 gap-6">
        {[
          { name: "Wisp Chair", products: "23 Products", image: "/category1.png" },
          { name: "Wooden Chair", products: "30 Products", image: "/category2.png" },
          { name: "Sleek Chair", products: "18 Products", image: "/category3.png" },
        ].map((category, index) => (
          <div key={index} className="relative bg-white shadow rounded-lg">
            <Image
              src="/image.png"
              alt={category.name}
              width={300}
              height={300}
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white">
              <h3 className="text-lg font-medium">{category.name}</h3>
              <p className="text-sm">{category.products}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>

    {/* Explore Section */}
   
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Explore New Popular Styles</h2>
      <div className="flex space-x-6">
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="transform -rotate-90 text-blue-600 uppercase font-semibold tracking-wider">
        Explore New and Popular Styles
      </p>
      </div>
        <Image
          src="/13.jpg"
          alt="Explore 1"
          width={200}
          height={200}
          className="rounded-lg shadow"
        />
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/14.jpg"
            alt="Explore 2"
            width={150}
            height={150}
            className="rounded-lg shadow"
          />
          <Image
            src="/image.png"
            alt="Explore 3"
            width={150}
            height={150}
            className="rounded-lg shadow"
          />
          <Image
            src="/06.jpg"
            alt="Explore 4"
            width={150}
            height={150}
            className="rounded-lg shadow"
          />
          <Image
            src="/image.png"
            alt="Explore 5"
            width={150}
            height={150}
            className="rounded-lg shadow"
          />
       
        </div>
      </div>
    </section>
  </main>
</div>
);
};


//      const products = [
//       { id: 1, name: "Stylish Chair", price: "$49", image: "/chair1.jpg" },
//        { id: 2, name: "Modern Chair", price: "$59", image: "/chair2.jpg" },
//       { id: 3, name: "Luxury Chair", price: "$69", image: "/chair3.jpg" },
     
     
    
//   ];
  
//    return (
//        <section className="py-12">
//         <div className="container mx-auto">
//            <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//            {products.map((product) => ( 
//             <div key={product.id} className="bg-white p-4 shadow rounded">
//           <h4 className="text-lg font-semibold">{product.name}</h4>
//                 <p className="text-gray-600">{product.price}</p>
//              </div>
//             ))}
//              </div> 
//              </div>
// </section>
      
//     { id: 1, name: "Stylish Chair", price: "$49", image: "/chair1.jpg" },
//        { id: 2, name: "Modern Chair", price: "$59", image: "/chair2.jpg" },
//       { id: 3, name: "Luxury Chair", price: "$69", image: "/chair3.jpg" },
     
     
    
//      ];
  
//      return (
//      <section className="py-12">
//         <div className="container mx-auto">
//        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
//        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {products.map((product) => ( 
//           <div key={product.id} className="bg-white p-4 shadow rounded">
//                 <Image src="/image.png"alt={product.image} width={100} height={100}className="rounded mb-4" />
//                 {/* <Image src="/02.jpg" alt={product.name} width={100} height={100}className="rounded mb-4" />
//                <Image src="/03.jpg" alt={product.name} width={100} height={100}className="rounded mb-4" />
//                 <Image src="/04.jpg" alt={product.name} width={100} height={100}className="rounded mb-4" />  */}
//                 <h4 className="text-lg font-semibold">{product.name}</h4>
//               <p className="text-gray-600">{product.price}</p>
//             </div>
//             ))}
//         </div> 
//      )
//      }
   