import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider/StateProvider";


function Product({ id,title, image, price, rating }) {

    const [{},dispatch] = useStateValue();
    const addToBasket = () => {
        ///dispatch action to add to data layer
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id,
                title, 
                image, 
                price, 
                rating
            }
        })
    }


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
              Array(rating).fill().map( (_,i) => ( <span key={Math.random()} role="img" aria-label="star">🌟</span> ))
          }
        </div>
      </div>
      <img src={image} alt="wingsoffire" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
