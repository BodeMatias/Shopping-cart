import React from "react"
import Paper from "@material-ui/core/Paper"
import "./total.css"
import Typography from "@material-ui/core/Typography"
import { useSelector, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import { clearAction } from "../../actions/actions"

let Total = () => {
   const dispatch = useDispatch()
   const cart = useSelector((state) => state)
   let totalPrice = cart.reduce((acum, elem) => {
      acum += elem.quantity * elem.price
      return acum
   }, 0)

   return (
      <Paper className="total">
         <div className="total-value">
            <Typography variant="h5">Total:</Typography>
            <Typography variant="h5">${totalPrice}</Typography>
         </div>
         <Button color="secondary" onClick={() => dispatch(clearAction())}>
            CLEAR CART
         </Button>
      </Paper>
   )
}

export default Total
