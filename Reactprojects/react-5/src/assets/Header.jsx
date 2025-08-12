export default function Header() {
    return (
        <>

            <div className="container-fluid" style={{ backgroundColor: 'rgb(38, 136, 182)', overflowWrap: 'break-word' }}>
                <div className="container">
                    <div className="row">
                        <div className=" col col-12 col-md-10  ">
                            <i className="bi bi-envelope text-white"></i>
                            <a
                                className="text-white mx-2"
                                href=""
                                style={{ textDecoration: 'none' }}
                            >
                                contact@example.com
                            </a>

                            <i className="bi bi-phone text-white mx-2"></i>
                            <span className="text-white">+91 9056789447</span>
                        </div>

                        <div className="col col-12 col-md 6  d-flex flex-wrap " style={{ gap: '10px' }}>
                            <i className="bi bi-twitter-x text-white"></i>
                            <i className="bi bi-facebook text-white"></i>
                            <i className="bi bi-instagram text-white"></i>
                            <i className="bi bi-linkedin text-white"></i>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-2 d-flex ">
                            <h1 className="" style={{ color: 'RGB(44,73,100)' }}>Medilab</h1>
                        </div>

                        <div className="col d-flex " style={{ gap: '20px',justifyContent:'center',alignItems:'center' }}>
                            <li className="list-unstyled">
                                <a href="" className="text-decoration-none text-dark" >Home</a>
                            </li>

                            <li className="list-unstyled">
                                 <a href="" className="text-decoration-none text-dark">About</a>
                            </li>

                            <li className="list-unstyled">
                                 <a href="" className="text-decoration-none text-dark">Services</a>
                            </li>

                            <li className="list-unstyled">
                                 <a href="" className="text-decoration-none text-dark">Departments</a>
                            </li>

                            <li className="list-unstyled">
                                 <a href="" className="text-decoration-none text-dark">Doctors</a>
                            </li>

                            <select name="" id="" className="border-0 text-dark">
                                <option value="">Dropdown </option>
                                <option value="">Dropdown 1</option>
                                <option value="">Dropdown 2</option>
                                <option value="">Dropdown 3</option>
                            </select>

                            <li className="list-unstyled">
                                 <a href="" className="text-decoration-none text-dark">Contact</a>
                            </li>
                           
                           <li className="list-unstyled">
                               <button className="btn btn-outline-primary rounded-pill" style={{color:'white',backgroundColor:'RGB(43,73,100)'}}>Make an Appointment</button>
                           </li>

                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}