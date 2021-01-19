import React from "react"
import Item from "../item/Item"
import "./item-list.css"

let items = [
   {
      id: 1,
      name: "item1",
      price: 400,
   },
   {
      id: 2,
      name: "item2",
      price: 400,
   },
   {
      id: 3,
      name: "item3",
      price: 400,
   },
   {
      id: 4,
      name: "item4",
      price: 400,
   },
   {
      id: 5,
      name: "item5",
      price: 400,
   },
   {
      id: 6,
      name: "item6",
      price: 400,
   },
   {
      id: 7,
      name: "item7",
      price: 400,
   },
   {
      id: 8,
      name: "item8",
      price: 400,
   },
]

let Items = () => {
   return (
      <div className="item-list">
         {items.map((item) => (
            <Item
               key={item.id}
               id={item.id}
               name={item.name}
               price={item.price}
            ></Item>
         ))}
      </div>
   )
}

export default Items
