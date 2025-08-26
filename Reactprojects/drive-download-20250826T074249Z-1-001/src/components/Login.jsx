import { useState } from "react";
import PageHeader from "../PageHeader";

export default function Login(){
    var[email,setEmail]=useState("")
    var[password,setPassword]=useState("")
    var[image,setImage]=useState("")
    function changeemail(e){
        // console.log("change email fun call",e.target.value);
        setEmail(e.target.value)
        
    }
    function handleform(e){
        // refresh control
        e.preventDefault()
        console.log("form is submit!!");

            
    }
    return(
        <>
           <main className="main">
  {/* Page Title */}
        <PageHeader child={"Login Form"}></PageHeader>
  {/* End Page Title */}
  {/* About Us Section */}
  <section id="about-us" className="section about-us">
    <div className="container">
      <div className="row gy-4">
            <div className="offset-md-3 col-md-6 shadow p-4">
               <form onSubmit={handleform}>
                    <div className="mb-3">
                        {/* {email} */}
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={changeemail}

                        />
                   
                    </div>
                    <div className="mb-3">
                        {password}
                        <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                        Image
                        </label>
                        <input
                        type="file"
                        className="form-control"
                        id="exampleInputPassword1"

                        />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </form>

            </div>
      </div>
    </div>
  </section>
  {/* /About Us Section */}
  {/* Counts Section */}

  {/* /Testimonials Section */}
</main>

        </>
    )
}