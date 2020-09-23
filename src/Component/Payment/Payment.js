import React from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import FlipMove from "react-flip-move";
import { Link, useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Reducer/Reducer";
import { useEffect } from "react";
import axios from '../../Axios/axios';
import {db} from '../../Firebase/firebase';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded,setSucceeded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  useEffect( () => {
    //generate the special stripe client secret to charge customer
    const getClientSecret = async () => {
        const response = await axios({
            method : 'post',
            //stripe expects the total in currencies sub units
            url : `/payments/create?total=${getBasketTotal(basket) * 100 }`
        });
        setClientSecret(response.data.clientSecret); 
    }
    getClientSecret();
  },[basket])

  console.log('THE SECRET IS >>>>', clientSecret )

  const handleSubmit = async (e) => {
    //stripe
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method : {
            card : elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        //payment Intent = payment confirmation

        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket :basket,
          amount : paymentIntent.amount,
          created : paymentIntent.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type : 'EMPTY_BASKET',
        })

        history.replace('/orders');
    })
  };

  const handleChange = (e) => {
    //listen for changes in the card Element
    //displya nay error as customer enter card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Dummy Address</p>
            <p>India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Order Total : <strong>{value}</strong>
                    </h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>  
              </div>
              {/* Errors*/}
                  {error && <div>{error}</div>} 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
