import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const [product, setProduct] = useState([]);
    const getData = () => {
    fetch(`http://127.0.0.1:5000/getmenu/${document.URL.substr(31)}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        setProduct(res)
    })
    }

    
    const addToCart = () => {
        product.map((item, i) => { 
            // console.log(item.nama)
            fetch('http://127.0.0.1:5000/cart', {
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'x-access-tokens': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlZpbm8iLCJleHAiOjE2NDgxMTIyMDN9.Q2flIIeMUSQXRuZEMnZFhnlO1j5EnvdyMp-UGmRlFLQ"
            },
            body: JSON.stringify({  
                menu : item.nama,
                jumlah: 1, 
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        })
    }

    
    useEffect(() => {
        getData()
    }, []);

        return([ <div key="item2"> {product.map((item, i) => { 
            return [<div className="col-md-6" key="item0" style={{marginLeft:'400px', marginTop:'200px'}}>
                    <img src={require(`./menu-${item.id}.png`)} alt={item.nama} height="200px" width="200px"/></div>,

                <div className="col-md-6" key="item1" style={{marginLeft:'700px', marginTop:'-250px'}}>
                    <h1 className="display-5">{item.nama}</h1>
                    <p className="lead fw-bolder">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        Rp {item.price}
                    </h3>
                    <p className="lead">{item.deskripsi}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addToCart()}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            ]})}
            </div> 
            ]);

    // return (
    //     <div>
    //         <div className="container py-5">
    //             <div className="row py-4">
    //                 {/* {loading ? <Loading/> : <ShowProduct/>} */}
    //             </div>
    //         </div>
    //     </div>
    // );

}

export default Product;
