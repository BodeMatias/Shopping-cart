import { createStore } from "redux"
import CartReducer from "../reducers/CartReducer"

let store = createStore(CartReducer)

export default store
