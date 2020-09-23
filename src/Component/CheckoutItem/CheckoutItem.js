import React from "react";
import "./CheckoutItem.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import { forwardRef } from "react";

const CheckoutItem = forwardRef(({ id, image, title, price, rating,hideButton },ref) => {
  
  const [{},dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
        type : 'REMOVE_FROM_BASKET',
        id : id
    })
  };

  return (
    <div className="checkoutitem" ref={ref}>
      <img className="checkoutitem__image" src={image} alt="item" />
      <div className="checkoutitem__info">
        <p className="checkoutitem__title">{title}</p>
        <p className="checkoutitem__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutitem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={Math.random()} role="img" aria-label="star">🌟</span>
            ))}
        </div>
        {!hideButton && 
        (<button onClick={removeFromBasket}>Remove from Basket</button> )}
      </div>
    </div>
  );
})

export default CheckoutItem;
