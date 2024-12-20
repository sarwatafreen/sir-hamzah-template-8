





import React from 'react'
//  import NewLetter from '../components/NewLetter'
// import SingleProduct from './components/SingleProduct'

const page = () => {
  return (
      <div>
          
          {/* <SingleProduct />
           <NewLetter /> */}
       
    </div>
  )
}

export default page








// import Link from "next/link";
// import Image from "next/image";
//  import ProductData from "./ProductData";
// export default function SingleProduct() {

// // const FeaturedProduct = productData;{
//   return (
//     <div className="container mx-auto p-6">
//       {/* Featured Product Section */}
//       <div className="bg-gray-100 p-6 rounded-lg mb-12 shadow text-center">
//         <h2 className="text-3xl font-bold mb-4">featuredProduct.name</h2>
//         <Link href="/product/featured">
//           <Image
//             src="featuredProduct.image"
//             alt="featuredProduct.name"
//             width={400}
//             height={400}
//             className="rounded-lg cursor-pointer"
//           />
//         </Link>
//         <p className="mt-4 text-gray-600">featuredProduct.name</p>
//       </div>
//     </div>
//   );
// }



















// import  SingleProduct from "/";
// export default function SingleProduct() {
//     return (
//       <div>

//  <Second />
 
//       </div>
//     );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
// };

// const products: Product[] = [
//   { id: 1, title: "Library Stool Chair", price: 20, image: "/01.jpg" },
//   {
//     id: 2,
//     title: "Vintage Armchair",
//     price: 40,
//     image: "/02.jpg",
//     originalPrice: 60,
//   },
//   { id: 3, title: "Ergonomic Office Chair", price: 50, image: "/03.jpg" },
//   { id: 4, title: "Modern Dining Chair", price: 35, image: "/04.jpg" },
//   {
//     id: 5,
//     title: "Reclining Lounge Chair",
//     price: 60,
//     image: "/05.jpg",
//     isSale: true,
//   },
//   {
//     id: 6,
//     title: "Adjustable Desk Chair",
//     price: 25,
//     image: "/06.jpg",
//     isNew: true,
//   },
//   { id: 7, title: "Classic Bar Stool", price: 30, image: "/07.jpg" },
//   {
//     id: 8,
//     title: "Sleek High Chair",
//     price: 15,
//     image: "/08.jpg",
//     isSale: true,
//   },
//   { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/09.jpg" },
//   {
//     id: 10,
//     title: "Leather Recliner Chair",
//     price: 150,
//     image: "/10.jpg",
//     isSale: true,
//     originalPrice: 200,
//   },
// ];

// export default function ProductDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const [productId, setProductId] = useState<string | null>(null);
//   const [product, setProduct] = useState<Product | null>(null);
//    console.log(productId)
//   useEffect(() => {
//     const unwrapParams = async () => {
//       try {
//         const resolvedParams = await params;
//         setProductId(resolvedParams.id);

//         const foundProduct = products.find(
//           (item) => item.id === Number(resolvedParams.id)
//         );
//         setProduct(foundProduct || null);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setProductId(null);
//       }
//     };

//     unwrapParams();
//   }, [params]);

//   if (!product) {
//     return (
         
//         <div className="flex items-center justify-center min-h-screen">
//         <p className="text-gray-700 text-xl font-medium">Product not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4">
//       <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={300}
//             height={500}
//             className="rounded-lg"
//             objectFit="cover"
//           />
//         </div>

//         {/* Product Details Section */}
//         <div className="w-full md:w-1/2 p-6">
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
//             ${product.price.toFixed(2)}
//           </button>
//           {product.originalPrice && (
//             <p className="text-sm text-gray-500 line-through mt-2">
//               Original Price: ${product.originalPrice.toFixed(2)}
//             </p>
//           )}
//           <p className="text-gray-700 mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
//             fugiat explicabo iusto qui exercitationem distinctio, perspiciatis
//             dolore provident cum eveniet error illo esse accusamus voluptatibus
//             ducimus impedit laudantium deleniti repellendus.
//           </p>
//           <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
//             Add To Cart
//           </button>
//           {product.isNew && (
//             <span className="text-sm text-green-600 font-medium mt-2 block">
//               New Arrival
//             </span>
//           )}
//           {product.isSale && (
//             <span className="block text-sm text-red-600 font-medium mt-2">
//               On Sale!
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// function Products() {
//   throw new Error("Function not implemented.");
// }
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-gray-700 text-xl font-medium">Product not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4">
//       <div className="flex max-w-4xl w-full">
//         {/* Image Section */}
//         <div className="w-1/2 p-4">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={300}
//             height={500}
//             className="rounded-lg"
//           />
//         </div>

