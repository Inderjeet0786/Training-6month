import React from 'react'

function Login() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 my-4">
                        <form action="" className="offset-md-6 shadow p-4">
                            <div className="mb-6 d-flex my-4">
                                <label htmlFor="email" className='form-label'>Email:</label>
                                <input type="email"className='form-control mx-2' placeholder='entername' />
                            </div>

                            <div className="mb-6 d-flex my-4">
                                <label htmlFor="password" className='form-label'>Password:</label>
                                <input type="password"className='form-control mx-2' placeholder='enter password' />
                            </div>

                            <button className='btn btn-success'>Login</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
