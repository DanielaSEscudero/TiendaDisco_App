import CartItem from './CartItem/CartItem'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {getFirestore} from '../../firebaseService'
import firebase from 'firebase/compat/app';
import { useCartContext } from "../../context/CartContext/CartContext"
import { CartResume } from './CartResume/CartResume'
import swal from 'sweetalert'

const initialBuyer = {
    name: '',
    phone: '',
    email: ''
}
export const Cart = () => {
    
    const [buyer, setBuyer] = useState(initialBuyer)
    const {cart, deleteCart} = useCartContext()
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].price * cart[i].quantity;
        
        total += price
    }
    const order = {buyer, item: cart, date: firebase.firestore.Timestamp.fromDate(new Date()),total}
    
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (buyer.name !== '' && buyer.phone !== '' && buyer.email !== '') {
            const db = getFirestore()
            db.collection('vinilos').add(order)
            .then(resp => swal({
                    title: "Tu orden fue enviada con éxito!",
                    text: `Nos comunicaremos con a la brevedad`,
                    icon: "success",
                    button: "Ok",
                }))
            .then(resp => deleteCart())
            .catch(err => swal("Un error ha ocurrido", "Inténtalo nuevamente", "error"))
        } else{
            swal({
                title: "Hubo un error con tus datos",
                text: "Revisa tus datos y vuelvelo a enviar",
                icon: "error",
                button: "Ok",
            })
        }
    }
    const handlerChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    return (
       
        <div className="container">
            <h1 className="p-3 mt-2 text-center">Bienvenido al Carrito!</h1>
            <hr />
            
            <div className="row">
                <div className="col-md-8 ">
                    {cart.length !== 0 &&(
                    <>
                        {cart.map(product =>(
                            <CartItem key={product.disc} product={product}/>
                        ))}
                        <div className="d-grid gap-2">
                            <button className="btn btn-success">
                                <Link to='/' className="btn bg-principal text-white ">Seguir Comprando </Link>
                            </button>
                            <button className="btn btn-danger text-white" onClick={deleteCart}><Link to='/'className="btn btn-danger text-white">Vaciar Carrito y volver a la tienda </Link></button>
                        </div>
                    </>
                    )}
                </div>
                <div className="col-md-4">
                        {cart.length !== 0 &&(
                        <>
                            <div className="card container">
                                <h2 className="mt-3 ">Resumen Carrito</h2>
                            
                                {cart.map(prod => <CartResume key={prod.disc} prod={prod}/>)}
                                
                                <table class="table">
                                    <tbody>
                                        <tr>
                                        <th>Total a pagar:</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <th className="text-end fs-3"> $ {total}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <p>Completa con tus datos para finalizar la compra</p>
                                <form 
                                    onSubmit={handlerSubmit} 
                                    onChange={handlerChange} 
                                    className="d-flex flex-column align-center container mt-2 mb-3">

                                    <input
                                        className="form-control mb-2" 
                                        type="text"
                                        placeholder="Nombre" 
                                        name="name"
                                        value={order.name} />
                                    <input
                                        className="form-control mb-2" 
                                        type="phone"
                                        placeholder="Telefono" 
                                        name="phone"
                                        value={order.phone}  />
                                    <input
                                        className="form-control mb-2" 
                                        type="email"
                                        placeholder="Email" 
                                        name="email"
                                        value={order.email}  />
                                        
                                    <button className="btn btn-success d-block mt-2">Enviar orden</button>
                                </form>

                            </div>
                        </>
                        )}
                </div>
            </div>
            

        </div>
    )
}