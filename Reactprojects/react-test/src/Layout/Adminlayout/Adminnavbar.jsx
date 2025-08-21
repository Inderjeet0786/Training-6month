export default function Adminnavbar(){
    return(
        <>
          <div className="container-fluid header-top">
            <div className="nav-shaps-2"></div>
            <div className="container d-flex align-items-center">
                <div className="d-flex align-items-center h-100">
                    <Link to="#" className="navbar-brand" style={{height: "125px"}}>
                        <h1 className="text-primary mb-0"><i className="fas fa-hand-rock me-2"></i>Admin Navbar</h1>
                        {/* <img src="img/logo.png" alt="Logo"/>  */}
                    </Link>
                </div>
                <div className="w-100 h-100">
                    <div className="topbar px-0 py-2 d-none d-lg-block" style={{height: "45px"}}>
                        <div className="row gx-0 align-items-center">
                            <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                                <div className="d-flex flex-wrap">
                                    <div className="pe-4">
                                        <Link to="mailto:example@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2"></i>example@gmail.com</Link>
                                    </div>
                                    <div className="pe-0">
                                        <Link to="mailto:example@gmail.com" className="text-muted small"><i className="fa fa-clock text-primary me-2"></i>Mon - Sat: 8.00 am-7.00 pm</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-flex justify-content-end">
                                    <div className="d-flex align-items-center small">
                                        <Link to="#" className="login-btn text-body me-3 pe-3"> <span>Login</span></Link>
                                        <Link to="#" className="text-body me-3"> Register</Link>
                                    </div>
                                    <div className="d-flex pe-3">
                                        <Link className="btn p-0 text-primary me-3" to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn p-0 text-primary me-3" to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn p-0 text-primary me-3" to="#"><i className="fab fa-instagram"></i></Link>
                                        <Link className="btn p-0 text-primary me-0" to="#"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bar px-0 py-lg-0" style={{height: "80px"}}>
                        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                            <Link to="#" className="navbar-brand-2">
                                <h1 className="text-primary mb-0"><i className="fas fa-hand-rock me-2"></i> Fitness</h1>
                              <img src="img/logo.png" alt="Logo"/>
                            </Link> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-0 mx-lg-auto">
                                    <Link to="index.html" className="nav-item nav-link active">Home</Link>
                                    <Link to="about.html" className="nav-item nav-link">About</Link>
                                    <Link to="course.html" className="nav-item nav-link">Courses</Link>
                                    <Link to="blog.html" className="nav-item nav-link">Blogs</Link>
                                    <div className="nav-item dropdown">
                                        <Link to="#" className="nav-link" data-bs-toggle="dropdown">
                                            <span className="dropdown-toggle">Pages</span>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <Link to="feature.html" className="dropdown-item">Our Features</Link>
                                            <Link to="team.html" className="dropdown-item">Our team</Link>
                                            <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                            <Link to="404.html" className="dropdown-item">404 Page</Link>
                                        </div>
                                    </div>
                                    <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                                    <div className="nav-btn ps-3">
                                        <button className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                        <Link to="#" className="btn btn-primary py-2 px-4 ms-0 ms-lg-3"> <span>Get Quote</span></Link>
                                    </div>
                                    <div className="nav-shaps-1"></div>
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