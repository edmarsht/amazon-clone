import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret wich allows me to charge a customer
    // When the basket change the stripe secret change because we need to tell to stripe that it's not the same amount

    const getClientSecret = async () => {
      // axios is a request (like GET, POST...)
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits --> we need to X100 because it's cent
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  // When the basket change, useEffect function is activated

  console.log("The secret is >>>>>>", clientSecret);
  console.log('@@@@@@@@@@@@@@@', user)

  const handleSubmit = async (event) => {
    // Do all the stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }, // And then it's finished go below
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        //push the order in firebase 
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount, 
          created: paymentIntent.created
        })

        // if it s good...
        setSucceeded(true);
        setError(null);
        setProcessing(false);


        // voir reducer.js mais en gros quand le payement est validé ça dispatch vers le reducer et plus précisement au case "EMPTY_BASKET" qui garde l'état actuel mais met le panier empty
        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    // Voit à chaque changement ce qu'il se passe et dit si il y a une erreur de cart epar exemple
    setDisabled(event.empty);
    // Désactiver si l'event est empty et donc ne rien faire si c'est vide

    setError(event.error ? event.error.message : "");
    // Si il y a une erreur ? Montrer l'erreur sinon ne rien faire
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p><strong>{user?.email}</strong></p>
            <p>148 Avenue Jean Jaurès</p>
            <p>Pessac, 33600</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
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
                    <>
                      <h4>
                        Order Total: <strong>{` ${value}`}</strong>
                      </h4>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
