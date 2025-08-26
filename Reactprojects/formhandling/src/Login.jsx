import { use, useState } from "react";

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [course,setCourse] = useState('')
    const [contact,setContact] = useState('')


    return (
        <>
            <div className="container-fluid border border-dark">
                <div className="row gy-4">
                    <div className="offset-md-3 col-md-6 shadow p-4">
                        <form action="" onSubmit={(e) => {
                            e.preventDefault()
                            setSubmitted(true)
                        }}>
                            <div className="mb-4 d-flex">
                                <label htmlFor="name" className="form-label mx-2">Name:</label>
                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                    required
                                    value={name}
                                    onChange={(e) => {
                                        console.log(e);

                                        setName(e.target.value)
                                    }} />
                            </div>

                            <div className="mb-4 d-flex">
                                <label htmlFor="number" className="form-label mx-2">Contact:</label>
                                <input type="tel" className="form-control mx-2"
                                required
                                value={contact}
                                onChange={(e)=>{
                                    setContact(e.target.value)
                                }} />
                            </div>

                            <div className="mb-4 d-flex">
                                <label htmlFor="email" className="form-label mx-2">EmailAddress:</label>
                                <input type="email" className="form-control"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                            </div>

                            <div className="mb-4 d-flex">
                                <label htmlFor="password" className="form-label mx-2">Password:</label>
                                <input type="password" className="form-control"
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                            </div>

                            <div className="mb-4">
                                <label className="form-check-label" for="radioDefault1">
                                    Choose Gender
                                </label>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2"
                                        required
                                        value={'male'}
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }} />
                                    <label className="form-check-label" for="radioDefault2">
                                        Male
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2"
                                        value={'female'}
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }} />
                                    <label className="form-check-label" for="radioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4 ">
                                <select name="" id="" 
                                
                                 value={course}
                                 onChange={(e)=>{
                                    setCourse(e.target.value)
                                 }}
                                 className="form-select"
                                 >
                                    <option value=""  >Choose Course</option>
                                    <option value="Btech">Btech</option>
                                    <option value="BCA">BCA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="BSC Nursing">BSC Nursing</option>
                                </select>
                            </div>

                            <button className="btn btn-success">Submit</button>

                        </form>
                    </div>

                </div>
                {submitted ?
                    <div className="mb-5 bg-dark text-light border border-dark col-md-6 my-4 text-center mt-3">
                        <h3>Name:{name}</h3>
                        <h3>Contact:{contact}</h3>
                        <h3>Email:{email}</h3>
                        <h3>Password:{password}</h3>
                        <h3>Gender:{gender}</h3>
                        <h3>Course:{course}</h3>
                    </div>
                    : 
                    <h2>Nothing to submit</h2>

                }

            </div >

        </>
    )
}




export default Login;
