import React from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext';
import './cartItem.css'

export default function CartItem({product}) {
    const { deleteFromCart } = useCartContext();

    return (
      <>
        <div className="card w-95"> 
          <div className="row">
              <div className="col-md-3 image-cont">
                <div className="image"> 
                  <img src={product.img} className="w-30 img-fluid"  alt=""/> 
                </div>
              </div>
              <div className="col-md-9">
                <div className="mt-2 container">
                  <div className="mt-5 p-4">
                      <h4 className="main-heading mt-0">{`${product.disc} |`} <span>{`${product.quantity} unidades`}</span></h4>
                      <h2 className="text-uppercase mb-0">{product.artist}</h2>
                      <p>{`$${product.price} c/u`}</p>
                      <p className="">subtotal:{`$${product.price * product.quantity}`}</p>
                      <hr />
                      <button className="btn btn-danger" onClick={() => deleteFromCart(product)}
                        >Eliminar del Carrito</button>
                  </div>
                </div>
              </div>
          </div> 
        </div>  
      </>        
                
              
    );
}