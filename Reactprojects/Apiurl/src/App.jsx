import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    console.log(data);

    axios.post("https://kizaapi.ksesystem.com/api/category/all")
      .then((res) => {

        console.log('Response:', res.data.data);
        setData(res.data.data)

      })
      .catch((err) => {

        console.log(err.message);


      })
  }, [])



  return (
    <>

      {/* {
        data.map((el, index) => (
          <h1 key={index}>{el.name}</h1>
        ))
      } */}
      <div className="container">
        <div className="row">
          {data.map((el, index) => (
            <div className="col-md-4 shadow">
              <div className="card my-3 mx-2" style={{ width: "18rem;" }}>
                <img src={""+el.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.categoryId}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          )



          )}

        </div>
      </div>

    </>
  )
}

export default App
