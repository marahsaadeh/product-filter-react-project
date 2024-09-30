import React from "react";
import "./productList.css";

const ProductList = ({ products, handleClick, currentActive }) => {
  return (
    <main className="flex">
      <section className="flex left-section">
        {/*the "active class" is added to button which you click*/}
        {/*when a button is clicked, the active class is set to true for that button, 
          while it is set to false for all other buttons*/}
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : null}
        >
          All Products
        </button>

        <button
          onClick={() => {
            /* |currentActive = Clothing| 'converts its value to Clothing' */
            handleClick("Clothing");
          }}
          className={currentActive === "Clothing" ? "active" : null}
        >
          Clothing
        </button>

        <button
          onClick={() => {
            /* |currentActive = Shoes| 'converts its value to Shoes' */
            handleClick("Shoes");
          }}
          className={currentActive === "Shoes" ? "active" : null}
        >
          Shoes
        </button>

        <button
          onClick={() => {
            /* |currentActive = Accessories| 'converts its value to Accessories' */
            handleClick("Accessories");
          }}
          className={currentActive === "Accessories" ? "active" : null}
        >
          Accessories
        </button>

        <button
          onClick={() => {
            /* |currentActive = Makeup| 'converts its value to Makeup' */
            handleClick("Makeup");
          }}
          className={currentActive === "Makeup" ? "active" : null}
        >
          Makeup
        </button>

        <button
          onClick={() => {
            /* |currentActive = Household Items| 'converts its value to Household Items' */
            handleClick("Household Items");
          }}
          className={currentActive === "Household Items" ? "active" : null}
        >
          Household Items
        </button>

        <button
          onClick={() => {
            /* |currentActive = Kitchenware| 'converts its value to Kitchenware' */
            handleClick("Kitchenware");
          }}
          className={currentActive === "Kitchenware" ? "active" : null}
        >
          Kitchenware
        </button>
      </section>

      <section className="flex right-section">
        {products.map((item) => (
/* Use the article for each product card because it represents an
independent product with multiple details */
          <article key={item.id} className="card">
            <div className="image-container">
            <img /*width={266} height={186}*/ src={item.imgPath} alt={item.name} />
            </div>
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.name}</h1>
              <p className="category">{item.category}</p>
              <p className="sub-title">{item.description}</p>
              <p className="price">{item.price} $</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  ); 
};

export default ProductList;
