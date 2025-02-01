import React from 'react'
import axios from 'axios'

function Payment() {


    let data = {
        name : "Pratik Bharambe",
        amount : 1,
        number : "0123456789",
        MID : "MID" + Date.now(),
        transactionId : "TID" + Date.now(),
    }

  const handleClick = async () => {

    try {
        await axios.post('http://localhost:8000/payment', data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }

  }

  return (
    <>
    <button onClick={handleClick}>Pay Now</button>
    </>
  )
}

export default Payment