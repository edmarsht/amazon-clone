import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB425392668_.jpg"
        alt=""
        className="checkout__ad"
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty !</h2>
          <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item you want. </p>
        </div>
      ) : (
        <div>
          <h3 className="checkout__email">{user? "Hey there, " + user.email : "Hey there"}</h3>
          <h2 className="checkout__title">Here your shopping basket !</h2>
          {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
          ))}
        </div>
      )}
      </div>

      {basket.length > 0 && (
          <div className="checkout__right">
              <Subtotal />
          </div>
      )}
    </div>
  );
}

export default Checkout;
