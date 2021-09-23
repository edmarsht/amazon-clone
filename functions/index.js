// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51ILy9yJc5sg2v9GiFdodm8d4PPqdKFcjvDl7vzKqZsf4bHwgNDZldOrl9OAcjDJESioUBvs0U0Nr9qVQcbrDMuoX00MCZJcZBl"
// );


// // API 

// //App config 
// const app = express();



// //Middlewares 
// app.use(cors({ origin: true }));
// app.use(express.json());



// // API routes 
// app.get('/', (request, response) => response.status(200).send('Hello world'))
// // Exemple endpoint
// // http://localhost:5001/clone-e655c/us-central1/api

// app.get('/edouard', (request, response) => response.status(200).send('What s up Edouard'))
// // Exemple endpoint
// // http://localhost:5001/clone-e655c/us-central1/api/edouard

// app.post("/payments/create", async (request, response) => {
//     const total = request.query.total;

//     console.log('Payment Request received BOOOOOM !!', total)

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, // subunits of the currency 
//         currency: "usd",
//     });

//     // Ok - Created 
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });



// // Listen command 
// exports.api = functions.https.onRequest(app)







const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51ILy9yJc5sg2v9GiFdodm8d4PPqdKFcjvDl7vzKqZsf4bHwgNDZldOrl9OAcjDJESioUBvs0U0Nr9qVQcbrDMuoX00MCZJcZBl"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api