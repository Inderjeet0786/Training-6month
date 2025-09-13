import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminHeader(){
  var nav = useNavigate()
  function logoutfun(){
    Swal.fire({
  title: "Are you sure to logout?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes!!"
}).then((result) => {
  if (result.isConfirmed) {
    sessionStorage.clear()
    // navigate to home page after logout
    nav("/")
    Swal.fire({
      title: "Logout!",
      text: "Logout successfully!!!.",
      icon: "success"
    });

  }
});
  }
    return(
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center">
    <a href="index.html" className="logo d-flex align-items-center me-auto">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">AdminPanel</h1>
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link to="/admin" className="active">
            Dashboard
            <br />
          </Link>
        </li>
        <li>
          <Link to="/admin/addcategory">Category</Link>
        </li>
        <li>
          <a href="courses.html">Courses</a>
        </li>
        <li>
          <a href="trainers.html">Trainers</a>
        </li>
        <li>
          <a href="events.html">Events</a>
        </li>
        <li>
          <a href="pricing.html">Pricing</a>
        </li>
        <li className="dropdown">
          <a href="#">
            <span>Dropdown</span>{" "}
            <i className="bi bi-chevron-down toggle-dropdown" />
          </a>
          <ul>
            <li>
              <a href="#">Dropdown 1</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Deep Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="#">Deep Dropdown 1</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 4</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Dropdown 2</a>
            </li>
            <li>
              <a href="#">Dropdown 3</a>
            </li>
            <li>
              <a href="#">Dropdown 4</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
    <button className="btn-getstarted"  onClick={logoutfun}>
        Logout
    </button>
  </div>
</header>

        </>
    )
}