import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { getBasketTotal } from "../../Reducer/Reducer";
import { useHistory } from 'react-router-dom';

function Subtotal({basket}) {

  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ( {basket?.length} { basket?.length===1 ? 'item' : 'items'} ) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button disabled={basket?.length===0} onClick={e => history.replace('/payment')}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
