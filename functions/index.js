const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_rXqnO8WqXQFAd6h2cPCbQOVm00ZWgBtWur');


//API setup

//-App config
const app = express();


//-Middlewares
app.use(cors({ origin : true }));
app.use(express.json());

//-API routes
app.get('/', (request,response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request,response) => {
    const total = request.query.total;
    console.log('Payment request of this amount ==>>>',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total, //subunits
        currency : "inr",
    });

    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})


//-Listen Command
exports.api = functions.https.onRequest(app);

//example end 
// http://localhost:5001/amazncloneweb/us-central1/api