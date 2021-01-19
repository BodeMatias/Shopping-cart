import React from "react"
import "./item.css"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton/IconButton"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCartOutlined"

import { useDispatch } from "react-redux"

import { addAction } from "../../actions/actions"

let Item = ({ id, name, price }) => {
   const dispatch = useDispatch()

   let url = require("../../assets/placeholder.png")

   return (
      <Card className="root">
         <CardActionArea>
            <CardMedia className="media" image={url.default} />
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  {name}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions className="flex">
            <IconButton
               color="default"
               aria-label="add to shopping cart"
               onClick={() => dispatch(addAction({ id, name, price }))}
            >
               <AddShoppingCartIcon />
            </IconButton>
            <div className="price">
               <h4 className="price-h">${price}</h4>
            </div>
         </CardActions>
      </Card>
   )
}

export default Item
