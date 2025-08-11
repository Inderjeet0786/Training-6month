export default function Header() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'rgb(38, 136, 182)' }}>
                <div className="container ">
                    <div className="row">
                        <div className="col col-sm-6" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <i className="bi bi-envelope text-white"></i>
                            <a className="text-light" href="" style={{textDecoration:'none'}}>contact@example.com</a>

                            <i className="bi bi-phone text-white"></i>

                            <span className="text-white">+91 9056789447</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container" style={{ marginTop: '30px', fontFamily: 'Poppins,sans-serif', }}>
                    <div className="row" style={{ display: 'flex' }}>
                        <div className="col col-4"> <h1>Medilab</h1></div>

                        <div className="col col-8 ">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">

                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarScroll">
                                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">About</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Services</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Departmenst</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Doctors</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown1</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                                    <li><a className="dropdown-item" href="#">Dropdown3</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Contacts</a>
                                            </li>

                                        </ul>

                                        <a className="btn btn-outline-light rounded-pill bg-primary" type="submit">Make An Appointment</a>

                                    </div>
                                </div>
                            </nav>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}