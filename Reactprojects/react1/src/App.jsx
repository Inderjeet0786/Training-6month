
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <div className='topbar'>
          <div>
            <h1>FOX.</h1>
            <h3>University</h3>
          </div>
          <div>
            <h3>Email</h3>

            <span>youremail@gmail.com</span>
          </div>
          <div>
            <h3>Call</h3>
            <span>Call Us:9056789447</span>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Courses
            </li>
            <li>
              Staff
            </li>
            <li>
              Blog
            </li>
            <li>
              Contact
            </li>
          </ul>
          <div className="searchbar">
            <input type="text" placeholder='..Search' />
            <i class="fa fa-search" style={{ color: "black" }}></i>
          </div>
        </div>
        <div className="banner"></div>
        <div className="boxes">
          <div className="box1">
            <span>Certified Teachers
              <br />
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

          </span>
          </div>
          <div className="box2">
            <span>Special Education
              <br />
             Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

          </span>
          </div>
          <div className="box3">
            <span>Special Education
              <br />
             Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

          </span>
          </div>

          <div className="box4">
            <span>Special Education
              <br />
             Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

          </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
