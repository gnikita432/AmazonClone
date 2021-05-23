import React from "react";
import "./Subtotal.css";

import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

// npm i react-currency-format
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket==" + basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {`Subtotal 
             (${basket.length}) items:`}
              <strong>{value}</strong>
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
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
