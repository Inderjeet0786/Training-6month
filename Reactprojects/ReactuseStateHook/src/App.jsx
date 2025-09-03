import { createContext } from "react";
import Component1 from "./Component1"

export const productdata = createContext()
function App() {

  const products = [
  { id: 101, name: "Laptop", category: "Electronics", price: 55000, inStock: true },
  { id: 102, name: "Headphones", category: "Electronics", price: 2000, inStock: false },
  { id: 103, name: "Shoes", category: "Fashion", price: 3500, inStock: true },
  { id: 104, name: "T-Shirt", category: "Fashion", price: 799, inStock: true },
  { id: 105, name: "Refrigerator", category: "Appliances", price: 30000, inStock: false },
  { id: 106, name: "Washing Machine", category: "Appliances", price: 25000, inStock: true },
  { id: 107, name: "Book", category: "Education", price: 499, inStock: true },
];


  


  return (
    <>
    <productdata.Provider value={products}>

      <Component1/>

    </productdata.Provider>
    </>
  )
}

export default App
