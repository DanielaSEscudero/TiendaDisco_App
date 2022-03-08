import {useState, useEffect} from 'react'
import  Item  from '../Item/Item'
import { useParams } from 'react-router-dom'
import {getFirestore} from '../../firebaseService'


export const ItemList = () => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId === undefined) {
            const dbQuery = getFirestore()
                dbQuery.collection('vinilos').get()
                    .then(resp => setProducts(resp.docs.map(it=> ({...it.data(), id: it.id}) )))
        }else{
            const dbQuery = getFirestore()
                dbQuery.collection('vinilos').where('category', '==', categoryId).get()
                    .then(resp => setProducts(resp.docs.map(it=> ({...it.data(), id: it.id}) )))
        } 

    },[categoryId])


    return (
        <div className="row ">
            {products.map(prod =>(
                <Item id={prod.id} artist={prod.artist} price={prod.price} disc={prod.disc} img={prod.img} key={prod.id} />
            ))}  
        </div>
    )
}