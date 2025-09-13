import { useEffect, useState } from "react";
import PageHeader from "../../PageHeader";
import { Link } from "react-router-dom";

export default function ManageCategory(){
    let[data,setData]=useState([
        {name:"Simran",email:"simran@gmail.com"},
        {name:"Simr",email:"simr@gmail.com"},
        {name:"kamal",email:"kamal@gmail.com"},
    ])
    useEffect(()=>{
        console.log("useEffect Hook called"); 
    },[])
    return(
        <>
           <main className="main">
  {/* Page Title */}
            <PageHeader child={"Manage Category"}/>
  {/* End Page Title */}
  {/* About Us Section */}
  <section id="about-us" className="section about-us">
    <div className="container">
      <div className="row gy-4">
     <div className="offset-md-2 col-md-8">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {
                    data.map((el,i)=>(
                            <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td><Link className="btn btn-success" to={"/admin/updatecategory/"+el.name}>Edit</Link></td>
                            </tr>
                    ))
                }
                </thead>
        </table>
     </div>
      </div>
    </div>
  </section>
  {/* /About Us Section */}
</main>

        </>
    )
}
