import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCartContext =()=> useContext(CartContext);

const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const isInCart = id => cart.find(prod=> prod.disc === id)

    const addToCart = (product, cantidad) =>{

        const newCart = [...cart]

        const productIsInCart = isInCart(product.disc)

        if(productIsInCart){

            newCart[newCart.findIndex(prod => prod.disc === productIsInCart.disc)].quantity+=cantidad;

            setCart(newCart);
            return
        }
        
        product.quantity = cantidad

        setCart([
            ...newCart,
            product
        ]);
    }
    
    const deleteFromCart = product =>{

        const newCart = [...cart]
    
        const productIsInCart = isInCart(product.disc)
        
        if(!productIsInCart){
            return;
        }

        const deleteProduct = newCart.filter(
            prod=>prod.disc !== productIsInCart.disc)
        
        setCart(deleteProduct)
    
    }

    const deleteCart=()=>setCart([])

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            deleteFromCart,
            deleteCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;