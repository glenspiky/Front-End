import React, { useEffect, useState } from "react";
import "./Products.css";

export const Products = () => {


  useEffect(() => {
    const fetchProducts = async () => {
      const respose = await fetch("https://dummyjson.com/products");
      const data = await respose.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  console.log(products);
  function generateStars(rating) {
   const stars=[]
   for (let i = 0; i <=5; i++) {
    if (i<=rating) {
        stars.push(<i key={i} className="ri-star-fill"></i>);
    } else {
        stars.push(<i key={i} className="ri-star-line"></i>);
    }
    
   }
   
   return stars
  }
//? cart logic

    const [products, setProducts] = useState([]);
    const [cartIds, setCartIds] = useState(() => {
      //? from local storage
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    });
    //? add to cart
    const addToCart=((productId)=>{
        setCartIds(prev=>{
            const newCart=[...prev,productId]// add id
            localStorage.setItem("cart",JSON.stringify(newCart))//save to local storage
        })

        //? remove 4rom cart
    })
  return (
    <section className="products-section">
      <div className="products-container" id="productContainer">
        {products.map((item) => {
          const { id, images, title, price, rating, discountPercentage } = item;
          const stars=generateStars(rating)
          return (
            <div className="product-item" id={id} key={id}>
              <div className="pro-img">
                <img src={images[0]} />
              </div>
              <div className="pro-desc">
                <h3>${title}</h3>
                <h2>
                  KES ${price}
                  <span>
                    KES $
                    {(price - (price * discountPercentage) / 100).toFixed(2)}
                  </span>
                </h2>
                <span>
                  Save KES ${((price * discountPercentage) / 100).toFixed(2)}
                </span>
                <div className="rating">
                  {stars}
                  <span className="rating-num">${rating.toFixed(1)}</span>
                </div>
                <div className="add-cart">
                  <i className="ri-shopping-basket-fill"></i>
                  <p>Add to cart</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
