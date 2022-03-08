import {Link} from 'react-router-dom'
import { CartWidget } from '../cartWidget/CartWidget'
import { useCartContext } from '../context/CartContext/CartContext'
import './navBar.css'


export const NavBar = () => {

    const {cart} = useCartContext()

    return (
        <>
        <nav className="navbar navbar-expand-xl sticky-top ">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/"><img className="logo-nav" src="https://firebasestorage.googleapis.com/v0/b/tienda-app-827a6.appspot.com/o/logo.png?alt=media&token=d5bb0ec7-6986-4245-bf26-46f6e4daf01e" width="80px 80px" alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>  
                
                { cart.length === 0 ? 
                    <></>
                    : 
                    <CartWidget />
                }
                
                <div className="collapse navbar-collapse show m-auto flex-navbar" id="navbarBasic">
                    <div className="">
                        <ul className="flex-navbar navbar-nav me-auto mb-2 mb-xl-0">

                            <Link to="/" className="nav-link nav-link-p" >Home</Link>

                            <Link to="/category/home" className="nav-link nav-link-p" >Clásicos</Link>
                        
                            <Link to="/category/mas" className="nav-link nav-link-p">Mas Escuchados</Link>
                             
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </nav>

        </>
    )
}