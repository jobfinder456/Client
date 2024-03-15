import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function Payment() {
    const [product, setProduct] = useState({
        name: 'JOB',
        price: '9900',
        productBy: 'ABC'
    })

    const makePayment = async(token) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/payment", { token , product})
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>jkfhkw</h1>
        <StripeCheckout stripeKey={"pk_test_51OqkPQSJqQm5qUQy5blBCq5rKyWfbXniuqW2ATUMOYyewaBbuV9aNdLLscVqpTGQtDPiPa0UxYhjmKHfRmMGqscS00ZTg5S8Ip"} 
                        token={makePayment} name='JOB' price={"99"} >
            <button>Buy now</button>
        </StripeCheckout>

    </div>
  )
}

export default Payment