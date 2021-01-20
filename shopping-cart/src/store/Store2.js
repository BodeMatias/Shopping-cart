import { createStore } from "redux"
import { CartSlice } from "../reducers/CartSlice"

let store = createStore(CartSlice.reducer)

export default store
