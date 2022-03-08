import {useState} from 'react' 
import './itemCount.css'
import { useCartContext } from "../context/CartContext/CartContext"
import { useAppContext } from '../context/AppContext/AppContext'
import swal from 'sweetalert'


export const ItemCount = ({initial, product, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    
    let stock= 5

    const handleAdd=()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }

    const { addToCart } = useCartContext();
    const { products } = useAppContext();
    
    function handleClick(disc, cantidad) {
        const findProductInDB = products.find(prod => prod.disc === disc);
    
        if (!findProductInDB) {
            swal({
                title: "Hubo un error",
                text: "El producto no pudo ser añadido",
                icon: "error",
                button: "Ok",
            })
             return;
        }
        addToCart(findProductInDB, cantidad);
        onAdd()
    }

      
    return (
        <>
            <div className="d-flex flex-column ">
                
                <div className="btns-count">
                    <button className="btn btn-block" onClick={handleRemove}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <label className="alert alert-white cantidad-items">
                        {cantidad}
                    </label>
                    <button className="btn btn-block" onClick={handleAdd}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                
                <div className="agreg-carrito">

                    <button className="btn bg-principal text-white btn-block btn-carrito "
                    onClick={() => handleClick(product.disc, cantidad)}
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
            
        </>
    )
}