//         {/* Product Details Section */}
//         <div className="w-1/2 p-4">
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
//             ${product.price}
//           </button>
//           {product.originalPrice && (
//             <p className="text-sm text-gray-500 line-through mt-2">
//               Original Price: ${product.originalPrice}
//             </p>
//           )}
//           <p className="text-gray-700 mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
//             fugiat explicabo iusto qui exercitationem distinctio, perspiciatis
//             dolore provident cum eveniet error illo esse accusamus voluptatibus
//             ducimus impedit laudantium deleniti repellendus.
//           </p>
//           <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
//             Add To Cart
//           </button>
//           {product.isNew && (
//             <span className="text-sm text-green-600 font-medium mt-2 block">
//               New Arrival
//             </span>
//           )}
//           {product.isSale && (
//             <span className="block text-sm text-red-600 font-medium mt-2">
//               On Sale!
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
// );
// };





// import { useRouter } from "next/router";
// import Image from "next/image";
//  import productData from "./ProductData";
//  import React from "react";

//  interface Product {
//    image: string;
//    name: string;
//    price: number;
//    description: string;
//  }
 
//  interface ProductData {
//    featuredProduct: Product;
//    otherProducts: Product[];
//  }
 
//  const ProductDetails = ({ product }: { product: Product }) => {
//    return (
//      <div className="container mx-auto p-6">
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg p-6 rounded-lg">
//          {/* Product Image */}
//          <div className="flex justify-center">
//            <IMAGE
//              src={product.image}
//              alt={product.name}
//              className="rounded-lg w-96 h-96 object-cover"
//            />
//          </div>
 
//          {/* Product Details */}
//          <div>
//            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//            <p className="text-gray-600 text-lg mb-4">${product.price.toFixed(2)}</p>
//            <p className="text-gray-700 mb-4">{product.description}</p>
//            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//              Add to Cart
//            </button>
//          </div>
//        </div>
//      </div>
//    );
//  };
 
//  const ProductPage = ({
//    productId,
//    productData,
//  }: {
//    productId: string;
//    productData: ProductData;
//  }) => {
//    // Determine product based on productId
//    const product =
//      productId === "featured"
//        ? productData.featuredProduct
//        : productData.otherProducts[Number(productId)];
 
//    // If no product is found, render a fallback message
//    if (!product) {
//      return <div className="text-center text-2xl mt-20">Product not found</div>;
//    }
 
//    // Render ProductDetails component with the determined product
//    return <ProductDetails product={product} />;
//  };
 
//  export default ProductPage;
 
// export default function ProductDetailsPage() {
//   const router = useRouter();
//   const { productId } = router.query;


//   If productId is "featured", render featured product
//   const product =
//     productId === "featured"
//       ? productData.featuredProduct
//       : productData.otherProducts[Number(productId)];

//   if (!product) {
//     function ProductDetails({ product }: { product: { image: string; name: string; price: number; description: string } | null }) {
//       if (!product) {
//         return <div className="text-center text-2xl mt-20">Product not found</div>;
//       }
    
//       return (
//         <div className="container mx-auto p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg p-6 rounded-lg">
//             {/* Product Image */}
//             <div className="flex justify-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="rounded-lg w-96 h-96 object-cover"
//               />
//             </div>
    
//             {/* Product Details */}
//             <div>
//               <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//               <p className="text-gray-600 text-lg mb-4">${product.price.toFixed(2)}</p>
//               <p className="text-gray-700 mb-4">{product.description}</p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       // );
//     };
// //     return <div className="text-center text-2xl mt-20">Product not found </div>;
// //   }

// //   return (
// //     <div className="container mx-auto p-6">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg p-6 rounded-lg">
// //         {/* Product Image */}
// //         <div className="flex justify-center">
// //           {/* <Image
// //             src={product.image}
// //             alt={product.name}
// //             width={400}
// //             height={400}
// //             className="rounded-lg"
// //           /> */}
// //         </div>

// //         {/* Product Details */}
// //         <div>
// //           {/* <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
// //           <p className="text-gray-600 text-lg mb-4">${product.price}</p>
// //           <p className="text-gray-700 mb-4">{product.description}</p> */}
// //           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }