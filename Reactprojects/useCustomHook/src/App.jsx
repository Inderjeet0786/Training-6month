import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import First from './First'
import { createContext } from 'react'

export let data = createContext();

function App() {

   let items = {
        "items": {
            "item": [
                {
                    "id": "0001",
                    "type": "donut",
                    "name": "Cake",
                    "ppu": 0.55,
                    "image": "https://tse2.mm.bing.net/th/id/OIP.PhOSiFj5bJt_uNbE7uw18QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
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
                    "image": "https://img.freepik.com/premium-photo/exploring-unique-donut-designs-32-aspect-ratio_983420-211664.jpg?w=2000",

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
                    "image": "https://tse2.mm.bing.net/th/id/OIP.wXe1YkSNwr1m7IImloSheAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",

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
                    "image": "https://thebusybaker.ca/wp-content/uploads/2020/07/blueberry-muffins-fb-ig-7-scaled.jpg",

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
                    "image": "https://www.cookingclassy.com/wp-content/uploads/2022/02/molten-lava-cake-17.jpg",

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
                    "image": "https://i.pinimg.com/originals/bf/33/56/bf335661d87d8213f9e43f0e17be99cc.jpg",

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
  return (
    <>
     <data.Provider value={items}>
             <First/>
            </data.Provider>
    </>
  )
}

export default App
