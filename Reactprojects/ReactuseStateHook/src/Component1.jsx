import React, { useContext } from 'react'
import { productdata } from './App'

function Component1() {
    const products = useContext(productdata)


    const stockproducts = products.filter((product) => {
        if (product.inStock == true) {
            return product;
        }
    })

    const prices = products.filter((product) => {
        if (product.price > 10000) {
            return (product)
        }
    })

    const electronicproducts = stockproducts.filter((product) => {
        if (product.category == "Electronics") {
            return (product)
        }
    })

    const Allprices = products.map((el) => {
        return (el.price)
    })


    console.log(stockproducts);
    console.log(prices);


    const expensive = Math.max(...Allprices)
    console.log(expensive);

    const itemname = products.find(el => el.price == expensive)
    console.log(itemname);


    return (
        <>
            <h1>All Products are in Stock:</h1>
            <ul>
                {
                    stockproducts.map((el, index) => {
                        return (
                            <li style={{ color: index % 2 == 0 ? 'black' : 'blue' }}>{el.name}</li>
                        )

                    })
                }
            </ul>

            <h1>All products price greater than 10,000</h1>
            <ul>
                {
                    prices.map((el, index) => {
                        return (
                            <li style={{ color: index % 2 == 0 ? 'black' : 'blue' }}>{el.name}</li>
                        )

                    })
                }
            </ul>

            <h1>Names of All Products:</h1>
            <ul>
                {
                    products.map((el, index) => {
                        return (
                            <li style={{ color: index % 2 == 0 ? 'black' : 'blue' }}>{el.name}</li>
                        )

                    })
                }
            </ul>

            <h1>List Of Product And Prices :</h1>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>

                        <th>
                            Price
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((el, index) => {
                            return (
                                <tr>
                                    <td key={index}>{el.name}</td>
                                    <td>{el.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <h1>Electronic Products Are In category:</h1>
            <ul>
                {
                    electronicproducts.map((el, index) => {
                        return (
                            <li style={{ color: index % 2 == 0 ? 'black' : 'blue' }}>{el.name}</li>
                        )

                    })
                }
            </ul>

            <h1>Most Expensive product :</h1>

            <h3 style={{backgroundColor:'navy', color:'white'}}>Price  of product :{itemname?.price} </h3>
            <h3 style={{backgroundColor:'navy', color:'white'}}>Name of Product :{itemname?.name}</h3>


      </>
    )
}

export default Component1
