import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Orders.css";
import Order from "./Order"

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      // .collection permet d'acceder à la collection 
      // .doc permet permet de choisir le bon user
      // .orderBy permet de trier par "created" --> création & par "dec" descendant (récence)
if(user) {
    db
    .collection("users")
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    ))
} else {
    setOrders([])
}

  }, [user]);
  return (
    <div className="orders">
      <h1>Your orders ({orders?.length})</h1>
      <div className="orders__order">
        {orders?.map(order => (
            <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
