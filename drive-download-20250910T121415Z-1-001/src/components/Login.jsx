import { useState } from "react";
import PageHeader from "../PageHeader";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Login(){
    var[email,setEmail]=useState("")
    var[password,setPassword]=useState("")
    var[image,setImage]=useState("")
    var[imagename,setImagename]=useState("")
    var[load,setLoad]=useState(false)
    var nav = useNavigate()
    function changeemail(e){
        // console.log("change email fun call",e.target.value);
        setEmail(e.target.value)
        
    }
    function  changeImage(e){
        console.log("change file fun call",e);
        setImagename(e.target.value)
        setImage(e.target.files[0])        
    }
    function handleform(e){
        // refresh control
         e.preventDefault()
         setLoad(true)
        //  if(email == ""){
        //     //  alert("email is required!!")
        //     toast.error("email is required!!")
        //     }
        //     if(password == ""){
        //         // alert("password is required!!")
        //         toast.error("password is required!!")
        //     }
        // sessionStorage (short term data store) and localStorage(long time data store ) browser storages
            // methods ->setItem("key",value),getItem("key"),removeItem("key"),clear()
        if(email == "admin@gmail.com" && password=="123"){
                toast.success("Admin login successfully!!")
                // store data
                sessionStorage.setItem("email","admin@gmail.com")
                sessionStorage.setItem("name","admin")
                setTimeout(()=>{
                    setLoad(false)
                    nav("/admin")
                },3000)
        }
            else{
                // console.log("form is submit!!");
                setLoad(false)
                toast.error("invalid user!!")
        }

            
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
    <ToastContainer/>
    <ClipLoader cssOverride={{marginLeft:"47%"}} size={130} color="#77D693" loading={load}/>
    {/* {load==false?"form show hoo":"kush nhi"} */}
    {!load?
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
                        onChange={changeImage}

                        />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </form>

            </div>
      </div>    
    :""}
    </div>
  </section>
  {/* /About Us Section */}
  {/* Counts Section */}

  {/* /Testimonials Section */}
</main>

        </>
    )
}