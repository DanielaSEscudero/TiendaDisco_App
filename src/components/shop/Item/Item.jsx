import {Link} from 'react-router-dom'
import './item.css'

const Item = ({artist, price, img, id}) => { 
    
    return (
        <div className="col itemListCol mb-2 ">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card p-3 w-100">
                   
                    <div className="d-flex justify-content-evenly align-items-center ">
                        <div className="mt-2">
                            <h4 className="text-uppercase">$ {price}</h4>
                            <div className="mt-5">
                                <h2 className="text-uppercase mb-0">{artist}</h2>
                            </div>
                        </div>
                        <div className="image"> 
                            <img src={img} width="200" alt=""/> 
                            
                        </div>

                    </div>
                    <div className="row">
                        <div className="col ver-mas mt-4">
                            <Link to={`/item/${id}`} className="w-100 btn verMas bg-principal text-white d-block">Ver mas</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Item;