import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleform = (e) => {
        e.preventDefault()
        console.log('Form is Submitted successfully');
        sessionStorage.setItem('name',name)
        sessionStorage.setItem('password',password)
        sessionStorage.setItem('email',email)
    }

    return (
        <>
            <div className="containe-fluid " style={{ overflow: 'hidden' }}>
                <div className="row my-4">
                    <div className="col-md-6 ">
                        <form action="" className='offset-md-6 shadow p-4'
                            onSubmit={handleform}
                        >
                            <div className="mb-6 d-flex my-3 ">
                                <label htmlFor="name" className='form-label'>EnterName:</label>
                                <input type="text" className='form-control mx-2'
                                    placeholder='EnterFullName'
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)

                                    }} />
                            </div>
                            <div className="mb-6 d-flex my-3">
                                <label htmlFor="email" className='form-label'>EnterEmail:</label>
                                <input type="email" className='form-control mx-2' placeholder='example@gmail.com'
                                    value={email}
                                    onChange={(e)=>[
                                        setEmail(e.target.value)
                                    ]} />
                            </div>

                            <div className="mb-6 d-flex my-3">
                                <label htmlFor="password" className='form-label'>EnterPassword:</label>
                                <input type="password" className='form-control mx-2' placeholder='password'
                                    value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }} />
                            </div>

                            <button type='submit' className='btn btn-success'>Register</button>
                            
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register
