import React, { useState } from 'react'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';

function Payment() {

    const makePayment = async() => {
        const stripe = await loadStripe("pk_test_51OqkPQSJqQm5qUQy5blBCq5rKyWfbXniuqW2ATUMOYyewaBbuV9aNdLLscVqpTGQtDPiPa0UxYhjmKHfRmMGqscS00ZTg5S8Ip")

        const products = [
            {
                id: "react",
                price: "99"
            },
            {
                id: "css",
                price: "69"
            }
        ];

        const response = await axios.post('http://10.0.0.133:3000//api/v1/create-checkout-session', { products })
        console.log(response)
        //const session = await response.json()
        const result = stripe.redirectToCheckout({
            sessionId: response.data.id
        })
        console.log(result)
    }

  return (
    <div>
        <h1>jkfhkw</h1>
        <button onClick={makePayment}>Make payment</button>


    </div>
  )
}

export default Payment