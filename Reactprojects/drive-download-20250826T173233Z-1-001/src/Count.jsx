import { useState } from "react";
import PageHeader from "./PageHeader";


export default function Count(){
    var[count,setCount]=useState(11)
    var[users,setUsers]=useState([
        {name:"Simran",status:"online"},
        {name:"Anu",status:"online"},
        {name:"Palak",status:"offline"},
        {name:"Kamal",status:"offline"},
        {name:"Raj",status:"online"},
    ])
    function Incfun(){
        console.log("inc fun call");
        setCount(count+1)
    }
    

    return(
        <>
           <main className="main">
  {/* Page Title */}
        <PageHeader child={"Count  Page"}></PageHeader>
  {/* End Page Title */}
  {/* About Us Section */}
  <section id="about-us" className="section about-us">
    <div className="container">
      <div className="row gy-4">
            <div className="offset-md-4 col-md-4">
                <h1>Count is <span style={{color:count<0?"red":"green"}}>{count}</span></h1>
                <button onClick={Incfun}>+++</button>
                <button onClick={()=>{setCount(count-1)}}>---</button>
            </div>
            <table>
                <tr>
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                {
                    users.map((el,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{el.name}</td>
                            <td style={{color:el.status == "online"?"green":"red"}}>{el.status} 
                                  {/* {el.status == "online"?"green":"red"} */}
                                  </td>
                        </tr>
                    ))
                }
            </table>
      </div>
                {/* {1==1?<><h1>hello</h1><p>this is para</p></>:<h1>hi</h1>} */}
    </div>
  </section>
  {/* /About Us Section */}

  {/* /Testimonials Section */}
</main>

        </>
    )
}