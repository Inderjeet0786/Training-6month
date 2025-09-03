import React from 'react'

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <nav>

            <div className="container-fluid">
              <div className="row">
                <div className="col-12 " style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'navy', color: 'white', height: '50px', textAlign: 'center', alignItems: 'center' }}>
                  <span><a href="" style={{ textDecoration: 'none', color: 'white' }}>Home</a></span>
                  <span><a href="" style={{ textDecoration: 'none', color: 'whitesmoke' }}>About</a></span>
                  <span><a href="" style={{ textDecoration: 'none', color: 'Window' }}>Courses</a></span>
                  <span><a href="" style={{ textDecoration: 'none', color: 'Window' }}>Contact</a></span>
                  <span><a href="" style={{ textDecoration: 'none', color: 'Window' }}>Services</a></span>
                </div>
              </div>

              <div className="row">

              </div>
            </div>

          </nav>
        </div>

        <div className="col-12" style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1414994965/vector/online-courses-symbols-chart-background.jpg?s=1024x1024&w=is&k=20&c=EEhbDqvupIPFMqD6FIK8jP9P8VQp9BsvBKwUHgjxXa0=')",
          height: '600px', width: '100%'
        }}>
        </div>

        <div className="row" style={{marginTop:'10px',display:'flex',justifyContent:'space-between'}}>
          <div className="col-md-12 d-flex" style={{display:'flex',justifyContent:'space-around'}}>
            <div className="card d-flex"style={{alignItems:'center'}}>
              <img src="https://www.news-reporter.com/wp-content/uploads/2023/04/Future-Of-Web-Development-1-scaled.webp" style={{ width: '200px' }} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">Web Dev</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

             <div className="card d-flex"style={{alignItems:'center'}}>
              <img src="https://th.bing.com/th/id/R.b0873c3818211a89adc71fc499984ad8?rik=q4R1uamSrTPckw&riu=http%3a%2f%2ffreelancetopic.com%2fwp-content%2fuploads%2f2018%2f07%2fDigital-Marketing-Freelance-Topic.jpg&ehk=jqMF0g%2fDxMTaTWxCsJWWvlsXa2XokkNBq7mF%2bb42zfI%3d&risl=&pid=ImgRaw&r=0" style={{ width: '200px' }} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">It's a field in which we can earn money easily by using wordpress and so many new ore technologies.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

             <div className="card d-flex"style={{alignItems:'center',backgroundColor:'#A8A6D1',color:'black'}}>
              <img src="https://cdn.pixabay.com/photo/2023/04/30/10/12/cyber-security-7960243_1280.png" style={{ width: '200px' }} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">Cyber Sequrity</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

             <div className="card d-flex"style={{alignItems:'center',backgroundColor:'navy',color:'white'}}>
              <img src="https://www.news-reporter.com/wp-content/uploads/2023/04/Future-Of-Web-Development-1-scaled.webp" style={{ width: '200px' }} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">Web Dev</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-light">Go somewhere</a>
              </div>
            </div>
           
          </div>
        </div>


      </div>

    </>
  )
}

export default Home
