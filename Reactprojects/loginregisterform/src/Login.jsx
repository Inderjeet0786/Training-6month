import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

function Login() {
    
    const [mail,setmail]= useState('')
    const [password,setPassword] = useState('')
    const nav = useNavigate()
    const formhandle = (e)=>{
        e.preventDefault()
        // console.log("hello");
      
        
        // const email = sessionStorage.getItem('email')
        // const code = sessionStorage.getItem('password')
        // console.log(email);
        // console.log(code);
        
        if(mail == "admin@gmail.com"&&password=='1234'){
            toast.success('login successfull!!');
            setTimeout(()=>{
            nav('/home')
            },5500)
            
            

        }
        else{
            toast.error('invalid email/password')
        }
    }
    return (
        <>
            <div className="container-fluid">
                {/* <ToastContainer/> */}
                <div className="row">
                    <div className="col-md-6 my-4">
                <ToastContainer/>
                        <form action="" className="offset-md-6 shadow p-4"
                        onSubmit={formhandle}>
                            <div className="mb-6 d-flex my-4">
                                <label htmlFor="email" className='form-label'>Email:</label>
                                <input type="email"className='form-control mx-2' placeholder='entername'
                                value={mail}
                                onChange={(e)=>{
                                    setmail(e.target.value)
                                }}  />
                            </div>

                            <div className="mb-6 d-flex my-4">
                                <label htmlFor="password" className='form-label'>Password:</label>
                                <input type="password"className='form-control mx-2' placeholder='enter password'
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }} />
                            </div>

                            <button className='btn btn-success' type='submit'>Login</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
