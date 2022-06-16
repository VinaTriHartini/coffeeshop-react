import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './products.css';
// import Skeleton from "react-loading-skeleton";

const Products = () => {
    const [products, setProducts] = useState([]);
    const getData = () => {
      fetch(`http://127.0.0.1:5000/getmenu/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProducts(res)
      })
    }

    useEffect(() => {
        getData()
        console.log(products)
    }, [])


          return ([
            <div className="container my-5 py-5" key="item0" >
              <div className="row">
                <div className="col-12 mb-5">
                  <div style={{justifyContent:'center'}}>
                  <h1 className="display-6 fw-bolder text-center">Our Menu</h1>
                  <hr />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* {loading ? <Loading /> : <ShowProducts />} */}
              </div>
            </div>,

              <div className="container1" style={{margin:'auto'}} key='item1'>

              <div className="container_">
                {products.map((item, i) => {
                  return <div className="col-md-3 mb-4"  key={item.nama}>
                    
                    <div id='border'>
                  <div  id="card_" >
                    <img src={require(`./menu-${item.id}.png`)} alt={item.nama} width="100px" height="100px" style={{marginLeft:"100px" ,marginTop:"20px"}}/>
                    <div className="card-body">
                      <h3 className="card-title mb-0" style={{fontSize:"22px",textAlign:"center"}}>{item.nama}</h3><br></br>
                      <h5 className="card-title mb-0" style={{fontSize:"16px",textAlign:"center"}}>{item.deskripsi}</h5><br></br>
                      <p className="card-text lead fw-bold"  style={{fontSize:"16px",textAlign:"center"}}>
                        Rp {item.price}
                      </p>
                  </div>
                  </div>
                  </div>
                  <NavLink id="link" to={`/products/${item.id}`} className="btn btn-outline-dark">
                        Buy Now
                      </NavLink>
                </div>
                })}
              
        </div>
        </div>
            ]);
};

export default Products;
