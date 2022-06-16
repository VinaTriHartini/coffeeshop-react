// import React, {useState, useEffect} from 'react';

// const Checkout = () => {
//     const [checkout, setCheckout] = useState([]);
//     const fetch = (id) => {
//         fetch(`http://127.0.0.1:5000/order/ ${id}`, {
//             method: 'post',
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-tokens': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlZpbm8iLCJleHAiOjE2NDgxMTIyMDN9.Q2flIIeMUSQXRuZEMnZFhnlO1j5EnvdyMp-UGmRlFLQ"
//             },
//             body: JSON.stringify({  
//                 menu : nama,
//                 jumlah: (jumlah+1), 
//             }),
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         // console.log(jumlah+1);
//         }
// }