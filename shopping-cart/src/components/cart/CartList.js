import React from "react"
import CartItem from "../cart-item/CartItem"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import { useSelector } from "react-redux"
import "./cart-list.css"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
   },
}))

let CartList = () => {
   const classes = useStyles()
   const cartList = useSelector((state) => state)

   return (
      <>
         {cartList && !!cartList.length && (
            <Paper className="cart-container">
               <List className={classes.root}>
                  {cartList.map((item) => (
                     <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                     />
                  ))}
               </List>
            </Paper>
         )}
      </>
   )
}

export default CartList
