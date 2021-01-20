import { createStore } from "redux"
import { reducer } from "../reducers/CartSlice"

let store = createStore(reducer)

export default store
