import { createSlice } from "@reduxjs/toolkit"

let initialState = []

let CartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         let item = action.payload
         let index = state.map((elem) => elem.id).indexOf(item.id)

         if (index === -1) {
            item.quantity = 1
            state.push(item)
         } else {
            state[index].quantity += 1
         }
      },
      removeFromCart(state, action) {
         let id = action.payload
         return state.filter((elem) => elem.id !== id)
      },
      setQuantity(state, action) {
         let { id, quantity } = action.payload
         return state.map((elem) =>
            elem.id === id ? { ...elem, quantity } : elem
         )
      },
      clear() {
         return []
      },
   },
})

export const {
   addToCart: addAction,
   removeFromCart: deleteAction,
   setQuantity: setQuantityAction,
   clear: clearAction,
} = CartSlice.actions

export { CartSlice }
