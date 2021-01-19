import {
   SET_QUANTITY,
   ADD_TO_CART,
   REMOVE_FROM_CART,
   CLEAR,
} from "../constants/constants"

let initialState = []

const CartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         let exists = state.map((elem) => elem.id).indexOf(action.item.id)

         if (exists === -1) {
            action.item.quantity = 1
            return [...state, action.item]
         } else {
            let stateCopy = [...state]
            stateCopy[exists].quantity += 1
            return [...stateCopy]
         }

      case REMOVE_FROM_CART:
         return state.filter((elem) => elem.id !== action.id)

      case SET_QUANTITY:
         return state.map((elem) =>
            elem.id === action.id
               ? {
                    id: elem.id,
                    name: elem.name,
                    price: elem.price,
                    quantity: action.quantity,
                 }
               : elem
         )

      case CLEAR:
         return []

      default:
         return [...state]
   }
}

export default CartReducer
