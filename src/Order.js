import React from "react";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct.js";
import moment from "moment";

function Order({ order }) {
  return (
    <div className="order">
        <h2>Order : </h2>
      <div className="order__title">
        <p className="order__id">
          <small>{order.id}</small>
        </p>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default Order;
