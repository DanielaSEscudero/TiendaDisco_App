import { useParams } from 'react-router-dom'
import './itemDetail.css'
import {useEffect, useState} from 'react'
import { ItemCount } from '../../ItemCount/itemCount'
import {Link} from 'react-router-dom'
import { getFirestore } from '../../firebaseService'

export const ItemDetail = () => {
    
    const [products, setProducts] = useState({})
    const { itemId } = useParams()    
    
    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('vinilos').doc(itemId).get()
        .then(resp => setProducts({id: resp.id, ...resp.data()}))
    }, [itemId])

    const [terminar, setTerminar] = useState(false)
    const onAdd = () => {
        setTerminar(true)
    };
  
    return (
        <>
            <div className=" d-flex justify-content-center align-items-center shadow">
                <div className="card w-100 ">
                    <div className="d-flex justify-content-between align-items-center container w-75 ">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mt-2">
                                    <div className="mt-5">
                                        <h2 className="main-heading mt-0">{products.disc}</h2><br/> 
                                        <h1 className="text-uppercase mb-0">{products.artist}</h1><br/>
                                        <h4 className="text-uppercase">$ {products.price}</h4><br/><br/>
                                        <hr />
                                        <p>Genero: {products.gender} </p>
                                        <p>Año:{ products.year }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className=""> 
                                    <img src={products.img} className="img-fluid mt-3"  alt=""/> 
                                </div>
                                <div className="mb-4">
                                    {terminar ? (
                                        <>
                                        <Link  to={'/cart'} className="btn bg-principal text-white btn-carrito mt-2">
                                            
                                            Terminar Compra
                                        </Link>
                                        <button className="btn bg-principal text-white mt-2 btn-carrito-mas " onClick={() => setTerminar(false)}>Seguir Comprando</button>
                                        </>
                                    ) : (
                                        <ItemCount
                                        product={products}
                                        initial={1}
                                        onAdd={onAdd}
                                        />
                                    )}


                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
