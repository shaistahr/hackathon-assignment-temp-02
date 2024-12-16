"use client"

import Carts from "../components/Carts";
import FilterBar from "../components/FilterBar";
const productsArray = [
  {
    id: 1,
    name: "The Candy Chair",
    price: 250,
    image: "/products/1.png",

  },
  
  {
    id: 2,
    name: "Pluto Vase Set",
    price: 125,
    image: "/products/2.png",
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: 95,
    image: "/products/3.png",
  },
  {
    id: 4,
    name: "The Candy Chandelier",
    price: 750,
    image: "/products/4.png",
  },
  {
    id: 5,
    name: "Studio Vase Set",
    price: 85,
    image: "/products/5.png",
  },
  {
    id: 6,
    name: "The Silky Vase",
    price: 95,
    image: "/products/6.png",
  },
  {
    id: 7,
    name: "The Lucky Lamp",
    price: 99,
    image: "/products/7.png",
  },
  {
    id: 8,
    name: "Studio Vase Set",
    price: 85,
    image: "/products/8.png",
  },
  {
    id: 9,
    name: "The Silky Vase",
    price: 95,
    image: "/products/9.png",
  },
  {
    id: 10,
    name: "The Lucky Lamp",
    price: 299,
    image: "/products/10.png",
  },
  {
    id: 11,
    name: "The Lucky Lamp",
    price: 299,
    image: "/products/11.png",
  },
  {
    id: 12,
    name: "The Lucky Lamp",
    price: 299,
    image: "/products/12.png",
  },
];

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}

const Products = () => {


  return (
  
   

      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <FilterBar/>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsArray.map((product) => (
            <Carts key={product.id} product={product} />
          ))}
        </div>
     
      </div>

  );
};

export default Products;
