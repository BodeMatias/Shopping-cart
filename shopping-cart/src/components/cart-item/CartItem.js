import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import "./cart-item.css"
import { useSelector, useDispatch } from "react-redux"

import { deleteAction, setQuantityAction } from "../../reducers/CartSlice"

let CartItem = ({ id, name, price }) => {
   const dispatch = useDispatch()
   let item = useSelector((state) => state.find((elem) => elem.id === id))
   let quantity = item.quantity

   let setQuantityHandler = (e) => {
      let value = e.target.value
      if (value > 0)
         dispatch(setQuantityAction({ id, quantity: parseInt(value) }))
   }

   return (
      <ListItem className="cart-item">
         <ListItemText
            className="item-info"
            primary={name}
            secondary={`$ ${price}`}
         />
         <TextField
            id="number"
            label="Quantity"
            value={quantity}
            type="number"
            onChange={(e) => setQuantityHandler(e)}
         />
         <IconButton
            style={{ paddingLeft: "1.5em" }}
            color="secondary"
            aria-label="delete"
            onClick={() => dispatch(deleteAction(id))}
         >
            <DeleteIcon />
         </IconButton>
      </ListItem>
   )
}

export default CartItem
