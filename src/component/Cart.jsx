import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './cart.css';

const Cart = () => {
    const [keranjang, setKeranjang] = useState([]);
    const getKeranjang = () => {
    fetch(`http://127.0.0.1:5000/getcart/`, { 
    headers: {
        'x-access-tokens': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlZpbm8iLCJleHAiOjE2NDgxMTIyMDN9.Q2flIIeMUSQXRuZEMnZFhnlO1j5EnvdyMp-UGmRlFLQ"
    }})
    .then((res) => res.json())
    .then((res) => {
       
        console.log(res[0].keranjang)
        localStorage.setItem("keranjang", JSON.stringify(res[0].keranjang))
        setJumlah(JSON.parse(localStorage.getItem("keranjang"))[0].jumlah)
        setKeranjang(res[0].keranjang)
    })
    }

    useEffect(() => {
        getKeranjang()
    }, [])
    
    const [jumlah, setJumlah] = useState(1);
    const Increment = (id, menu) => {
            setJumlah(jumlah+1)
            document.getElementById('qty' +id).textContent = jumlah+1
            keranjang.map((item, i) => {
                    const subtotal = jumlah+1
                    document.getElementById('total').textContent = subtotal*item.harga
                })
            fetch_(menu);
    }
    // useEffect(() => {
       
    //     setJumlah(JSON.parse(localStorage.getItem("keranjang"))[0].jumlah)
    // }, [])
    
    const fetch_ = (menu) => {
            fetch('http://127.0.0.1:5000/cart', {
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'x-access-tokens': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlZpbm8iLCJleHAiOjE2NDgxMTIyMDN9.Q2flIIeMUSQXRuZEMnZFhnlO1j5EnvdyMp-UGmRlFLQ"
            },
            body: JSON.stringify({  
                menu : menu,
                jumlah: jumlah+1, 
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        // console.log(data)
        }
    
        const fetch__ = (menu) => {
            fetch('http://127.0.0.1:5000/cart', {
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'x-access-tokens': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlZpbm8iLCJleHAiOjE2NDgxMTIyMDN9.Q2flIIeMUSQXRuZEMnZFhnlO1j5EnvdyMp-UGmRlFLQ"
            },
            body: JSON.stringify({  
                menu : menu,
                jumlah: jumlah-1, 
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        }

    const Decrement = (id, menu) => {
            if(jumlah===1){
                alert('error')
            } else {
                setJumlah(jumlah-1)
                document.getElementById('qty' +id).textContent = jumlah-1
                // console.log(keranjang[0].subtotal)
                keranjang.map((item, i) => {
                    const subtotal = jumlah-1
                    document.getElementById('total').textContent = subtotal*item.harga
                })
                fetch__(menu);
                }
            }
    console.log(jumlah)

    // const Order = () => {
    //         fetch('http://127.0.0.1:5000/order/', {
    //         method: 'post',
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             'Access-Control-Allow-Origin': '*',
    //             'x-access-tokens': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlZpbm8iLCJleHAiOjE2NDgxMTIyMDN9.Q2flIIeMUSQXRuZEMnZFhnlO1j5EnvdyMp-UGmRlFLQ"
    //         },
    //         body: JSON.stringify({  
    //             menu : menu,
    //             jumlah: jumlah+1, 
    //         }),
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //         }

    const view = ([
                <div className="px-4 my-5 bg-light rounded-3 py-5" key='item0'>
                    <div className="container py-4">
                        <div className="row">
                            <h3>Your Cart is Empty</h3>
                        </div>
                    </div>
                </div>,

                <div key='item1'>
                {keranjang.map((item, i) => {
                    // console.log(i)
                    // return <div>{i}</div>
                    return  <div className="px-4 my-5 bg-light rounded-3 py-5" key='item3'>
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={require('./menu-1.png')} alt='latte' height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{item.menu}</h3>
                                <div className="lead fw-bold" style={{display:'flex'}}>
                                    <p id={'qty' + (i+1)}>{item.jumlah} </p> X Rp {item.harga} = Rp <p id='total'> {item.subtotal}</p>
                                </div>
                                <button id='qty_' className="btn btn-outline-dark me-4" onClick={() => Decrement(i+1, item.menu)} >
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button id={item.menu} className="btn btn-outline-dark" onClick={() => Increment(i+1, item.menu)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
                </div>,

                <div className="container" key='item2'>
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
                ])

                if(keranjang.length === 0){
                    return ([view[0]]);
                } else {
                    return ([view[1], view[2]])
                }
            
            
    // return (
    //     <div>
    //         {state.length === 0 && emptyCart()}
    //         {state.length !== 0 && state.map(cartItems)}
    //         {state.length !== 0 && buttons()}
    //     </div>
    // );
            }
export default Cart;
