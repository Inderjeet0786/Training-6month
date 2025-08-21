export default function Header() {
    return (
        <>

            
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid" style={{ backgroundColor: 'rgb(38, 136, 182)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around',flexWrap:'wrap' }}>
                    <a className="navbar-brand" href="#">
                        <i className="bi bi-envelope text-white"></i>
                        <span className="text-light" style={{whiteSpace:'normal' ,overflowWrap: "break-word", wordBreak: "break-word" }} >contact@example.com</span>
                    </a>
                    
                    <a className="navbar-brand" href="#">
                        <i className="bi bi-phone text-white"></i>
                        <span className="text-light" style={{whiteSpace:'normal' ,overflowWrap: "break-word", wordBreak: "break-word" }}>+91 9056789447</span>
                    </a>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-facebook text-white"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-twitter-x text-white"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-instagram text-white"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-linkedin text-white"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h1 style={{ marginLeft: '100px', color:'RGB(44, 73, 100)' }}> Medilab</h1>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: '80px' }}>
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Departments
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Doctors
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>





        </>
    )
}