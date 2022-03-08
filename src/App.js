import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/shop/ItemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/NavBar';
import { ItemDetailContainer } from './components/shop/ItemDetailContainer/ItemDetailContainer';
import {Cart}  from './components/shop/Cart/Cart';
import CartContextProvider from './components/context/CartContext/CartContext';
import AppContextProvider from './components/context/AppContext/AppContext';

function App() {

  return (
      <AppContextProvider>
        <CartContextProvider>
          <Router>
          <NavBar/>
            <Routes>
                <>
                  <Route exact path="/" element={<ItemListContainer greetings="Tienda Disco"/>} />
                      
                  <Route exact path="/category/:categoryId" element={<ItemListContainer greetings="Tienda Disco"/>} />
                    
                  <Route exact path="/cart" element={<Cart/>} />

                  <Route exact path="/item/:itemId" element={<ItemDetailContainer/>} />
                        
                </>
            </Routes>
          </Router>
        </CartContextProvider>

      </AppContextProvider>
  )
}

export default App;