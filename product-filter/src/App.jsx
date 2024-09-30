import React, { useState } from "react";
import ProductList from "./comp/main/ProductList";
import Footer from "./comp/layout/Footer";
import Header from "./comp/layout/Header";
const products = [
  {
    id: 1,
    name: "Serum",
    category: "Makeup",
    price: 60,
    description:
      "Contains Vitamin C, Vitamin B12 and Vitamin E. These vitamins help make your skin soft, shiny and radiant. The most important addition to your daily routine to make your skin radiant",
    imgPath: "./img/Serum.jpg",
  },
  {
    id: 2,
    name: "Sheglam",
    category: "Makeup",
    price: 25,
    description:
      "This foundation provides a smooth, flawless finish for all skin types. It offers medium to full coverage while feeling lightweight on the skin. Enriched with vitamins",
    imgPath: "./img/Sheglam.jpg",
  },
  {
    id: 3,
    name: "Mask",
    category: "Makeup",
    price: 40,
    description:
      "This creamy mask deeply hydrates and rejuvenates the skin. Infused with natural ingredients, it helps to nourish and repair, leaving your skin feeling soft and refreshed. Perfect for all skin types",
    imgPath: "./img/Mask.jpg",
  },
  {
    id: 4,
    name: "Nike Shoes",
    category: "Shoes",
    price: 200,
    description:
      "It is distinguished by its luxurious and elegant design. It is made of high-quality materials that provide excellent support for your foot during any activity. It is ideal for training and casual outings",
    imgPath: "./img/ShoesPro.jpg",
  },
  {
    id: 5,
    name: "sunglasses",
    category: "Accessories",
    price: 10,
    description:
      "These stylish sunglasses offer UV protection and a trendy design. Enhance your look while keeping your eyes safe from the sun",
    imgPath: "./img/final.jpg",
  },
  {
    id: 6,
    name: "Men's watch",
    category: "Accessories",
    price: 100,
    description:
      "This watch features a classic design It offers precise timekeeping and a comfortable fit, making it perfect for both casual and formal occasions",
    imgPath: "./img/3.jpg",
  },
  {
    id: 7,
    name: "Russian Gold Bracelet",
    category: "Accessories",
    price: 120,
    description:
      "this stunning Russian gold bracelet is crafted with exquisite detail and elegance. Its unique design adds a touch of sophistication to any outfit",
    imgPath: "./img/Russian Gold BraceletPro.jpg",
  },
  {
    id: 8,
    name: "Costume for kids",
    category: "Clothing",
    price: 65,
    description:
      "An elegant costume designed for special occasions and events. Crafted from high-quality materials, it features intricate details and a comfortable fit",
    imgPath: "./img/Costume for kidsPro.jpg",
  },
  {
    id: 9,
    name: "Cotton Shirt",
    category: "Clothing",
    price: 40,
    description:
      "A soft and comfortable women's cotton shirt, perfect for casual outings. Its breathable fabric ensures you stay cool and stylish all day long.",
    imgPath: "./img/cotton shirt.jpg",
  },
  {
    id: 10,
    name: "Leather Jacket",
    category: "Clothing",
    price: 150,
    description:
      "A stylish leather jacket that adds a touch of elegance to any outfit. Its durable material provides warmth and protection, making it a timeless wardrobe staple.",
    imgPath: "./img/Leather jacket.jpg",
  },
  {
    id: 11,
    name: "Formal T-Shirt",
    category: "Clothing",
    price: 30,
    description:
      "A men's formal T-shirt that combines comfort with sophistication. Perfect for casual business meetings or smart-casual events.",
    imgPath: "./img/Tshirt.jpg",
  },
  {
    id: 12,
    name: "Women’s Coat",
    category: "Clothing",
    price: 250,
    description:
      "A luxurious and warm women's coat, perfect for chilly weather. Its elegant design and high-quality materials provide both comfort and style",
    imgPath: "./img/Women coat.jpg",
  },
  {
    id: 13,
    name: "Kitchen Knife",
    category: "Kitchenware",
    price: 50,
    description:
      "A high-quality kitchen knife, perfect for all your cooking needs. Its sharp blade and ergonomic handle ensure ease of use and precision",
    imgPath: "./img/knife.jpg",
  },
  {
    id: 14,
    name: "Mirror",
    category: "Household Items",
    price: 100,
    description:
      "A stylish wall mirror that enhances any room. Its sleek design and clear reflection make it a perfect addition to your home decor",
    imgPath: "./img/mirror.jpg",
  },
];

function App() {
  /* |initial value = all|, which means the "All Products" button will have the active class by default.*/
  const [currentActive, setcurrentActive] = useState("all");

  // arr = Filtered product array will be placed in it, Where its value will change dynamically using 'setArr'
  // |Initially 'arr'|=full list products
  const [arr, setArr] = useState(products);

  const handleClick = (buttonCategory) => {
    /*  Set 'currentActive' to the selected button category
    which effectively removes the active state from the previous button
    Then allows the selected 'category button' to become active */
    setcurrentActive(buttonCategory);
    const newArrFiltered =
      buttonCategory === "all"
        ? products
        : products.filter((item) => item.category === buttonCategory);
    /* setArr(The new array after it has been filtered)*/
    setArr(newArrFiltered);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <h1 style={{ color: "#95E6CB", textAlign: "center" }}>Product List</h1>

      <h1 style={{ color: "#95E6CB", textAlign: "center" }}>_____</h1>
      <br />
      <div
        style={{ color: "rgb(161 161 170)", textAlign: "center" }}
        class="section-title"
      >
        <p>
          Discover our carefully selected products. We offer a wide range of
          unique products chosen to suit all tastes and occasions.
        </p>
      </div>
      <br />

      {/* Passing arr as prop */}
      <ProductList
        products={arr}
        handleClick={handleClick}
        currentActive={currentActive}
      />
      <Footer />
    </>
  );
}

export default App;
