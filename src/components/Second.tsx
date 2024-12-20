// import Image from "next/image";
// import  SingleProduct from "/Second";
// // Define type for product items
// type ProductItem = {
//   title: string;
//   imageSrc: string;
//   alt: string;
// };

// // Product items data array
// const productItems: ProductItem[] = [
//   { title: "Product 1", imageSrc: "/Dining.png", alt: "Product 1" },
//   { title: "Product 2", imageSrc: "/images/product2.jpg", alt: "Product 2" },
//   { title: "Product 3", imageSrc: "/images/product3.jpg", alt: "Product 3" },
//   { title: "Product 4", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 5", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 6", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 7", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 8", imageSrc: "/images/product4.jpg", alt: "Product " },
// ];

// export default function OurProductSection() {
//   return (
//     <section className="w-full py-10 bg-white">
//       {/* Our Product Section Title */}
//       <div className="text-center mb-8">
//         <h3 className="text-3xl font-bold text-blue-600">Our Product</h3>
//       </div>

//       {/* Product Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
//         {productItems.map((product) => (
//           <div
//             key={product.title}
//             className="relative bg-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden"
//           >
//             <Image
//               src={product.imageSrc}
//               alt={product.alt}
//               width={300}
//               height={300}
//               className="object-cover w-full h-64"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
//               <p className="text-sm font-medium">{product.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }