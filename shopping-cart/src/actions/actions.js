import {
   SET_QUANTITY,
   ADD_TO_CART,
   REMOVE_FROM_CART,
   CLEAR,
} from "../constants/constants"

let addAction = (item) => {
   return {
      type: ADD_TO_CART,
      item,
   }
}
let deleteAction = (id) => {
   return {
      type: REMOVE_FROM_CART,
      id,
   }
}
let setQuantityAction = (id, quantity) => {
   return {
      type: SET_QUANTITY,
      id,
      quantity,
   }
}
let clearAction = () => {
   return {
      type: CLEAR,
   }
}

export { addAction, deleteAction, setQuantityAction, clearAction }
