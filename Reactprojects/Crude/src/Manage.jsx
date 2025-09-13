
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { datacontext } from "./App"

function Manage() {

   const {data,setdata}  = useContext(datacontext);
    return (
        <>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((el,index)=>(
                        <tr key={index} >
                           <td>{index+1}</td>
                           <td>{el.name}</td>
                           <td>{el.email}</td>
                           <td><Link className='btn btn-success' to={'/edit/'+el.name+'/' +el.email}>Edit</Link></td>
                           <td><Link className='btn btn-danger' to={'../'}>Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}


export default Manage
