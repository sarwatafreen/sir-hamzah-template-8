
import React from "react";
import Image from "next/image";
interface Products {
  id: number;
  name: string;
  image: string;
  price: string;
}

const products: Products[] = [
  { id: 1, name: "Product 1", image: "/path-to-image1.jpg", price: "$10" },
  { id: 2, name: "Product 2", image: "/path-to-image2.jpg", price: "$15" },
  { id: 3, name: "Product 3", image: "/path-to-image3.jpg", price: "$20" },
  { id: 4, name: "Product 4", image: "/path-to-image4.jpg", price: "$25" },
];

const ProductPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 shadow-md hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;


// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { FC } from 'react';

// // Define the types for Product
// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   description: string;
//   features: string[];
// }

// const ProductPage: FC = () => {
//   const router = useRouter();
//   const { productId } = router.query;

//   // Safely load products data
//   const products: Product[] = require('../public/products.json').products;
//   const product = products.find((p) => p.id === parseInt(productId as string, 10));

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div>
//       <div className="product-details">
//         <Image
//           src={/images/${product.image}} // Adjusted path to align with public folder
//           alt={product.name}
//           width={500}
//           height={500}
//         />
//         <h2>{product.name}</h2>
//         <p>Price: ${product.price}</p>
//         <p>{product.description}</p>
//         <ul>
//           {product.features.map((feature, index) => (
//             <li key={index}>{feature}</li>
//           ))}
//         </ul>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;








// // import Image from 'next/image';
// // import { useRouter } from 'next/router';
// // import { FC } from 'react';

// // // Define the types for Product and Products
// // interface Product {
// //   id: number;
// //   name: string;
// //   price: number;
// //   description: string;
// //   image: string;
// //   features: string[];
// // }

// // interface ProductsData {
// //   products: Product[];
// // }

// // const ProductPage: FC = () => {
// //   const router = useRouter();
// //   const { productId } = router.query;

// //   // Safely import the products data
// //   const products: Product[] = require('../public/products.json').products;
// //   const product = products.find((p) => p.id === parseInt(productId as string, 10));

// //   if (!product) {
// //     return <div>Product not found.</div>;
// //   }

// //   return (
// //     <div>
// //       <div className="product-details">
// //         <Image src={product.image} alt={product.name} width={500} height={500} />
// //         <h2>{product.name}</h2>
// //         <p>Price: ${product.price}</p>
// //         <p>{product.description}</p>
// //         <ul>
// //           {product.features.map((feature, index) => (
// //             <li key={index}>{feature}</li>
// //           ))}
// //         </ul>
// //         <button>Add to Cart</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;