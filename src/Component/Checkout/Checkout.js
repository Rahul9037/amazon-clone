import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images.freekaamaal.com/post_images/1548671800.png"
          alt="ad"
        />
        <div>
          <h3>Hello {user?.email},</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        <div className="checkout__items">
          <FlipMove
            staggerDelayBy={150}
            appearAnimation="accordionVertical"
            enterAnimation="fade"
            leaveAnimation="fade"
          >
            {basket.map((item) => (
              <CheckoutItem
                key={Math.random()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal basket={basket} />
      </div>
    </div>
  );
}

export default Checkout;
