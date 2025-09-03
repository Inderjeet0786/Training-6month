import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
export let data1 = createContext()
export let data2 = createContext()
function App() {
  let name = "Simran"
 let items = {
  "items": {
    "item": [
      {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "image":"https://www.lollipopcakesupplies.com.au/assets/img/1/4/t/cceg8/dry0053-3---bakels-yeast-donut-mix---1kg.jpg",
        "batters": {
          "batter": [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
          ]
        },
        "topping": [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
      },
      {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.69,
        "image":"https://www.lollipopcakesupplies.com.au/assets/img/1/4/t/cceg8/dry0053-3---bakels-yeast-donut-mix---1kg.jpg",

        "batters": {
          "batter": [
            { "id": "2001", "type": "Regular" }
          ]
        },
        "topping": [
          { "id": "6001", "type": "Glazed" },
          { "id": "6002", "type": "Sugar" },
          { "id": "6003", "type": "Chocolate" },
          { "id": "6004", "type": "Maple" }
        ]
      },
      {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.75,
        "image":"https://www.lollipopcakesupplies.com.au/assets/img/1/4/t/cceg8/dry0053-3---bakels-yeast-donut-mix---1kg.jpg",

        "batters": {
          "batter": [
            { "id": "3001", "type": "Regular" },
            { "id": "3002", "type": "Chocolate" }
          ]
        },
        "topping": [
          { "id": "7001", "type": "None" },
          { "id": "7002", "type": "Glazed" },
          { "id": "7003", "type": "Chocolate" },
          { "id": "7004", "type": "Maple" },
          { "id": "7005", "type": "Strawberry" }
        ]
      },
      {
        "id": "0004",
        "type": "muffin",
        "name": "Blueberry Muffin",
        "image":"https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Blueberry-Muffin-Recipe-1-1200.jpg",

        "ppu": 1.25,
        "batters": {
          "batter": [
            { "id": "4001", "type": "Blueberry" },
            { "id": "4002", "type": "Regular" }
          ]
        },
        "topping": [
          { "id": "8001", "type": "Sugar Crystals" },
          { "id": "8002", "type": "Powdered Sugar" }
        ]
      },
      {
        "id": "0005",
        "type": "cake",
        "name": "Chocolate Lava Cake",
        "ppu": 2.5,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9OFkAlNo7CZFNBz5_PlwZgSwt8mt6IYSQw&s",

        "batters": {
          "batter": [
            { "id": "5001", "type": "Chocolate" },
            { "id": "5002", "type": "Fudge" }
          ]
        },
        "topping": [
          { "id": "9001", "type": "Hot Fudge" },
          { "id": "9002", "type": "Whipped Cream" },
          { "id": "9003", "type": "Chocolate Chips" }
        ]
      },
      {
        "id": "0006",
        "type": "pastry",
        "name": "Croissant",
        "ppu": 1.75,
        "image":"https://upload.wikimedia.org/wikipedia/commons/2/2a/Croissant-Petr_Kratochvil.jpg",

        "batters": {
          "batter": [
            { "id": "6001", "type": "Butter" }
          ]
        },
        "topping": [
          { "id": "10001", "type": "None" },
          { "id": "10002", "type": "Almond" },
          { "id": "10003", "type": "Chocolate Drizzle" }
        ]
      }
    ]
  }
}
console.log(items?.items.item[0]?.image);

  return (
    <>
    {/* provider */}
    <data1.Provider value={items}>
        {/* <h1>This is app </h1> */}
        <First/>
        {/* <img src={items?.items.item[0]?.image} alt="" /> */}
      </data1.Provider>
    </>
  )
}

export default App
