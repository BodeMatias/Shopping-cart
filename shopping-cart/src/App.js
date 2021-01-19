import "./App.css"
import CartList from "./components/cart/CartList"
import ItemList from "./components/item-list/ItemList"
import Total from "./components/total/Total"

function App() {
   return (
      <div className="App">
         <div className="container">
            <ItemList />
            <div className="cart-column">
               <CartList />
               <Total />
            </div>
         </div>
      </div>
   )
}

export default App
